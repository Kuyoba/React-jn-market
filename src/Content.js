import React, { useRef,useState } from 'react'
import styled from 'styled-components'
const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button{
        padding: 4px 8px;
        background-color:rgba(249, 128, 20, 0);
        border: 2px dashed rgb(202, 94, 0);
        border-radius: 8px;
        color: rgb(202, 94, 0);
        transition: 0.25s ease;

        &:hover{
            scale:1.1;
            transform: translateY(-4px);
            background-color:rgba(249, 128, 20, 1);
            border-style:solid;
            color: #052950;

        }
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 100px;

        p {
            color: #f98014;
            text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
            transition: 0.25s ease;

            &:hover {
                scale:1.1;
                transform: translateY(-4px);
                text-shadow: 0px 1px 2px rgba(167, 78, 1, 0.725);
            }
        }
    }
    
`

const Content = () => {
    const lovedThings = ["coding", "gaming", "music", "food", "sleeping"]

    const hideRef = useRef(null)
    const showRef = useRef(null)

    var isHidden=false;
    const handleVisibility = () => {

        const items = document.getElementById("list").querySelectorAll('p');

        const hideSpan = hideRef.current
        const showSpan = showRef.current

        if (isHidden === true) {
            //shows the list
            for(let i=0;i<items.length;i++){
                items[i].classList.remove('hidden')
            }
            hideSpan.classList.remove('hidden')
            showSpan.classList.add('hidden')
            console.log("list shown")
            isHidden=false
        } else if(isHidden===false){
            //hides the list
            for(let i=0;i<items.length;i++){
                items[i].classList.add('hidden')
            }
            hideSpan.classList.add('hidden')
            showSpan.classList.remove('hidden')
            console.log("list hidden")
            isHidden=true;
        }
    }

    return (
        <Main>
            <button onClick={handleVisibility}>
                <span ref={hideRef} className='hide'>hide list</span>
                <span ref={showRef} className='show hidden'>show list</span>
            </button>
            <div id="list" className='list'>
                {lovedThings.map((el) => (
                    <p key={el}>{el}</p>
                ))}
            </div>
        </Main>
    )
}


export default Content;