import React, {useState} from 'react'



export default function Form(props) {
   

    const upCase = event =>{

      event.preventDefault()


        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const lowCase = event =>{
      event.preventDefault()

        let newText = text.toLowerCase();
        setText(newText)

    }

    const clearText = event=>{
      event.preventDefault()

      let newText = ("");
      setText(newText)


    }

    const copyText = event=>{
      event.preventDefault()

      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);

      
    }

    const removeSpaces = event=>{
      event.preventDefault()

     let newText= text.split(/[ ]+/) ;
     setText(newText.join(" "))

    }
    const onC = (event) => {
        
        setText(event.target.value)
    }
 
    const[text,setText] = useState('')

  return (
    <div className='container my-3 ' style= {{color: props.mode==='dark'?'white':'black'}} >
        <h1  >{props.heading}</h1>
   <form>

   

        <div className="form-group my-4  " >
    <textarea className=" form-control" id="myBox" style={{backgroundColor: props.mode==='dark' ? 'grey' :'white',color: props.mode==='dark'?'white':'black'}}  value={text} onChange={onC}  rows="8"></textarea>
  </div>
    
    <button className="btn btn-primary mx-1 my-1" onClick={upCase}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={lowCase}>Convert to Lowerercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>

  </form>
  
  <div className="container my-6">

      <p className='my-2'><strong>{text.length>0 ? text.trim().split(" ").length : 0
}</strong> words and <strong>{text.length}</strong> characters </p>

  </div>
  </div>
  )
}
