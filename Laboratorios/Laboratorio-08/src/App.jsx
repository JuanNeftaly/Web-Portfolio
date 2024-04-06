// modulos para usar router
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import "./App.css";
// agregando header y nav
import Header from "./assets/components/header/Header";

// agreando loanding
import LoadingOverlay from "./assets/components/loading/Loading";

// agreando cards
import Cards from "./assets/components/cards/Cards";

// agregando rango
import Range from "./assets/components/pickers/range/Range";

// agrenando random
import Random from "./assets/components/pickers/random/Random";

// agrenando date
import Date from "./assets/components/pickers/date/Date";

function App() {
  const [apods, setApods] = useState([]); // para almacenar elementos
  const [isLoading, setIsLoading] = useState(false); // controla la superposicion del usuario

  // actualiza el estado de apods con nueva lista de elementos
  const updateApods = (newApods) => {
    setApods(newApods);
  };

  // agrega elementos
  const addElementToApods = (newApods) => {
    setApods((oldApods) => [...oldApods, ...newApods]);
  };

  // controla el estado de carga de la app
  const handleIsLoading = (status) => {
    setIsLoading(status);
  };
  // falta mandar a traer range
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Range
                updateApods={updateApods}
                handleIsLoading={handleIsLoading}
              />
            }
          />

          <Route
            path="/random"
            element={
              <Random
                // ejercicio propuesto, le mandas los datos necesarios
                updateApods={updateApods}
                addElementToApods={addElementToApods}
                handleIsLoading={handleIsLoading}
              />
            }
          />

          <Route
            path="/date"
            element={
              <Date
                updateApods={updateApods}
                handleIsLoading={handleIsLoading}
              />
            }
          />
        </Routes>

        <Cards apods={apods} />
        {isLoading && <LoadingOverlay />}
      </BrowserRouter>
    </>
  );
}

export default App;
