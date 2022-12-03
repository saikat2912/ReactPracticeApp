import React ,{useState}from 'react'


function PracticeApp() {
    const [show,setShow] = useState(false);
    const [counter,setCounter] = useState(0);

    const users = [
        {name:"Janny",id:1},
        {name:"Honey",id:2},
        {name:"Suresh",id:3}
    ];
     
    const userList =
        users.map(ele=>{
            return(
            <li key={ele.id}>{ele.name}</li>);
        })
    
return(
    
    <div>
        <button onClick={()=>setShow(!show)}>Toggle</button>
        <h1> The users are</h1>
        {show &&<p><ul>{userList}</ul></p>}
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <button onClick={()=>setCounter(counter-1)}>Decrement</button>
        <h1>{counter>0?counter:0}</h1>
    </div>
)
}

export default PracticeApp