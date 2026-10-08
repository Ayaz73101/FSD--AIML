import React, { useState } from "react";
import AyazImage from "./image/ayaz.png";
function ImageManipulation() {
    const [ayazHeight,setAyazHeight]=useState(300);
    function setHeight(){
        setAyazHeight(ayazHeight+10);
    }
    function decreaseHeight(){
        setAyazHeight(ayazHeight-10);
    }
    return (
        <div>
            <h1 style={{color:'blue',backgroundColor:'lightgray'}}>Image Manipulation Component</h1>
            <div style={{border:'2px solid red',height:'300px',width:'300px',leftmargin:'100px'}}>
                 <img src={AyazImage} alt="ayaz" style={{height:ayazHeight,width:'300px'}}/>
            </div>
            <div>
                <button onClick={setHeight}>Increase Height</button>
            </div>
            <div>
                <button onClick={decreaseHeight}>Decrease Height</button>
            </div>
            </div>
            )
        }
        export default ImageManipulation