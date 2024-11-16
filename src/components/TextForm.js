import React from 'react'
import { useState } from 'react'

function TextForm(props) {
    const[text,setText]=useState("type here...")
    

    const handleUpper=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
        

    }
    const handleLower=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClear=()=>{
        let newText=''
        setText(newText)
        props.showAlert("Text Cleared!", "info")
    }

    const handleInverse = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newtext += text[i];
        }
        setText(newtext);
        props.showAlert("Text inversed!", "success")
      }
      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Listen it!", "warning")
      }

    const handleChange=(e)=>{
        setText(e.target.value)
        
    }
    return (
        <>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h3 >{props.heading}</h3>
                <div className="mb-3">

                    <textarea style={{color:props.mode==='dark'?'white':'#042743', backgroundColor:props.mode==='dark'?'grey':'white'}}className="form-control" value={text} onChange={handleChange} id="text" rows="10"></textarea>

                </div>
                <button className="btn btn-primary" onClick={handleUpper}>Convert to UpperCase</button>
                {' '}
                <button className="btn btn-primary" onClick={handleLower}>Convert to LowerCase</button>
                {' '}
                <button className="btn btn-primary" onClick={handleClear}>Clear all Text</button>
                {' '}
                <button className="btn btn-primary" onClick={handleInverse}>inverse</button>
            
                
                {' '}
                <button className="btn btn-primary" onClick={speak}>Speak</button>
            </div>
            <div style={{color:props.mode==='dark'?'white':'#042743'}}className="container my-3">
                <h1>SENTENCE SUMMARY</h1>
                <h4><i>total letters: {text.length}</i></h4>
                <h4><i>total words: {text.split(" ").length}</i></h4>
                <h4><i>time to read: {0.08* text.length} sec</i></h4>
                

            </div>
            <div style={{color:props.mode==='dark'?'white':'#042743'}} className="container my-3">
                <h1>PREVIEW</h1>
                <p>{text.length>0?text:"enter text to preview"}</p>
            </div>

        </>
    )
}

export default TextForm
