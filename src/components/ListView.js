import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import CardListView from "./CardListView";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css';


const ListView = (props) => {
  const [cards, setCards] = useState([]);
  const docId = props.id;

  // fetching the cards inside the database.


  //control argument needs to be figured out.
  useEffect(() => {
    const fetchCards = async () => {
      await db
        .collection("board")
        .doc(docId)
        .collection("card")
        .onSnapshot(function (querySnapshot) {
          setCards(
            querySnapshot.docs.map((card, index) => {
              return {
                id: card.id,
                key: index,
                ...card.data(),
              };
            })
          );
        });
    };
    fetchCards();
  }, [docId]);

  return (
    <Accordion style = {{ margin : '10px'}}>
      <AccordionItem key={docId}>
        {/* <AccordionItemHeading> */}
          <AccordionItemButton>
            <h4>{props.listName}</h4>
          </AccordionItemButton>
          
        {/* </AccordionItemHeading> */}
        <AccordionItemPanel>
        {cards.map((card) => {
          return (
              <CardListView
                key={card.id}
                docId={docId}
                id={card.id}
                title={card.title}
                status={card.status}
                shippingDate={card.shippingDate}
                responsibility={card.responsibility}
                description={card.description}
                destination={card.destination}
                quantity={card.quantity}
              />
          );
        }
        )}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}
export default ListView;