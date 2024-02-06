import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*
const heading = React.createElement("h1",{},"Namaste React");

console.log(heading);

const jsxheading = <h1 id="container">hiii this is JSX</h1> 
root.render(heading);
root.render(jsxheading);

*/
// React components
const Title =()=>(
    <div>
        <h1>Hello react</h1>
    </div>
)

const Heading = ()=>(
    <div>
        <h1>this is fucntion compoonenet</h1>
        <Title/>
    </div>
    
)

root.render(<Heading/>);
