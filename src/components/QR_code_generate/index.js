 import QRCode from 'react-qr-code'
 import { useState } from 'react';
function QrCodeGenerator(){
 const[qrCode, setQrCode]=useState('');
 const[input, setInput]=useState('');

 function handleGenerateQrCode(){
    setQrCode(input)
    setInput('')
 }
    return (
        <div>
        <h1>Qr Code Generator</h1>
        <div>
            <input onChange={(e)=>setInput(e.target.value)} 
            type='text'name='qr-code' placeholder="enter your value" value={input} />

            <button disabled={input && input.trim()!==''?false:true}
            onClick={handleGenerateQrCode}>Generate</button>
        </div>
      
       
        <div>

        <QRCode id='qr-code-value' value={qrCode}size={400} bgColor='#fff' />
        </div>

        </div>
        
    )
}

export default QrCodeGenerator;