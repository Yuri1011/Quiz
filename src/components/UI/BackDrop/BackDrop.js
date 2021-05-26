import React from "react";
import c from "./BackDrop.module.css";

const BackDrop = (props) => {
    return (
        <div className={c.BackDrop} onClick={props.onClick}/>
    )
}
export default BackDrop;