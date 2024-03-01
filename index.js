// javascript

// const heading = document.createElement("h2");
// heading.textContent =  "hello world";
// heading.classname = "header";

// document.getElementById("root").append(heading);

// react

const reactHeading = React.createElement("h1" , {className:"head" , id:"reactHead" ,children:"Hello React"});
ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
// console.log("React element :",reactHeading);