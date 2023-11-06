import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setdata] = useState([]);
  console.log(data);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       setdata(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>TD</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, id) => (
            <tr key={id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
