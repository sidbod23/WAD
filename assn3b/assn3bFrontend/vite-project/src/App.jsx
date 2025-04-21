import { useState } from "react";
import FindUser from "./components/FindUser";  // Import FindUser component

function App() {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName, age }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    setUserName("");
    setAge("");
  };

  return (
    <div>
      <h1>CRUD</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>

      <hr />

      <FindUser />  {/* Render the FindUser component */}
    </div>
  );
}

export default App;
