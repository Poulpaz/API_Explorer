//import React, { Component } from 'react';
//import './Item.css';

function Item(props) {
    return (
        <button className="itemContent" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export { Item }