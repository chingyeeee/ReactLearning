const root = ReactDOM.createRoot(document.querySelector("#root"));
const { useState, useEffect } = React;

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
// function Welcome(props) {
//   let sayHello = 1;
//   return (
//     <div>
//       <h1>
//         Hello, I am {props.name}, and {props.age} year-old now, greeting to you{" "}
//         {sayHello} :)
//       </h1>
//       <input
//         type="button"
//         value="greet"
//         onClick={() => {
//           sayHello = sayHello + 1;
//           // console.log(sayHello);
//         }}
//       />
//     </div>
//   );
// }
// const element = <Welcome name="Mary" age="3"></Welcome>;
// root.render(element);

// 13-元件設計-多個元件
// const students = ["Bob", "Mary", "Tom"];

// function Welcome({ name }) {
//   return <h1>Hello, I am {name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       {students.map((student, index) => {
//         return <Welcome key={index} name={student} />;
//       })}
//     </div>
//   );
// }

// root.render(<App />);

// 14-元件設計-一個餐廳有一個黑板
// const Board = function ({ slogan }) {
//   return <h3 className="board">{slogan}</h3>;
// };

// const Restaurant = function () {
//   return (
//     <>
//       <Board slogan="今日特餐是烤雞腿炒飯" />
//     </>
//   );
// };

// const App = function () {
//   return <Restaurant />;
// };

// root.render(<App />);

// 15-多個資料>單一模組(黑板)
// const Board = function ({ product }) {
//   return <h3 className="board">今日特價是{product}</h3>;
// };

// const Restaurant = function () {
//   return (
//     <>
//       <h1>Restaurant</h1>
//       <Board product="烤雞腿炒飯" />
//     </>
//   );
// };

// const Cafe = function ({ product }) {
//   return (
//     <>
//       <h1>Cafe</h1>
//       <Board product="草莓鬆餅" />
//     </>
//   );
// };

// const App = function () {
//   return (
//     <>
//       <Restaurant />
//       <Cafe />
//     </>
//   );
// };

// root.render(<App />);

// 16-單一資料>多個模組(桌面、門口)
// const slogan = "用餐前請消毒雙手!";

// const Board = function ({ product }) {
//   return <h3 className="board">今日特價是{product}</h3>;
// };

// const Door = function ({ slogan }) {
//   return <h4 className="door">Door Warning: {slogan}</h4>;
// };

// const Desk = function ({ slogan }) {
//   return <h4 className="desk">Desk Warning: {slogan}</h4>;
// };

// const Restaurant = function () {
//   return (
//     <>
//       <h1>Restaurant</h1>
//       <Board product="烤雞腿炒飯" />
//       <Door slogan={slogan} />
//     </>
//   );
// };

// const Cafe = function ({ product }) {
//   return (
//     <>
//       <h1>Cafe</h1>
//       <Board product="草莓鬆餅" />
//       <Desk slogan={slogan} />
//     </>
//   );
// };

// const App = function () {
//   return (
//     <>
//       <Restaurant />
//       <Cafe />
//     </>
//   );
// };

// root.render(<App />);

// 17-元件化購物車
// const CalcTotal = function ({ porductList }) {
//   return <p>總共有 {porductList.length} 個產品</p>;
// };

// function Product() {
//   const prodcutData = ["狗食", "貓食", "狗玩具", "貓玩具"];
//   return (
//     <>
//       <h2>產品頁面</h2>
//       <ul>
//         {prodcutData.map((item, i) => {
//           return <li>{item}</li>;
//         })}
//       </ul>
//       <CalcTotal porductList={prodcutData} />
//     </>
//   );
// }
// function Cart() {
//   const cartData = ["狗食", "貓食"];
//   return (
//     <>
//       <h2>購物車頁面</h2>
//       <ul>
//         {cartData.map((item, i) => {
//           return <li>{item}</li>;
//         })}
//       </ul>
//       <CalcTotal porductList={cartData} />
//     </>
//   );
// }
// const App = function () {
//   return (
//     <>
//       <Product />
//       <Cart />
//     </>
//   );
// };
// root.render(<App />);

// 18-元件化彈跳視窗
// const Modal = function ({ btnText, modalText }) {
//   return (
//     <input value={btnText} type="button" onClick={(e) => alert(modalText)} />
//   );
// };
// const CalcTotal = function ({ porductList }) {
//   return <p>總共有 {porductList.length} 個產品</p>;
// };
// function Product() {
//   const prodcutData = ["狗食", "貓食", "狗玩具", "貓玩具"];
//   return (
//     <>
//       <h2>產品頁面</h2>
//       <Modal btnText="向客戶打招呼" modalText="hi~ 妳好嗎？" />
//       <ul>
//         {prodcutData.map((item, i) => {
//           return <li>{item} </li>;
//         })}
//       </ul>
//       <CalcTotal porductList={prodcutData} />
//     </>
//   );
// }
// function Cart() {
//   const cartData = ["狗食", "貓食"];
//   return (
//     <>
//       <h2>購物車頁面</h2>
//       <Modal
//         btnText="向客戶鼓勵結帳"
//         modalText="錢錢沒有不見，只是變成你喜歡的形狀！"
//       />
//       <ul>
//         {cartData.map((item, i) => {
//           return <li>{item}</li>;
//         })}
//       </ul>
//       <CalcTotal porductList={cartData} />
//     </>
//   );
// }
// const App = function () {
//   return (
//     <>
//       <Product />
//       <Cart />
//     </>
//   );
// };
// root.render(<App />);

// 19-useEffect
const CountArea = function () {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(`資料已點擊 ${count} 次`);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
};

root.render(<CountArea />);
