import React from "react";

const Header = () => {
    const headerStyle={
        color:"#052950",
        textShadow: "0px 1px 3px rgba(255,255,255,0.2)",
        textDecoration: "underline",
        textTransform: "capitalize",
    }
    return (
        <header style={headerStyle}>
            <h1>
                Things that i love!
            </h1>
        </header>
    );
};

export default Header;
