import  { useState } from "react";

const Misalmeba = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
        <p>write your name for hello</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <button type="submit">submit</button>
      </form>
      <p>{greeting}</p>
    </div>
  );
};

export default Misalmeba;