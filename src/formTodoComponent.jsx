import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function FormTodo({ addTodo }) {
  const styles = {
    input: {
      width: "50%",
    },
  };

  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !city) return;
    let todoObj = {
      name: name,
      age: age,
      city: city,
    };
    addTodo(todoObj);

    setName("");
    setAge("");
    setCity("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Task</b>
        </Form.Label>
        <Form.Control
          style={styles.input}
          type="text"
          className="input mx-auto mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add name"
        />
        <Form.Control
          style={styles.input}
          type="text"
          className="input mx-auto mb-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Add age"
        />
        <Form.Control
          style={styles.input}
          type="text"
          className="input mx-auto mb-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Add city"
        />
      </Form.Group>

      <Button variant="btn btn-primary " type="submit">
        Submit
      </Button>
    </Form>
  );
}
