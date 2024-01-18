import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const [childData, setChildData] = useState('')
    

    const handleChildData = (childData) => {
         setChildData(childData)
        console.log(childData);
    }

  return (
    <>
      <Child onChildData={handleChildData}/>
      <p>Data from Child: {childData}</p>
    </>
  );
};

export default Parent;
