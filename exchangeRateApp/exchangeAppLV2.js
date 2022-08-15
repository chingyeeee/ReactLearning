const { useState } = React;
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [newCurrency, setNewCurrency] = useState({ name: "", rate: 0 });
  const [currency, setCurrency] = useState([
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
  ]);
  const [twd, setTwd] = useState(0);
  const [exchangeTwd, setExchangeTwd] = useState(0);

  const startExchange = function () {
    if (Number.isFinite(twd) && twd < 0) return;
    setExchangeTwd(twd);
    setTwd(0);
  };

  return (
    <>
      <h3>匯率轉換器</h3>

      <p>新增幣種</p>

      <div>
        <input
          type="text"
          placeholder="請輸入幣種名稱"
          value={newCurrency.name}
          onChange={(e) =>
            setNewCurrency({ ...newCurrency, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="請輸入幣種轉換率"
          value={newCurrency.rate || ""}
          onChange={(e) =>
            setNewCurrency({ ...newCurrency, rate: e.target.value })
          }
        />
        <input
          type="button"
          value="新增幣種"
          onClick={() => setCurrency([...currency, newCurrency])}
        />
      </div>

      <p>轉換金額</p>
      <div>
        <input
          type="number"
          placeholder="請輸入台幣金額"
          value={twd || ""}
          onChange={(e) => setTwd(e.target.value)}
        />
        <input type="button" value="轉換" onClick={startExchange} />
      </div>

      <ul>
        {currency.map(({ name, rate }, index) => {
          return <li key={index}>{`${name} : ${rate * exchangeTwd}`}</li>;
        })}
      </ul>
    </>
  );
}

root.render(<App />);
