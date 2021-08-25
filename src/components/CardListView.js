import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import { AccordionWrapper, AccordionItem } from "custom-react-accordion";
// import 'custom-react-accordion/dist/Accordion.css'

const CardListView = (props) => {
  return (
    <Accordion>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <h4>Title: {props.title}</h4>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <ul>
          <li>Shipping Date: {props.shippingDate}</li>
          <li>Responsibility: {props.responsibility}</li>
        </ul>
      </AccordionItemPanel>
    </AccordionItem>
    </Accordion>

  );
};

export default CardListView;
