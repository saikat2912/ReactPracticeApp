import react, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const consturl = "https://jsonplaceholder.typicode.com/todos/";
  useEffect(() => {
    getData(consturl);
  }, []);

  const getData = (url) => {
    axios.get(consturl).then((res) => {
      setData(res);
    });
  };
  return (
    <div className="App">
      <table>
        {data.map((ele) => {
          <div className="row" style>
            <h1>{ele.title}</h1>
          </div>;
        })}
      </table>
    </div>
  );
}