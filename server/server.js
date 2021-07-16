const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser())
app.listen(PORT, () => console.log(`😀 Server Started: ${PORT}`));

app.use(cors({
    origin: "http://localhost:3001",
    credentials: true,
}))

// CONNECT THE DB
const mongoURL = process.env.MDB_CONNECT;
mongoose.set("useUnifiedTopology", true);

mongoose
    .connect(mongoURL, { useNewUrlParser: true })
    .then(() => console.log("Connected to Mongo"))
    .catch((err) => console.error(err))

// Routs

app.use("/auth", require("./routers/userRouter"))
app.use("/projects", require("./routers/projectRouter"))





