import React, {useRef,useState} from "react";
import './Stopwatch.css'

const Stopwatch = ()=> {
    const [time,setTime]=useState(0)
    const intervalRef=useRef(null)
    const [isRunning,setIsRunning]=useState(null)

    const startTimer = ()=>{
        if (isRunning) return(console.log("already running"))

        console.log("started timer.")

        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime+1);
        }, 10);

        setIsRunning(true)
    };

    const stopTimer = ()=>{
        console.log("paused timer.")

        clearInterval(intervalRef.current); 
        setIsRunning(false)
        
    };
    
    const resetTimer = ()=>{
        console.log("reseted timer.")
        
        clearInterval(intervalRef.current); 
        setIsRunning(false)
        setTime(0)
        
    }

    const formatTime = (ms) => {
        const hours = Math.floor(ms / 3600000)
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 100);
        const milliseconds = Math.floor(ms % 100)
        
        return (
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`
        );
    };


    return(
        <div className="stopwatch">
            <h1>Stopwatch</h1>
            <p>{formatTime(time)}</p>
            <div className="container">
                <button 
                onClick={isRunning ? stopTimer : startTimer}
                className={`btn ${isRunning ? "running" : "paused"}`}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button className="btn" onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}
export default Stopwatch;