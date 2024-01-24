import { useState } from "react";
import data from "./data";
import './style.css';
function Accordian (){
    const[selected, setSelected] = useState()
function handleSingleSelection(getId){
console.log(getId)
setSelected( getId === selected? null:getId)
}
const[enableMultiSelection , setEnableMultiSelection]=useState(false);
const [multiple, setMultiple]=useState([]);

function handleMultiSelection (getId){
let cpyMultiple = [...multiple];
const findIndexofCurrentId = cpyMultiple.indexOf(getId)
console.log(findIndexofCurrentId);
if(findIndexofCurrentId==-1) cpyMultiple.push(getId)
else cpyMultiple.splice(findIndexofCurrentId,1);
setMultiple(cpyMultiple)
}


    return (
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
       <div className="accordian">
{
  data && data.length>0 ?
  data.map(dataItem=><div className="item">
<div className="title" onClick={enableMultiSelection ? ()=>handleMultiSelection(dataItem.id) :()=>handleSingleSelection(dataItem.id)}>
<h2>{dataItem.question}</h2>
<span>+</span>
</div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
             
            </div>
          )
         : 
          <div>No data found !</div>
        }
      </div>
    </div>
    )
}
export default Accordian;