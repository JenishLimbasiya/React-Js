import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
    isVisible: false,
    mode: "",
    favCar: "",
  });

  // console.log(formData);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    // print
    console.log("Finally printing the entire form ka data ......", formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstname"
          value={formData.firstname}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastname"
          value={formData.lastname}
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <br />

        <textarea
          placeholder="Enter yout comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <br />
        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
          id="isVisible"
        />
        <label htmlFor="isVisible">isVisible ? </label>

        <br />
        <br />

        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Online-Mode"
          id="Online-Mode"
          checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online-Mode</label>

        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Ofline-Mode"
          id="Ofline-Mode"
          checked={formData.mode === "Ofline-Mode"}
        />
        <label htmlFor="Ofline-Mode">Ofline-Mode</label>

        <br />
        <br />

        <label htmlFor="favCar">Tell me your Favorite Car </label>
        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="Scarpio">Scarpio</option>
          <option value="fartuner">fartuner</option>
          <option value="Tharrr">Tharrr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
        </select>

        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
