import React,{useState} from 'react';
export const Timer = (props) => {

    const[minutes,setMinutes]=useState(0)
    console.log(minutes)
    const[seconds,setSeconds]=useState(0)
    console.log(seconds)
    const[mseconds,setMseconds]=useState(0)
    console.log(mseconds)

    setTimeout(()=> {

        if (mseconds==59){
            setMseconds(0)
            setSeconds(seconds+1)
            
            if (seconds==59){
                setSeconds(0)
                setMinutes(minutes+1)
            }    
    }
    else setMseconds(mseconds+1)         
  

},1000/60)
return (
    <div style = {{margin:'20%'}}>
    <h1> tova sima's timer!!!</h1>
    <h2> {minutes}: {seconds}: {mseconds}</h2>
    </div>
)
}
