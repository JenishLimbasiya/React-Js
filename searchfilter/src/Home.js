import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  console.log(records);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function filterHandler(event) {
    setRecords(data.filter((data) => data.name.includes(event.target.value)));
  }
  return (
    <div className="p-5 bg-light">
      <div className="bg-white shadow border">
        <input
          type="text"
          className="form-control"
          onChange={filterHandler}
          placeholder="Search"
        />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {records.map((data, id) => (
              <tr key={id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
