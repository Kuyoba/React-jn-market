import React from 'react'

const Content = () => {
    const lovedThings = ["coding","gaming","music","food","sleeping"]
    return (
        <main>
            {lovedThings.map((el)=>(
                <p key={el}>{el}</p>
            ))}
        </main>
    )
}


export default Content;