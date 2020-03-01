import React from 'react'


function Menu(props) {
    return (
        <div>
           {
               props.menu.Options.map((Option,i)=>{
                   return(
                       <div key={i}>
                            <li>{Option.mainDish}
                                <ul>
                                    {Option.curries.map((curry,i) => <li key={i}>{curry}</li>)}
                                </ul>
                            </li>
                            
                       </div>
                   )
               })
           }
        </div>
    )
}

export default Menu
