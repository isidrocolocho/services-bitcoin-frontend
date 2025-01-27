import { BrowserRouter, Routes } from "react-router-dom";
//import RouterApp from './router/Router';
import {renderRoutesGlobal, routes} from "./router/Router";
import ToastComponent from "./components/core/ToastComponent";
import Loader from "./components/core/LoaderComponent";
import '@fontsource/inter'; // Por defecto, incluye 400.

function App() {
  return (
    <>
            <Loader/>
            <ToastComponent/>
            <BrowserRouter>
                <Routes>
                    {renderRoutesGlobal(routes)}
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
