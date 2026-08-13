import React from 'react'

const Footer = () => {
    const handleDate = ()=>{
        const date = new Date();
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()

        return (
            <p>
                <i>copyright at "{day}/{month}/{year}"</i>
            </p>
        )
    }
    return (
        <footer>
            {handleDate()}
        </footer>
    )
}

export default Footer