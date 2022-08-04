const root = ReactDOM.createRoot(document.querySelector("#root"));

// 01-JSX大括號接受表達式
// const num = 2;
// root.render(<h1>Hello, {num}</h1>);

// 02-JSX函式表達式
// function callDogName() {
//   return "rice ball";
// }
// const content = <h1>Hello {callDogName()}</h1>;
// root.render(content);

// 03-JSX 屬性設計
function callDogName() {
  return "rice ball";
}
const dogColor = "red";
const content = <h1 className={dogColor}>Hello {callDogName()}</h1>;
root.render(content);
