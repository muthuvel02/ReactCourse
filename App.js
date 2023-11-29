const heading = React.createElement("h2", {id:"head"}, "hello world from the react component ");// it is just an object..
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // it will take an object convert them into an tag which will create an tag and place an object on it..
console.log(heading); 