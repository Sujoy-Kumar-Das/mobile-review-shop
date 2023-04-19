import React, { useContext } from "react";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";

const NodeJsWork = () => {
  const { dark } = useContext(ThemContextProvider);
  return (
    <div>
      <h3
        className={`mt-5 text-xl font-bold ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Qustion : How does NodeJS handle multiple requests at the same time?
      </h3>
      <p className={` mt-2 font-normal ${dark ? "text-white" : "text-black"}`}>
        Whenever a client sends a request the single thread will send that
        request to someone else. The current thread will not be busy working
        with that request. There are workers working for the server. The server
        sends the request to the worker, the worker further sends it to the
        other server and waits for the response. In the meantime if there is
        another request the thread will send it to another worker and the worker
        will wait for the response from the another server.
      </p>
    </div>
  );
};

export default NodeJsWork;
