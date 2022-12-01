import react, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const consturl = "https://jsonplaceholder.typicode.com/todos/";
  useEffect(() => {
    getData(consturl);
  }, []);

  const getData = (url) => {
    axios.get(consturl).then((res) => {
      setData(res.data);
      console.log("data is ",res)
    });
  };
  return (
    <div className="App">
      <table>
        <div>
        {data.map(ele => {
          return (<tr><div className="row" style={{backgroundColor:"grey",margin:"10%"}}>
           <th> <h1>{ele.title}</h1></th>
          </div></tr>);
        })}
        </div>
      </table>
    </div>
  );
}