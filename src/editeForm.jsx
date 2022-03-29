import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import FormButton from "./formButton";

export default function EditForm(props) {
  const styles = {
    input: {
      width: "50%",
    },
  };

  const [name, setName] = React.useState(props.selecteditem.name);
  const [age, setAge] = React.useState(props.selecteditem.age);
  const [city, setCity] = React.useState(props.selecteditem.city);
  const [newList, setNewList] = React.useState(props.mylist);
  const [updatedList] = React.useState(newList);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.hidePopUp();

    let newIndex = props.myindex;

    updatedList[newIndex].name = name;
    updatedList[newIndex].age = age;
    updatedList[newIndex].city = city;

    setNewList(updatedList);

    props.updatelsttodo(newList);
  };

  return (
    <Form>
      <Form.Group>
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
      <div className="d-flex justify-content-end">
        <FormButton onClick={handleSubmit} />
         
        <Button style={{ marginLeft: "5px" }} onClick={props.hidePopUp}>
          Close
        </Button>
      </div>
    </Form>
  );
}
