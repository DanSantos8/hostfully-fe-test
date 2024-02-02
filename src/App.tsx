import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout/Layout"
import PropertyDetail from "./pages/PropertyDetail"
import MyBookings from "./pages/MyBookings"
import { ROUTES } from "./constants/routes"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path="/property-detail/:id" element={<PropertyDetail />} />
        <Route path={ROUTES.MY_BOOKINGS} element={<MyBookings />} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  )
}

export default App
