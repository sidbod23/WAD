import { useState } from "react";

function FindUser() {
  const [searchName, setSearchName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/findUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: searchName }),  // Send search name
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          setError("User not found");
          setUser(null);
        } else {
          setUser(data);
          setError("");
        }
      })
      .catch(() => {
        setUser(null);
        setError("Error finding user");
      });

    setSearchName("");
  };

  return (
    <div>
      <h2>Find User</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="searchName">Enter Name:</label>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {user && (
        <div>
          <h3>User Details</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default FindUser;
