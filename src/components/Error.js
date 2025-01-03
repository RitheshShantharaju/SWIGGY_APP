import React from "react";
import {useRouteError} from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error page</h1>
      <h2>This is the error page </h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
