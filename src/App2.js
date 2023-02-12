import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function App2() {
  const [count, setCount] = useState([]);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [ind, setId] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setCount(data));
  }, []);
  function handleId(e) {
    setId(e.target.value);
  }
  return (
    <div className="App">
      <select style={{ width: "100%", height: "2.5rem" }} onChange={handleId}>
        <option selected value="1">
          Select from UserId
        </option>
        {arr.map((x) => {
          return <option value={x}>{x}</option>;
        })}
      </select>
      {/* <input type="select"  onChange={handleId}><option>1</option></input> */}
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>UserId</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        {count
          ?.filter((x) => x.userId == ind)
          .map((x, id) => {
            return (
              <tbody key={id}>
                <tr>
                  <td>{x.userId}</td>
                  <td>{x.id}</td>
                  <td>{x.title}</td>
                  <td>{x.body}</td>
                </tr>
              </tbody>
            );
          })}
      </Table>
    </div>
  );
}

export default App2;
