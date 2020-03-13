import React from "react";

export default function ErrorMessage(props) {
    return (
        <p class="error__message">{props.message}</p>
    );
}