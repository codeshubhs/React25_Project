import useLocalStorage from "./useLocalStorage"
import './theme.css'

export default function LightDarkMode(){

    const[theme, setTheme]= useLocalStorage('theme',"dark")
 function handleTheme(){

    setTheme(theme==='light'? 'dark':'light')

 }
 console.log(theme)

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
<p>Hello Shubham !</p>
<button onClick={handleTheme}>Change Theme</button>
            </div>
        </div>
    )
}