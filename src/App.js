import './App.css';
import axios from 'axios'
import { useState, useEffect } from "react"
const App = () => {
  const [list, setList] = useState([])
  const fetchData = async () => {
    const response = await axios.get("https://checklist-deployed-backed-1.onrender.com/")
    setList(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <div>
        <table>
          <thead>
            <tr>
              <th>checkList</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {list && list.map((each) =>
              <tr key={each.name}>
                <td >{each.name}</td>
                <td >{each.status}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
