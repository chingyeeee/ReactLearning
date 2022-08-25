const { useState } = React;

const TodoInput = function ({ inputValue, handleInputValue, addTodo }) {
  return (
    <div className="inputBox">
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={inputValue}
        onChange={handleInputValue}
      />
      <a href="#" onClick={addTodo}>
        <i className="fa fa-plus"></i>
      </a>
    </div>
  );
};

const TodoItem = function (props) {
  const { item, todos, setTodos, handleTodoState, removeTodo } = props;
  const { createDate, todo, done } = item;

  return (
    <li>
      <label className="todoList_label">
        <input
          className="todoList_input"
          type="checkbox"
          value="true"
          onChange={handleTodoState}
          checked={done}
        />
        <span>
          {todo}
          {done}
        </span>
      </label>
      <a href="#" onClick={removeTodo}>
        <i data-id={createDate} className="fa fa-times"></i>
      </a>
    </li>
  );
};

const TodoList = function () {
  const [todos, setTodos] = useState([
    { createDate: 202208180000, todo: "把冰箱發霉的檸檬拿去丟", done: false },
    { createDate: 202208180001, todo: "打電話叫媽媽匯款給我", done: false },
    { createDate: 202208180002, todo: "整理電腦資料夾", done: false },
    { createDate: 202208180003, todo: "繳電費水費瓦斯費", done: false },
    { createDate: 202208180004, todo: "約vicky禮拜三泡溫泉", done: false },
    { createDate: 202208180005, todo: "約ada禮拜四吃晚餐", done: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  // 監聽input value的變動
  const handleInputValue = (e) => setInputValue(e.target.value);

  // 增加Todo
  const addTodo = () => {
    if (!inputValue) return;

    setTodos([
      ...todos,
      { createDate: Date.now(), todo: inputValue, done: false },
    ]);
  };

  //刪除Todo
  const removeTodo = (e) => {
    const id = e.target.dataset.id;
    setTodos(todos.filter((todo) => todo.createDate != id));
  };

  //監聽Todo的狀態
  const handleTodoState = (id) => {
    console.log(id);
    // setTodos(
    //   todos.map((todo) => {
    //     todo.createDate == id
    //       ? { createDate: todo.createDate, todo: todo.todo, done: !todo.done }
    //       : todo;
    //   })
    // );
  };

  return (
    <div className="todoList_Content">
      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleInputValue={handleInputValue}
        addTodo={addTodo}
      />
      <div className="todoList_list">
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
        <div className="todoList_items">
          <ul className="todoList_item">
            {todos.map((item) => {
              return (
                <TodoItem
                  key={item.createDate}
                  item={item}
                  todos={todos}
                  setTodos={setTodos}
                  handleTodoState={handleTodoState}
                  removeTodo={removeTodo}
                />
              );
            })}
          </ul>
          <div className="todoList_statistics">
            <p>{todos.length}個已完成項目</p>
            <a href="#">清除已完成項目</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = function () {
  return (
    <>
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
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
