import { Button } from "react-bootstrap";
import React from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyVerticallyCenteredModal from "./editPobComponent";

export default function Todo({
  todo,
  index,
  markTodo,
  removeTodo,
  updatelstapp,
  selectItem,
  selecteditem,
  list,
}) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.name}
        </span>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.age}
        </span>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.city}
        </span>

        <div>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
              selectItem(todo);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>{" "}
          <Button variant="outline-success" onClick={() => markTodo(index)}>
            ✓
          </Button>{" "}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>
            ✕
          </Button>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        index={index}
        choosenitem={selecteditem}
        list={list}
        updatelsttodo={updatelstapp}
      />
    </>
  );
}
