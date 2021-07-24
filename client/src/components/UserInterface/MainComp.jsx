import styled from "styled-components"

export const Logo = styled.img`
    width: ${props => props.width};
`
export const Card = styled.div`
    padding: 1em;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #F0F0F0;
    margin: 1em;
    box-shadow:
    inset 0px 18px 0px -10px ${props => props.shadowColor},
    inset 0px -11px 8px -10px #fff; 
    transition: 0.2s ease;
    &:hover{
        background-color: #F8F8F8;
    }
`

export const Tag = styled.div`
    color: ${props => props.fontColor};
    background-color: ${props => props.bgColor};
    width: fit-content;
    padding: 0.25rem;
    border-radius: 10px;
    display: inline-block;
`

export const Button = styled.button`
    display:block;
    border: none;
    width: 10rem;
    color:white;
    margin: 1em 0 1em 0;
    padding: 1em;
    border-radius: 5px;
    font-weight: 600;   
    background-color:#0066FF; 
    transition: 0.3s ease;
    cursor: pointer; 
    &:hover{
        background-color:#005CE6;
        boxShadow: "0px 0px 24px 5px rgba(153,153,153,0.17)"
    } 
`
export const ButtonWhite = styled.button`
    display:block;
    border: none;
    width: 10rem;
    color:#0066FF;
    margin: 1em 0 1em 0;
    padding: 1em;
    border-radius: 5px;
    font-weight: 600;   
    background-color:white;
    border: 1px solid #F0F0F0;  
    transition: 0.3s ease;
    cursor: pointer; 
    &:hover{
        border: 1px solid #0066FF;  
        boxShadow: "0px 0px 24px 5px rgba(153,153,153,0.17)"
    } 
`

export const Select = styled.select.attrs(props => ({
    width: props.width || "100%",
}))`
      border: 1px solid #D9D9D9;
      border-radius: 4px;
      padding: 0.75rem;
      display:block;
      transition: 0.3s ease;
      box-sizing: border-box;
      &:focus{
        background: #f6f6f6;
    }
    width: ${props => props.width};
  `;

export const Input = styled.input.attrs(props => ({
    width: props.width || "100%",
}))`
      border: 1px solid #D9D9D9;
      border-radius: 4px;
      padding: 0.75rem;
      display:block;
      transition: 0.3s ease;
      box-sizing: border-box;
      &:focus{
        background: #f6f6f6;
    }
    width: ${props => props.width};
  `;

export const Flex = styled.div`
  display:flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  background-color: ${props => props.bgColor};
  flex-direction: ${props => props.direction}

`

export const FlexContainer = styled.div`
    display:flex;
    justify-content: center;
    margin-top: ${props => props.marginTop}
`

export const FlexJustify = styled.div`
display:flex;
justify-content: ${props => props.justify};
align-items: center;
`

export const Container = styled.div`
    background-color: ${props => props.bgColor};
    background-image: ${props => props.bgPic};
    background-size: ${props => props.bgSize};
    background-repeat: ${props => props.bgRepeat};
    background: ${props => props.bgProps};
    border-radius: ${props => props.bRadius};
    width: ${props => props.width};
    height: ${props => props.height};
    display: ${props => props.display};
    grid-template-columns: ${props => props.gridTemplateColumns};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    flex-grow: ${props => props.grow};
    flex-direction: ${props => props.direction}
    justify-content: ${props => props.justify}
`

export const Title = styled.h1`
    font-family: ${props => props.fontFamily}

`

export const Form = styled.form`
`

// export const Form = styled.form({
//     padding: "0.5em",
//     border: "1px solid #f0f0f0",
//     boxShadow: "0px 0px 24px 5px rgba(153,153,153,0.17)"
// });

export const InputGrid = styled.div({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1rem"
})

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );

`

export const Error = styled.div`
    background-color: tomato;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    padding: 1rem;
`

export const H4 = styled.h4`
    color: ${props => props.fontColor};
    margin: 0;
`

export const H2 = styled.h4`
    color: ${props => props.fontColor};
    font-size: 1.5em;
    text-align: ${props => props.txtAlign}
`

export const AvatarParent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: rgb(243, 243, 243);
  border: 1px solid rgb(214, 214, 214);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(props) => `url(${props.background}) no-repeat top center`}
    rgb(243, 243, 243);

  &:not(last-child) {
    margin-left: -3px;
  }
`;

export const SpanSmall = styled.span`
color: gray;
font-weight: 300;
font-size: 0.75em;

`