import React ,{useState}from 'react'


function PracticeApp() {
   const [data,setData]= useState([]);
   const [text1,setText1]= useState("");

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

export default PracticeApp