import React from 'react'

export default function RecipeDashBoard({info}) {
    return (
        <article className="Board" >
            {
                info.map((data)=>{
                    console.log(data);
                    return (
                        <>
                        <div className="RecipeName">
                            <div>{data.Recipe}</div>
                        </div>
                        
                        <div className="Ingredients">
                            
                            <div className="Required" >Ingredients:</div>
                            <div className="Holder" >
                        {data.Ingredients.map((info)=>{
                            return(
                            <div className="Ingredient" >
                                {info}
                            </div> ) 
                        })}
                        </div>
                        </div>
                        <div className="Description" >
                            <h3 className="Title" >Description</h3>
                            <hr></hr>
                            <div className="Info" >{data.Description}</div></div>
                        <div className="Instruction" >
                            <div className="Ing_Holder" >
                            <h1>Instructions</h1>
                        {
                            data.Instructions.map((info,index,array)=>{
                                return (
                                    <div >Step {index + 1 } : {info}</div>
                                )
                            })
                        }
                        </div>
                        </div>
                        </>
                        
                    )
                })
            }
        </article>
    )
}
