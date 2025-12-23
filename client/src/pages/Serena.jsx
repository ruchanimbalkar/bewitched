import { useState } from "react";
export default function Serena() {
  const emptyFormState = { searchTerm: "" };
  const [formData, setFormData] = useState(emptyFormState);
  const defaultCharacter = {
    name: "Serena",
    description:
      "Serena is Samantha's cousin, who looks like Samantha (also played by Elizabeth Montgomery). Serena is a care-free, strong, independant witch who  loves Samantha but is notorious and gives Darrin hard time",
  };
  const [message, setMessage] = useState("");
  const [character, setCharacter] = useState(defaultCharacter);
  const handleChange = (e) => {
    const { name, value } = e.target;
    //set form data using the setter function setFormData
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("searchTerm", formData.searchTerm);
    let searchWord = formData.searchTerm;
    getCharacter(searchWord);
    console.log(searchWord);
  };

  const getCharacter = async (characterName) => {
    console.log("getCharacter");
    try {
      const response = await fetch(`api/get-one-character/${characterName}`);
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      //print data on console
      console.log("data ", data);
      if (data.length != 0) {
        setCharacter({ name: data[0].name, description: data[0].description });
        setMessage("");
      } else {
        setCharacter(defaultCharacter);
        setMessage("Sorry Character not found!!!");
      }
    } catch (error) {
      console.log("Error Fetching API: " + error);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="search-form">
        <label htmlFor="search-input">Search Other characters</label>
        <search>
          <input
            type="text"
            id="search-input"
            name="searchTerm"
            onChange={handleChange}
          />
        </search>
      </form>
      <p>{message}</p>
      <div className="home-div">
        <h2>{character.name}</h2>
        <p>{character.description}</p>
      </div>
    </main>
  );
}
