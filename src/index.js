import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import "./CSS stuff/CSS.css"
import RandomSVG from './Components/RandomSVG'
import SearchBar from './Components/SearchBar'
export default function Main() {
    const [Loading, setLoading] = useState(false)
    return (
        <main>
            { Loading ? 
            <SearchBar/> 
            : 
            <RandomSVG Loading={Loading} setLoading={setLoading} />
            }
               
        </main>
    )
}



ReactDOM.render(<Main/>,document.querySelector("#root"))