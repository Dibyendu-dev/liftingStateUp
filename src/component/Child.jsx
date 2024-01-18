import React, { useState } from "react";

const Child = ({onChildData}) => {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendDataToParent = ()=> {
    onChildData( inputValue);
  }

  return (
    <>
      <h2>Child Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter data"
      />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </>
  );
};

export default Child;
