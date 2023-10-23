import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("formdata : ", formData);
  }
  return (
    <div className="w-[50%] mx-auto">
      <h1 className=" font-bold text-4xl text-center mb-4">
        Registration Form
      </h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="FirstName"
          value={formData.firstName}
          onChange={changeHandler}
          className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
        />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="LastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
        />
        <br />

        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={changeHandler}
          className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
        />

        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
        >
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />

        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Address"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
        />

        <br />

        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={formData.city}
          onChange={changeHandler}
          className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
        />

        <br />

        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="State"
          value={formData.state}
          onChange={changeHandler}
          className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
        />

        <br />

        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="PostalCode"
          value={formData.postalCode}
          onChange={changeHandler}
          className="h-10 border border-black mt-1 rounded px-4 w-full bg-gray-50 mb-3"
        />
        <br />
        <br />

        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="h-4 w-4 mt-2"
            />
            <div>
              <label htmlFor="comments" className="ms-2">
                Comments
              </label>
              <p className="text-xs ms-6 text-gray-500">
                Get notified When someonce posts a comment on a posting.
              </p>
            </div>
          </div>

          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
              className="h-4 w-4 mt-2"
            />
            <div>
              <label htmlFor="candidates" className="ms-2">
                Candidates
              </label>
              <p className="text-xs ms-6 text-gray-500">
                Get notified When a candidate applies for a job.
              </p>
            </div>
          </div>

          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="h-4 w-4 mt-2"
            />
            <div>
              <label htmlFor="offers" className="ms-2">
                Offers
              </label>
              <p className="text-xs text-gray-500">
                Get notified When a candidaate accepts or rejects an offer
              </p>
            </div>
          </div>
        </fieldset>

        <br />

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are deliverd via SMS to your mobile phone.</p>
          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
            className="h-4 w-4 mt-2"
          />
          <label htmlFor="pushEverything" className="ms-2">
            Everything
          </label>

          <br />
          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}
            className="h-4 w-4 mt-2"
          />
          <label htmlFor="pushEmail" className="ms-2">
            Same as email
          </label>
          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
            className="h-4 w-4 mt-2"
          />
          <label htmlFor="pushNothing" className="ms-2">
            No Push Notifications
          </label>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-5 my-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
