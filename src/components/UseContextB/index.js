import React from "react";
import UseContextC from "../UseContextC";

export const UserContext = React.createContext();
export const UserChannel = React.createContext();

function UseContextB() {
  return (
    <div>
      <UserContext.Provider value={"Uma"}>
        <UserChannel.Provider value={"-Mahesh"}>
          <UseContextC />
        </UserChannel.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default UseContextB;
