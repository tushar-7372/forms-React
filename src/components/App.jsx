import React, { useState } from "react";

function App() {
  // here we are using separate constants for fName and lName
  // but we can use javascript object for this
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  // function updateFName(event) {
  //   setFName(event.target.value);
  // }

  // function updateLName(event) {
  //   setLName(event.target.value);
  // }

  function handleChange(event) {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const newValue = event.target.value;
    const inputName = event.target.name;

    // now we need to set the values using setFullName
    // but the problem we are getting here is that only fName or lName is displayed at once in h1

    // if (inputName === "fName") {
    //   setFullName({ fName: newValue });
    // } else if (inputName === "lName") {
    //   setFullName({ lName: newValue });
    // }

    // prevValue takes remembers previous javascript object of fullName
    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName} //this is used for controlled component
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName} //this is used for controlled component
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
