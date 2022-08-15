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
// function Welcome(props) {
//   return (
//     <h1>
//       Hello, I am {props.name}, and {props.age} year-old now
//     </h1>
//   );
// }
// function App() {
//   return (
//     <div>
//       <Welcome name="Mary" age="2"></Welcome>
//       <Welcome name="Danny" age="7"></Welcome>
//     </div>
//   );
// }
// root.render(<App />); //因為不會有子層 可以直接寫<App />

// 08-Component-map1
// const numbers = [1, 2, 3, 4, 5];
// const numberList = numbers.map((num, i) => (
//   <li key={i}>
//     index:{i}, value:{num}
//   </li>
// ));
// root.render(<ul>{numberList}</ul>);

//09-Component-map1.2 少一個預括號
// const numbers = [1, 2, 3, 4, 5];
// const numberList = numbers.map((num, i) => (
//   <li key={i}>
//     index:{i}, value:{num}
//   </li>
// ));
// root.render(<ul>{numberList}</ul>);

// 10-Component-map2-物件作法
// const queue = [
//   {
//     num: 1,
//     name: "TOM",
//   },
//   {
//     num: 2,
//     name: "APPLE",
//   },
//   {
//     num: 3,
//     name: "IRIS",
//   },
// ];
// const numLists = queue.map((person, i) => (
//   <li key={i}>
//     {person.num} : {person.name}
//   </li>
// ));
// root.render(<ul>{numLists}</ul>);

// 11-Component-map2.1-物件作法
// const students = ["Tom", "Apple", "Iris"];
// function Welcome(props) {
//   return <h1>Hello, I am {props.name}</h1>;
// }
// function App() {
//   return (
//     <div>
//       {students.map((studentname, i) => {
//         return <Welcome key={i} name={studentname} />;
//       })}
//     </div>
//   );
// }

// root.render(<App />);

// 12-Component-觀察變數有更新，但無法 render
function Welcome(props) {
  let sayHello = 1;
  return (
    <div>
      <h1>
        Hello, I am {props.name}, and {props.age} year-old now, greeting to you{" "}
        {sayHello} :)
      </h1>
      <input
        type="button"
        value="greet"
        onClick={() => {
          sayHello = sayHello + 1;
          // console.log(sayHello);
        }}
      />
    </div>
  );
}
const element = <Welcome name="Mary" age="3"></Welcome>;
root.render(element);
