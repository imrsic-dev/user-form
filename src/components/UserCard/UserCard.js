import React from "react";


const userCard = (props) => (
    <div className="UserCard">
        <p>IME: {props.name || " "}</p>
        <p>PREZIME: {props.lastName || " "}</p>
        <p>E-MAIL: {props.email || " "}</p>
        <button
            type="button"
            onClick={props.deleteUser}
            className="btn-delete"
        >x
        </button>

    </div>
);


export default userCard;