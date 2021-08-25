import React, { useState, useEffect } from "react";
import List from "./List";
import ListView from "./ListView";
import db from "../firebaseConfig";
import Switch from "@material-ui/core/Switch";
import { Button, Col, Row, Form, FormControl } from "react-bootstrap";
import "../App.css";

const MainBoard = () => {
  const [view, setView] = useState(false);
  const [listName, setListName] = useState("");
  const [lists, setLists] = useState([]);

  //fetches all the lists inside the collection "board" inside the database.
  const fetchLists = async () => {
    await db.collection("board").onSnapshot(function (querySnapshot) {
      setLists(
        querySnapshot.docs.map((list, index) => {
          return {
            id: list.id,
            sortedByName: false,
            key: index,
            listName: list.listName,
            ...list.data(),
          };
        })
      );
    });
  };

  useEffect(() => {
    fetchLists();
  }, []);

  // add a list inside the board when clicked with the name inside the state "listName"
  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("board").add({
      listName,
    });
    setListName("");
  };

  const onChange = (e) => {
    e.preventDefault();
    setListName(e.target.value);
  };

  const handleChange = () => {
    setView(!view);
  };

  return (
    <div className="mainContainer" style={{ minHeight: "75vh", backgroundColor: '#f4f6f7' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', color: "#fff", backgroundColor: "#2e3548" }}>
        <div style={{ margin: '10px', alignItems: 'center' }}>
          <Form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Form.Control
              type="text"
              name="List"
              placeholder="List Name"
              value={listName}
              onChange={onChange}

            />{" "}
            <Button type="submit" style={{ height: '40px', width: '150px', marginLeft: '15px', borderColor: "rgb(193, 143, 89)", borderRadius: "10px", backgroundColor: "rgb(193, 143, 89)", color: "rgb(255, 255, 255)" }} >Add List</Button>
          </Form>
        </div>
        <div style={{marginRight : '10px'}}>
          <span>Board View</span>
          <Switch
            checked={view}
            onChange={handleChange}
            color="rgba(193, 143, 89)"
            name="board"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <span>List View</span>
        </div>
      </div>
      {!view ? (
        <Row>
          {lists.map((list) => {
            return (
              <Col>
                <List listName={list.listName} id={list.id} key={list.id} />
              </Col>
            );
          })}
        </Row>
      ) : (
        <div>
          {lists.map((list) => {
            return (
              <ListView listName={list.listName} id={list.id} key={list.id} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MainBoard;
