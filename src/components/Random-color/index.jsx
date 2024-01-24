
import React, { useEffect, useState } from 'react'

function RandomColor() {
    const[typecolor, setTypeColor]= useState('hex');
    const[color, setColor]=useState('olive');
    function RandomColorUtility(length){
// generate Random Color
        return Math.floor(Math.random()*length);
    }
function handleHexColor(){
const hex =[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexcolor ='#';

for(let i=0; i<6; i++){
    hexcolor+= hex[RandomColorUtility(hex.length)];
}
setColor(hexcolor);
}

function handleRgbColor(){
const r = RandomColorUtility(256);
const g = RandomColorUtility(256)
const b = RandomColorUtility(256)

setColor(`rgb(${r},${g},${b})`);
}

useEffect(()=>{
    if(typecolor==='rgb') handleRgbColor();
    else handleHexColor();
},[typecolor])
  return (
    <div style={{
        width:'100vh',
        height:'100vh',
        background:color
    }} >
        <button onClick={()=>setTypeColor('rgb')}>Rgb Color</button>
        <button onClick={()=>setTypeColor('hex')}>Hex Color</button>
<button onClick={typecolor==='hex'? handleHexColor:handleRgbColor}>Generate Random Color</button>
<div style={{display:'flex',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
color:'#fff',
fontSize:'60px',
marginTop:'50px',
gap:'20px'
}}>
<h3>{typecolor==='rgb'?"RGB color":"Hex Color"}</h3>
<h3>{color}</h3>
</div>
    </div>
  )
}

export default RandomColor;