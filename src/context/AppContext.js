import { useState } from "react";
import ToDoContext from "./context";


const ToDoState = (props) => {
    const [isName, setName] = useState("");
    const [isList, setList] = useState([]);
    
    function handleSubmit(e) {
        e.preventDefault();
        if(isName !== ""){
          const newItem = { id: Math.floor(Math.random()*9999), name: isName };
          setList((prevList) => [...prevList, newItem]);
          setName("");
        }
      }

      const handleChange = (e) => {
        setName(e.target.value);
      };

      const handleAdd = (id) => {
        setList((prevList) =>
          prevList.map((item) =>
            item.id === id ? { ...item, status: "Completed" } : item
          )
        );
      };

      const handleCancel = (id) => {
        setList((prevList) => 
          prevList.map((item) => 
            item.id === id ? { ...item, status: "Cancelled"} : item
          )
        );
      };
      
      
      const contextValue = {
        isName: isName,
        isList: isList,
        handleSubmit: handleSubmit,
        handleChange: handleChange,
        handleAdd: handleAdd,
        handleCan: handleCancel,
        setName: setName,
        setList: setList,
    };

    return(
        <ToDoContext.Provider value={contextValue}>
            {props.children}
        </ToDoContext.Provider>
    );
}
export { ToDoContext, ToDoState };