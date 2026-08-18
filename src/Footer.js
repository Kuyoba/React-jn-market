import React from 'react'

const Footer = () => {
    const handleDate = ()=>{
        const date = new Date();
        let day = date.getDate()
        let month = date.getMonth()+1
        let year = date.getFullYear()

        return (
            <p>
                <i>copyright at "{day}/{month}/{year}"</i>
            </p>
        )
    }
    const footerStyle={
        color:"#9ea3ad",
        textShadow: "0px 2px 2px rgba(0,0,0,0.4)"
        
    }
    return (
        <footer style={footerStyle}>
            {handleDate()}
        </footer>
    )
}

export default Footer