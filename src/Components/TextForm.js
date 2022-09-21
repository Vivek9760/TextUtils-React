import React, {useState} from 'react'


function TextForm(props){
     
    const [text, setText] = useState("");

    const handleUpClick = () => {
        // console.log('click' + text)
        // console.log(text[0])
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success");
    }  
    const handleLowClick = () => {
        // console.log('click' + text)
        // console.log(text[0])
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase","success");
    } 
    
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Clear","success");
    }
    
    const copyOnClick = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard","success");
    }

    const handleOnChange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ").trim());
        props.showAlert("Extra space removed","success");
    }

    function countWords(str) {
        const arr = str.split(' ');
        return arr.filter((word) => word !== '').length;
      }

    // function styleChange(){
    //     if(props.mode ==='dark'){
    //     return {"backgroundColor":"#4F4F4F", "color":"whitesmoke" }
    // }
    //     else if(props.mode === 'light'){
    //     return ({backgroundColor:"white", color:"black"})
    // }
    //     else if(props.mode === 'primary'){
    //     return ({backgroundColor:"skyblue", color:"blue"})
    // }
    // }

     return(
        <>
        <div className="mb-3 my-2">
  <h2 style={{color:props.mode==="light"?"black":"whitesmoke"}} className="mb-3" >{props.heading}</h2>
  <textarea className="form-control" id="myBox" rows="5"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?"white":"#4F4F4F",color:props.mode ==='light'?"black":"whitesmoke"}}  placeholder="Enter your text here..."></textarea>
  <button className="btn btn-outline-secondary my-2 mx-2"  onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-danger my-2 mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-success my-2 mx-2"  onClick={copyOnClick}>Copy Text</button>
  <button className="btn btn-primary my-2 mx-2"  onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-warning my-2 mx-2"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
 
</div>
<div className='container' style={{color:props.mode==="light"?"black":"whitesmoke"}}>
<h3>Your text summary</h3>
<p>Words = {countWords(text)}</p>
<p>Characters = {text.length} </p>
<p>You read this para in approx {0.008 * text.split(" ").filter((text)=>{return text.length!==0}).length} Minutes</p>
<h2>Preview</h2>
<p /*style={{border:text.length>0?"none":`2px solid ${props.mode==="light"?"black":"white"}`,borderRadius:text.length>0?"none":"8px",display:"inline",padding:"0px 3px"}}*/>{text.length>0?text:"Nothing to preview..."}</p>

</div>
</>
);
 }

 export default TextForm;