import React from "react";


const userList = (props) => (
    <div className="UserList">
       <ul>
           {props.children}
       </ul>

    </div>
);


export default userList;