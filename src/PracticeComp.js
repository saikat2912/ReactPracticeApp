import { useState } from "react";
import { render } from "@testing-library/react";



function practiceComponent1(){

    const [text1,setText1]= useState("");
    const [data,setData] = useState([]);
    const onSubmit=()=>{
        setData()
    }
    const onDelete =(e) =>{
        
    }
    return(
        <div>
        <input type="text" onChange={()=>setText1(e.target.value)} value={text1} />
        <button onClick={onSubmit}>Add Value</button>
        {data.map(ele=>{
            <div>
            <h3>{ele}</h3>
            <button onClick={()=>onDelete}>Delete Value</button>
            </div>
        })

        }
        <button onClick={onDelete}>Delete Value</button>
        </div>
    )

}