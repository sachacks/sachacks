/**
 * This is a component for the resources page
 * The format is simply
 * - Header
 * - Dropdown list
 */

import React, { useState } from "react";
import "./ResourcesCard.css";

// add more icons here
import { GoTriangleDown } from "react-icons/go";

const ResourcesCard = ( props ) => {
  const { topic, list } = props.content;

  const listContent = list.map( ( item, index ) => <li key={ index }>{ item }</li> );

  const [ open, setOpen ] = useState( true );
  return (
    <div className="vert-content">
      <div className="topic" onClick={ () => setOpen( !open ) }>
        <h4 style={ !open ? { color: '#7BDDDE' } : { color: 'white' } }>{ topic }</h4>
        <GoTriangleDown
          fill={ !open ? '#7BDDDE' : 'white' }
          size="20px"
          style={
            !open
              ? {
                marginLeft: "10px",
                transform: "rotate(180deg)",
                transition: "0.5s",
              }
              : { marginLeft: "10px", transition: "0.5s" }
          }
        />
      </div>
      <ul className={ !open ? "open-ul" : "close-ul" }>{ listContent }</ul>
    </div>
  );
};

export default ResourcesCard;
