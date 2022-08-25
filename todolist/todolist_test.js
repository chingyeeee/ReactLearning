const { useState } = React;

const App = function () {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  const [currentTab, setCurrentTab] = useState("all");

  const [tabList, setTabList] = useState([
    { type: "all", title: "全部" },
    { type: "pending", title: "待完成" },
    { type: "completed", title: "已完成" },
  ]);

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

  //切換頁籤status
  const handlerTabType = (type) => {
    setCurrentTab(type);
  };

  //頁籤active class
  const activeTabType = (type) => {
    return currentTab === type ? "active" : "";
  };

  //根據頁籤更換顯示todos
  const filteredTodos = todos.filter((item) => {
    if (currentTab === "pending") return !item.done;
    if (currentTab === "completed") return item.done;

    return item;
  });

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
              {tabList.map((tab) => (
                <li key={tab.type}>
                  <a
                    href="#"
                    className={activeTabType(tab.type)}
                    onClick={() => handlerTabType(tab.type)}
                  >
                    {tab.title}
                  </a>
                </li>
              ))}
            </ul>
            {/* TodoItem */}
            <div className="todoList_items">
              <ul className="todoList_item">
                {filteredTodos.map((item, i) => {
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
