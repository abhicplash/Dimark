import React from "react";
import Accordion from "./Accordion ";

const HomeAccordion = () => {
  const accordionItems = [
    { title: "Item 1", content: "Content for item 1" },
    { title: "Item 2", content: "Content for item 2" },
    { title: "Item 3", content: "Content for item 3" }
  ];
  return (
    <div>
      <h1>Responsive Accordion</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default HomeAccordion;
