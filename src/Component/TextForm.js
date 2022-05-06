import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
         // console.log("upper case"+text);
          let newText=text.toUpperCase();
          setText(newText);
    }
    const handleLoClick=()=>{
        // console.log("upper case"+text);
         let newText=text.toLowerCase();
         setText(newText);
   }
   const handleCopy=()=>{
    var text=document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
}
   const clearAll=()=>{
    // console.log("upper case"+text);
     let newText=" ";
     setText(newText);
}
    const handleOnChange =(event)=>{
      //  console.log("on change");
        setText(event.target.value);
  }
    const[text,setText]=useState("");
    
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn.btn.primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn.btn.primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
            <button className="btn.btn.primary mx-2" onClick={clearAll}>Clear Text</button>
            <button className="btn.btn.primary mx-2" onClick={handleCopy}>Copy Text</button>



        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length}  words and {text.length} charcter</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    

    )
}
//<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
