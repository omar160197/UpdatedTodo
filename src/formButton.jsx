import React from "react";
import { Button } from "react-bootstrap";
export default function FormButton(props) {
  return (
    <Button onClick={props.onClick} variant="btn btn-primary ">
      Submit
    </Button>
  );
}
