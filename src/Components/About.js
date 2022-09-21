import React/*,{useState}*/ from "react";

export default function About(props) {
    // const [mystyle,setMyStyle] = useState( {
    //     color:'black',
    //     backgroundColor:'white'});

    let mystyle=props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'#2D2D2D',color:'white'};
    let myStyle=props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'#333333',color:'white'};
    // const [btnText , setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () =>{
    //     if(mystyle.color === 'white'){
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             borderRadius:"10px"
    //         })
    //         setBtnText("Enable Light Mode");        }
    // }
    
  return (
    <div className="container my-2 py-1" style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
             <strong> Analyse your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body " style={mystyle}>
              TextUtils gives you a way to analyse your text quickly an efficiently. Be it word count, character count 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
             <strong> Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle} >
              TextUtils is a free character tool that provides instant character count and word count statistics for a given
              text. Textutils reports the number of words and characters. thus it is suitable for writing text with word/ character
              limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
             <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This word counter software worls in any web browsers such as chrome, firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document,pdf document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-4" >
      <button type="button" onClick={toggleStyle} className="btn btn-outline-secondary">{btnText}</button>
    </div> */}
      </div>
  );
}

