import React, { useContext } from "react";
import ToDoContext from "./context/context";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


function Side() {
    const {isList, handleAdd, handleCan } = useContext(ToDoContext);

    
    return(
        <div>
            <div className="headings container">
                <p>All</p>
                <p>Completed</p>
                <p>Cancelled</p>
            </div>
            <div className="lists">
                <ul style={{position: "absolute", left:"19%",backgroundColor:"#9AD0C2",borderRadius:"20px",padding: "12px",color: "gray",listStyleType: "none",fontWeight:"bold"}}>
                    {isList.filter(item => !item.status).map((item) => (
                    <li key={item.id}>{item.name}
                        <button onClick={() => handleAdd(item.id)}><CheckIcon /></button>
                        <button onClick={() => handleCan(item.id)}><CloseIcon /></button>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="lists">
                <ul style={{position:"absolute", left:"50%",backgroundColor:"#9AD0C2",borderRadius:"20px",padding: "12px",color: "gray",listStyleType: "none",fontWeight:"bold"}}>
                    {isList.filter(item => item.status === 'Completed').map((item) => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lists">
                <ul style={{position: "absolute",left: "81%",backgroundColor:"#9AD0C2",borderRadius:"20px",padding: "12px",color: "gray",listStyleType: "none",fontWeight:"bold"}}>
                    {isList.filter(item => item.status === 'Cancelled').map((item) => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

export default Side;
















// <div>
        //     <div className="headings">
        //         <p>All</p>
        //         <p>Completed</p>
        //         <p>Cancelled</p>
        //     </div>
        //     <div className="lists">
        //         <ul style={{marginLeft:"180px"}}>{isList.map((item, index) => (
        //             <li key={index}>{item}
        //                 <button onClick={() => handleAdd(item.id)}>
        //                     <CheckIcon />
        //                 </button>
        //                 {/* <button onClick={() => handleAdd(index)}><CheckIcon/></button> */}
        //                 <button><CloseIcon/></button>
        //             </li>
        //             ))}
        //         </ul>
        //     </div>
        // </div>