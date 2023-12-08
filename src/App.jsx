import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./Pages/HomePage"
import { SearchPage } from "./Pages/SearchPage"
import { SingInPage } from "./Pages/SingInPage"
import { SingUpPage } from "./Pages/SignUpPage"
import { MapaPage } from "./Pages/MapaPage"
import { AdminPage } from "./Pages/AdminPage"
import { OwnerPage } from "./Pages/OwnerPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/SingIn' element={<SingInPage />} />
        <Route path='/SingUp' element={<SingUpPage />} />
        <Route path='/Search' element={<SearchPage />} />
        <Route path='/Mapa' element={<MapaPage />} />
        <Route path='/Admin' element={<AdminPage />} />
        <Route path='/Owner' element={<OwnerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
