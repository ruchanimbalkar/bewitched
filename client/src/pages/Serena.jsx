import { useState } from "react";
export default function Serena() {
  const emptyFormState = { searchTerm: "" };
  const [formData, setFormData] = useState(emptyFormState);
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
      const response = await fetch(
        `https://bewitched.onrender.com/get-one-character/${characterName}`
      );
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      //print data on console
      console.log("data ", data);
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
      <div className="home-div">
        <h2>Serena</h2>
        <p>
          Serena is Samantha's cousin, who looks like Samantha (also played by
          Elizabeth Montgomery). Serena is a care-free, strong, independant
          witch who is notorious and gives Darrin hard time.
        </p>
      </div>
    </main>
  );
}
