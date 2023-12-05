import React, { useContext } from "react";
import ToDoContext from "../context/context";

function Cancel() {
    const { isList } = useContext(ToDoContext);

    return (
        <div>
            <div className="headings">
                <p>Cancelled</p>
            </div>
            <div className="lists">
                <ul style={{position:"absolute", textAlign:"center", left:"51.5%",backgroundColor:"#9AD0C2",borderRadius:"20px",padding: "12px",color: "gray",listStyleType: "none",fontWeight:"bold"}}>
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

export default Cancel;




// function Complete(){
//     const { isAdd } = useContext(ToDoContext);
//     return(
//         <div>
//             <div className="headings">
//                 <p>Completed</p>
//             </div>
//             <div className="lists">
//                 <ul style={{textAlign:"center"}}>{isAdd.map((item, index) => (
//                     <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Complete;