import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick = () =>{
        console.log("Upper clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowerClick = () =>{
        console.log("Lower clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleExtraSpace = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
        console.log("Upper clicked")
    }

    const [text, setText] = useState('')
  return (
   <>
    <div className='container' style={ {color: props.mode ==='light'?'#212529':'white'}}>
         <h1>{props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" value={text} style={ {backgroundColor: props.mode ==='dark'?'grey':'white'} } onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2"onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2"onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2"onClick={handleExtraSpace}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3"  style={ {color: props.mode ==='light'?'#212529':'white'}}>
        <h2>Your text summary</h2>
        <p>No.of characters is {text.length} and no.of words is {text.split(" ").length}</p>
        <p>{0.008* text.split(" ").length} minutes read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
   </>
  )
}


// onChange() - this function allows us to change the value in textarea
// Also the new value entered will be set to the text variable