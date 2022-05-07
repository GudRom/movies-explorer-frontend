import React from "react";

function UniversalHeader(props) {
    return (
    <div className="universal-block">
        <h2 className="universal-block__header">{props.header}</h2>
        <div className="universal-block__line"></div>
    </div>
    )
}

export default UniversalHeader;