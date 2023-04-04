import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router/Router";
import { useContext } from "react";
import { ThemContextProvider } from "./context/themContext/ThemContext";

function App() {
  const { dark } = useContext(ThemContextProvider);
  return (
    <div className={`${dark && 'bg-slate-950'}`}>
      <div className="w-full lg:w-4/5 mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
