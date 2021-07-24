const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth')

// Register
router.post("/", async (req, res) => {
    try {
        const { email, password, passwordVerify, firstName, lastName } = req.body;
        // validation
        if (!email || !password || !passwordVerify || !firstName || !lastName)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });

        if (password.length < 6)
            return res.status(400).json({
                errorMessage: "Please enter a password of at least 6 characters.",
            });

        if (password !== passwordVerify)
            return res.status(400).json({
                errorMessage: "Please enter the same password twice.",
            });

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                errorMessage: "An account with this email already exists.",
            });

        // hash the password

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // Save new user

        const newUser = new User({
            email, passwordHash, firstName, lastName
        })

        const savedUser = await newUser.save();

        // sign the token

        const token = jwt.sign(
            {
                user: savedUser._id,
            },
            process.env.JWT_SECRET
        );

        // Send Token HTTP ONLY

        res
            .cookie("token", token, {
                httpOnly: true,
                // secure: true,
                // sameSite: "none",
            })
            .send();

    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
})

// Login

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res
                .status(401)
                .json({ errorMessage: "Wrong Email or Password" });
        }

        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash)
        if (!passwordCorrect) {
            return res
                .status(401)
                .json({ errorMessage: "Wrong Email or Password" });
        }
        // sign the token

        const token = jwt.sign(
            {
                user: existingUser._id,
            },
            process.env.JWT_SECRET
        );

        // send the token in a HTTP-only cookie

        res
            .cookie("token", token, {
                httpOnly: true,
                // secure: true,
                // sameSite: "none",
            })
            .send();
    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
});

// logout

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        // secure: true,
        // sameSite: "none",
    })
        .send()
        res.send(false)

})

// login 

router.get("/logged", (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) return res.json(false);
  
      jwt.verify(token, process.env.JWT_SECRET);
  
      res.send(true);
    } catch (err) {
      res.json(false);
    }
  });
  
//   Get the logged in user data

router.get("/getUserData", auth, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user }, 'email firstName lastName picUrl');
        res.json(user)
    } catch (err) {
        console.error(err)
        res.status(500).send();
    }
});

// Get all users from the server

router.get("/getAllUsers", auth, async (req, res) => {
    try {
    User.find({}, 'email firstName lastName picUrl').then((result) => res.json(result))
    } catch {
        console.error(err)
        res.status(500).send();
    }
})


module.exports = router;