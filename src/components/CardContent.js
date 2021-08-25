import React, { useState } from "react";
import db from "../firebaseConfig";
import CardForm from "./CardForm";
import { GrCheckbox } from "react-icons/gr";
import { Card, ListGroup, Button } from "react-bootstrap";

const CardContent = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState(false);

  const deleteCard = () => {
    db.collection("board")
      .doc(props.docId)
      .collection("card")
      .doc(props.id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const handleClick = () => {
    setShowForm((showForm) => !showForm);
  };

  const handleStatus = (e) => {
    setStatus((status) => !status);
    e.preventDefault();
    db.collection("board")
      .doc(props.docId)
      .collection("card")
      .doc(props.id)
      .update({
        status: status ? false : true,
      });
    db.collection("completed").add({
      title: props.title,
      status: !status,
      shippingDate: props.shippingDate,
      responsibility: props.responsibility,
      description: props.description,
      destination: props.destination,
      quantity: props.quantity,
    });
    deleteCard();
  };

  return (
    <Card
      key={props.id}
      style={{ backgroundColor: "rgb(46, 53, 72)", width: '18rem', marginBottom : '10px', color:"white" }}
    >
      <Card.Body>
        <Card.Title>
          {props.title}
        </Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item><b>Due Date:</b> {props.shippingDate}</ListGroup.Item>
        <ListGroup.Item><b>Responsibility:</b> {props.responsibility}</ListGroup.Item>
        <ListGroup.Item> <b>Destination:</b> {props.destination}</ListGroup.Item>
        <ListGroup.Item><b>Quantity:</b> {props.quantity}</ListGroup.Item>
        <ListGroup.Item>
          <span onClick={handleStatus}>
            <GrCheckbox type="checkbox" />
            {props.status}
            <span> <b>Not Completed</b></span>
          </span>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body style={{ display: 'flex', flexDirection : 'row', justifyContent: 'space-around'}}>
        <Button onClick={handleClick} style={{backgroundColor:'transparent', border:"solid 1px #e9e8eb", color:'#fff' }} > Edit </Button>
        {showForm && (
          <CardForm
            handleClick={handleClick}
            showForm={showForm}
            docId={props.docId}
            id={props.id}
            title={props.title}
            status={props.status}
            shippingDate={props.shippingDate}
            responsibility={props.responsibility}
            description={props.description}
            destination={props.destination}
            quantity={props.quantity}
          />
        )}{"   "}
        <Button onClick={deleteCard} variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}


export default CardContent;
