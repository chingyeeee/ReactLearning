const { useState } = React;

const App = function () {
  const [todos, setTodos] = useState([
    { id: 1661245640790, title: "把冰箱發霉的檸檬拿去丟", done: false },
    { id: 1661245640791, title: "打電話叫媽媽匯款給我", done: false },
    { id: 1661245640792, title: "整理電腦資料夾", done: false },
    { id: 1661245640793, title: "繳電費水費瓦斯費", done: false },
    { id: 1661245640794, title: "約vicky禮拜三泡溫泉", done: false },
    { id: 1661245640795, title: "約ada禮拜四吃晚餐", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const [tabType, setTabType] = useState(1);

  //取得新TodoItem的title
  const handlerNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  //把新TodoItem加到原有的Todos
  const addTodo = () => {
    if (!newTodo) return;

    setTodos([...todos, { id: Date.now(), title: newTodo, done: false }]);

    setNewTodo("");
  };

  //刪除todos
  const delTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  //切換checkbox state
  const handlerTodoState = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTodos(newTodos);
  };

  // 計算已完成項目
  const completedTodo = todos.filter((item) => item.done);

  // 清除已完成項目
  const clearCompletedTodo = () => {
    const newTodos = todos.filter((item) => !item.done);
    setTodos(newTodos);
  };

  return (
    <div id="todoListPage" className="bg-half">
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
      </nav>
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          {/* newTodo */}
          <div className="inputBox">
            <input
              type="text"
              placeholder="請輸入待辦事項"
              value={newTodo}
              onChange={handlerNewTodo}
            />
            <a href="#" onClick={addTodo}>
              <i className="fa fa-plus"></i>
            </a>
          </div>

          <div className="todoList_list">
            {/* TabType */}
            <ul className="todoList_tab">
              <li>
                <a href="#" className="active">
                  全部
                </a>
              </li>
              <li>
                <a href="#">待完成</a>
              </li>
              <li>
                <a href="#">已完成</a>
              </li>
            </ul>
            {/* TodoItem */}
            <div className="todoList_items">
              <ul className="todoList_item">
                {todos.map((item, i) => {
                  return (
                    <li key={i}>
                      <label className="todoList_label">
                        <input
                          className="todoList_input"
                          type="checkbox"
                          onChange={() => handlerTodoState(item.id)}
                          checked={item.done}
                        />
                        <span>{item.title}</span>
                      </label>
                      <a href="#" onClick={() => delTodo(item.id)}>
                        <i className="fa fa-times"></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="todoList_statistics">
                <p> {completedTodo.length} 個已完成項目</p>
                <a href="#" onClick={clearCompletedTodo}>
                  清除已完成項目
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
