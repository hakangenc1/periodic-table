import React, { useState } from "react";
import Element from "../Element/Element";
import { IoMdClose } from "react-icons/io";

import data from "../../data/elements";

import "./PeriodicTable.css";

export default function PeriodicTable() {
  const [isShown, setIsShown] = useState(false);
  const [elementDetails, setElementDetails] = useState({});

  const handleSelectelement = (elementNumber) => {
    setIsShown(true);

    const selectedElement = data.elements.find(
      (element) => element.number === elementNumber
    );
    setElementDetails(selectedElement);
  };

  return (
    <div className="periodic-table">
      {isShown && (
        <div className="selected-element">
          <div className="selected-element__name">{elementDetails.name}</div>
          <div className="selected-element__summary">
            {elementDetails.summary}
          </div>
          <button className="close" onClick={() => setIsShown(false)}>
            <IoMdClose color="white" size="16" />
          </button>
        </div>
      )}
      {data.elements.map((element, i) => (
        <Element key={i} {...element} onSelected={handleSelectelement} />
      ))}
    </div>
  );
}
