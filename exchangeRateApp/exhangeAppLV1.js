const { useState } = React;
const root = ReactDOM.createRoot(document.getElementById("root"));

const rates = [
  {
    name: "日幣",
    rate: 4.45,
  },
  {
    name: "美金",
    rate: 0.033,
  },
  {
    name: "澳幣",
    rate: 0.048,
  },
  {
    name: "韓幣",
    rate: 43.3,
  },
  {
    name: "印尼幣",
    rate: 497.53,
  },
];

function App() {
  const [twd, setTwd] = useState("");
  const [inputValue, setInputValue] = useState(0);

  const valueChanged = function (e) {
    setInputValue(e.target.value);
  };

  const submitValue = function () {
    if (inputValue < 0) return;
    setTwd(inputValue);
  };

  const currency = rates.map((item, i) => {
    return (
      <li key={i}>
        {item.name} : {Math.round(item.rate * twd)} 元
      </li>
    );
  });

  return (
    <>
      <h1>匯率轉換器</h1>
      請輸入您要換的台幣
      <input type="text" placeholder="台幣" onChange={valueChanged} />
      <input type="button" value="計算" onClick={submitValue} />
      <p>可以換算</p>
      <p />
      <ul>{currency}</ul>
    </>
  );
}

root.render(<App />);
