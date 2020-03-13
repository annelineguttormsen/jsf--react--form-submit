import React from "react";

export default function ErrorMessage(props) {
    return (
        <p className="error__message">{props.message}</p>
    );
}