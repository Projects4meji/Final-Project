import React, { useContext } from "react";
import ToDoContext from "../context/context";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function Add() {
  const { isList, handleAdd, handleCan } = useContext(ToDoContext);

  return (
    <div>
      <div className="headings">
        <p>All</p>
      </div>
      <div className="lists">
        <ul style={{position:"absolute", left:"49%",backgroundColor:"#9AD0C2",borderRadius:"20px",padding: "12px",color: "gray",listStyleType: "none",fontWeight:"bold"}}>
        {isList.filter(item => !item.status).map((item) => (
            <li key={item.id}>{item.name}
              <button onClick={() => handleAdd(item.id)}><CheckIcon /></button>
              <button onClick={() => handleCan(item.id)}><CloseIcon /></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Add;
