import { BrowserRouter, Routes } from "react-router-dom";
import { renderRoutesGlobal, routes } from "./router/Router"; // Asegúrate de que el import esté correcto
import ToastComponent from "./components/core/ToastComponent";
import Loader from "./components/core/LoaderComponent";
import '@fontsource/inter'; // Por defecto, incluye 400.
import QuizComponent from './components/quiz/QuizComponent.jsx';



function App() {
  return (
    <>
      <Loader />
      <ToastComponent />
      <BrowserRouter>
        <Routes>
          {renderRoutesGlobal(routes)} {/* Renders the routes */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
