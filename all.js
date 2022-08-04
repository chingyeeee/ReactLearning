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
// function callDogName() {
//   return "rice ball";
// }
// const dogColor = "red";
// const content = <h1 className={dogColor}>Hello {callDogName()}</h1>;
// root.render(content);

// 04-Clock in React
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <p>The time now is {new Date().toLocaleTimeString()}</p>
//     </div>
//   );
//   root.render(element);
// }
// setInterval(tick, 1000);

// 05-Component 首字母需大寫
// function Welcome() {
//   return <h1>Hello, how are you?</h1>;
// }
// const element = <Welcome></Welcome>; //component
// root.render(element);

// 06-Component-props
// function Welcome(props) {
//   let sayHelloTimes = 1;
//   return (
//     <div>
//       <h1>
//         Hello, I am {props.name}, and {props.age} year-old now, greeting to you{" "}
//         {sayHelloTimes} :)
//       </h1>
//       <input type="button" value="greet" />
//     </div>
//   );
// }
// const element = <Welcome name="summer" age="6"></Welcome>;
// root.render(element);

// 07-Component-建立App模組，來組合component
function Welcome(props) {
  return (
    <h1>
      Hello, I am {props.name}, and {props.age} year-old now
    </h1>
  );
}
function App() {
  return (
    <div>
      <Welcome name="Mary" age="2"></Welcome>
      <Welcome name="Danny" age="7"></Welcome>
    </div>
  );
}
root.render(<App />); //因為不會有子層 可以直接寫<App />
