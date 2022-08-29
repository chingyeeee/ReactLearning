const { useState } = React;

// TodoInput元件
const TodoInput = function ({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  //把新TodoItem加到原有的Todos
  const addTodo = () => {
    if (!newTodo) return;

    setTodos([...todos, { id: Date.now(), title: newTodo, done: false }]);

    setNewTodo("");
  };

  //取得新TodoItem的title
  const handlerNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  return (
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
  );
};

//TabBar元件
const TabBar = function (props) {
  const { currentTab, setCurrentTab } = props;

  const tabList = [
    { type: "all", title: "全部" },
    { type: "pending", title: "待完成" },
    { type: "completed", title: "已完成" },
  ];

  //切換頁籤status
  const handlerTabType = (type) => {
    setCurrentTab(type);
  };

  //頁籤active class
  const activeTabType = (type) => {
    return currentTab === type ? "active" : "";
  };

  return (
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
  );
};

//TodoItem元件
const TodoItem = function (props) {
  const { item, todos, setTodos } = props;
  //切換checkbox state
  const handlerTodoState = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTodos(newTodos);
  };

  //刪除todos
  const delTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  return (
    <li>
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
};

const TodoList = function () {
  const [todos, setTodos] = useState([]);

  const [currentTab, setCurrentTab] = useState("all");

  // 計算已完成項目
  const completedTodo = todos.filter((item) => item.done);

  // 清除已完成項目
  const clearCompletedTodo = () => {
    const newTodos = todos.filter((item) => !item.done);
    setTodos(newTodos);
  };

  //根據頁籤更換顯示todos
  const filteredTodos = todos.filter((item) => {
    if (currentTab === "pending") return !item.done;
    if (currentTab === "completed") return item.done;

    return item;
  });

  return (
    <div className="todoList_Content">
      {/* newTodo */}
      <TodoInput todos={todos} setTodos={setTodos} />
      <div className="todoList_list">
        {/* TabType */}
        <TabBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {/* TodoItem */}
        <div className="todoList_items">
          <ul className="todoList_item">
            {todos.length > 0 ? (
              filteredTodos.map((item, i) => (
                <TodoItem
                  key={i}
                  item={item}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))
            ) : (
              <li>
                <label className="todoList_label">目前尚無代辦事項</label>
              </li>
            )}
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
  );
};

const App = function () {
  return (
    <div id="todoListPage" className="bg-half">
      <nav>
        <h1>
          <a href="#">ONLINE TODO LIST</a>
        </h1>
      </nav>
      <div className="conatiner todoListPage vhContainer">
        <TodoList />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
