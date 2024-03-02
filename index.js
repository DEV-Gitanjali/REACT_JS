// javascript

// const heading = document.createElement("h2");
// heading.textContent =  "hello world";
// heading.classname = "header";

// document.getElementById("root").append(heading);

// react with js and jsx

// const reactHeading = React.createElement("h1" , {className:"head" , id:"reactHead" ,children:"Hello React"});
// const jsxHeading = <h1 classname="head">Hello Jsx</h1>
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
// console.log("React element :",reactHeading);



// React fragment
const jsxHeading = <React.Fragment>

    <h1 classname="head">Hello Jsx</h1>
    <p>this is created using jsx</p>
</React.Fragment>
    ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);