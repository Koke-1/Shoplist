import React,{useState,useEffect} from 'react'
import Recipes from '../Local API/Recipes'

export default function HomePage() {
    const recentRecipes = [...Recipes].splice(Recipes.length - 3,Recipes.length)
    const [number, setNumber] = useState([])
    useEffect(() => {
        
        const test = setInterval(() => {
         let randoms = Math.floor(Math.random() * (99 - 10 + 1 ) + 10 )
          const string = randoms.toString()
          const array = string.split("")
            setNumber(array)  
        }, 1);
        setTimeout(() => {
            const recipe = Recipes.length + 1
            const string = recipe.toString()
            const array = string.split("")
           clearInterval(test)
           setNumber(array)
           
        }, 3000);
        
        
    }, [])
    return (
        <article className="Home" >
             <div className="number" >
                <h3>Number of Recipes</h3>
                <div className="NumHolder" >
                {
                    number.map((info,index,array)=>{
                        return(
                            <div>
                                <div>{info}</div>
                            </div>
                        )
                         
                    })
                }
                </div>
            </div>
            <div className="Recent" >
                <h3>Recently published recipes</h3>
                <div className="New" >
                    {recentRecipes.map((info,index,array)=>{
                        return (
                            <div>
                                <h2>{info.Recipe}</h2>
                            </div>
                        )
                    })

                    }
                   
                </div>

            </div>
            <div className="InfoBoard" >
                <p>This is a website I developed on my own, 
               its goal is to primarily store recipes.
               It comprises of foods and dishes my mother has inherited to me.
               The foods are mostly derive from Mexican heritage with small American touches.  </p>
            </div>
            
        </article>
    )
}
