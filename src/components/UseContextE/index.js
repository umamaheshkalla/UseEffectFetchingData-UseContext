import React, { useContext } from "react";

import { UserContext, UserChannel } from "../UseContextB";

function UseContextE() {
  const user = useContext(UserContext);
  const channel = useContext(UserChannel);

  return (
    <div>
      <center>
        <h2>
          {user}-{channel}
        </h2>
      </center>
    </div>
  );
}

export default UseContextE;
