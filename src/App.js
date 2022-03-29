import React from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./todoComponent";
import FormTodo from "./formTodoComponent";

function App() {
  const [todos, setTodos] = React.useState([
    {
      name: "name",
      age: "0",
      city: "city",
      isDone: false,
      isEdite: false,
    },
  ]);

  const [selectedItem, setSelectedItem] = React.useState({
    name: "name",
    age: "0",
    city: "city",
    isDone: false,
    isEdite: false,
  });

  const addTodo = (valuesObj) => {
    const newTodos = [...todos, valuesObj];

    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;

    setTodos(newTodos);
  };

  const selectItem = (item) => {
    let rowItem = item;
    setSelectedItem(rowItem);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateListTodo = (newlist) => {
    setTodos(newlist);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <div className="text-center  mx-auto">
          <FormTodo addTodo={addTodo} />
        </div>

        <div>
          {todos.map((todo, index) => (
            <Card key={index} className="mt-3">
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  selectItem={selectItem}
                  selecteditem={selectedItem}
                  list={todos}
                  updatelstapp={updateListTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
