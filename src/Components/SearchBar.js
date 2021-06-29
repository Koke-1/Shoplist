import React,{useState,useEffect} from 'react'
import Recipes from '../Local API/Recipes'
import RecipeDashBoard from './RecipeDashBoard'
import HomePage from './HomePage'
export default function SearchBar() {

    const [Bar, setBar] = useState([])
    const [Info, setInfo] = useState([])
    const [DropMenu, setDropMenu] = useState(false)

    useEffect(() => {
      const input = document.querySelector("input")
       if (Bar[0] !== undefined) {
           setDropMenu(true)
       } else {
           setDropMenu(false)
       }
    }, [Bar])

    const test = e => {
    const ingredient = e.target.value
    const foundRecipes = Recipes.filter((info) => info.Ingredients.includes(ingredient) || info.Ingredients.toString().toLowerCase().includes(ingredient))
    setBar(foundRecipes)
    if (ingredient === "") {
         setBar([])
       }
  };
  const information = (arr) =>{
    const input = document.querySelector("input")
    setInfo([arr])
    setBar([])
    input.value = ""
  }
    return (
        <section className="SearchBar" >
          <div className="Bar" >
            <svg onClick={()=> console.log("Test")} className="Art" stroke="red" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1500 900" preserveAspectRatio="xMidYMid slice" >
          <path id="Pan"
            fill="none" strokeWidth="20" stroke="red"
        d="M 966.08,473.84
           C 927.54,473.49 832.54,472.64 737.00,471.77
             611.22,470.64 484.50,469.50 484.50,469.50
             484.50,469.50 491.00,698.00 504.00,697.00
             504.00,697.00 553.07,721.78 621.00,724.00
             698.23,726.53 799.43,724.55 871.00,724.00
             931.43,723.54 971.99,702.82 963.00,696.00
             963.00,696.00 985.25,576.88 984.42,508.74
             984.30,499.06 1162.48,503.82 1177.18,498.55
             1194.38,492.38 1179.00,475.50 1179.00,475.50
             1179.00,475.50 977.54,473.94 966.08,473.84 Z" />
            <path id="Chicken"
              fill="none" stroke="red" strokeWidth="20"
        d="M 537.82,270.73
           C 537.82,270.73 519.15,276.73 519.15,276.73
             519.15,276.73 528.48,291.73 528.48,291.73
             528.48,291.73 508.82,295.73 508.82,295.73
             508.82,295.73 516.07,308.98 516.07,308.98
             516.07,308.98 536.57,309.73 536.57,309.73
             536.57,309.73 551.32,319.73 551.32,319.73
             551.32,319.73 554.82,352.73 554.82,352.73
             554.82,352.73 555.15,381.73 555.15,381.73
             555.15,381.73 578.82,399.06 578.82,399.06
             578.82,399.06 614.48,413.73 614.82,414.06
             615.15,414.39 656.82,407.39 656.82,407.39
             656.82,407.39 685.15,393.73 685.15,393.73
             685.15,393.73 696.48,371.73 696.48,371.73
             696.48,371.73 680.48,338.73 680.15,338.73
             679.82,338.73 660.48,314.39 660.48,314.39
             660.48,314.39 630.67,300.67 629.67,300.33
             628.67,300.00 602.00,296.00 602.00,296.00
             602.00,296.00 580.48,297.39 580.48,297.39
             580.48,297.39 565.45,301.64 565.45,301.64
             565.45,301.64 548.69,287.48 548.69,287.35
             548.69,287.23 537.82,270.73 537.82,270.73 Z" />
             <path id="Bean"
        fill="none" stroke="red" strokeWidth="20"
        d="M 924.00,278.00
           C 916.15,269.89 901.00,269.00 901.00,269.00
             901.00,269.00 882.32,271.03 874.67,279.67
             866.82,288.53 870.00,304.00 870.00,304.00
             870.00,304.00 873.00,318.55 881.67,324.67
             889.99,330.55 904.00,328.00 904.00,328.00
             904.00,328.00 917.66,326.60 924.67,319.33
             931.14,312.63 931.00,300.00 931.00,300.00
             931.00,300.00 931.12,285.36 924.00,278.00 Z" />
             <path id="Potato"
        fill="none" stroke="red" strokeWidth="20"
        d="M 654.00,115.50
           C 654.00,115.50 618.00,160.50 618.00,160.50
             618.00,160.50 658.50,189.00 658.50,189.00
             658.50,189.00 714.00,160.50 714.00,160.50
             714.00,160.50 654.00,115.50 654.00,115.50 Z
           M 837.00,265.50" />
        </svg>
            <form onSubmit={(e)=>e.preventDefault() } >
              
             <input placeholder="Enter Ingredient"  onInput={test}></input>
             <div className="OptionsHolder" >
             {Bar.map((info,index,array)=>{
                    const {Recipe} = info
                    return (
                       <option key={index} onClick={()=>information(array[index])} className="RecipeTab" >{Recipe}</option> 
                    )
                })
                   
                } 
                </div>
            </form>
          </div>
            
            {/* <article className={DropMenu ? "DropDownMenuOn":"DropDownMenuOff" } >
                {Bar.map((info,index,array)=>{
                    const {Recipe} = info
                    return (
                       <div key={index} onClick={()=>information(array[index])} className="RecipeTab" >{Recipe}</div> 
                    )
                })
                    
                }
            </article> */}
            {Info[0] !== undefined ? <RecipeDashBoard info={Info}/> : <HomePage/>}
            
            
        </section>
    )
}
