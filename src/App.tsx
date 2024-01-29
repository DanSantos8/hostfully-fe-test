import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout/Layout"
import PropertyDetail from "./pages/PropertyDetail"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/property-detail/:id" element={<PropertyDetail />} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  )
}

export default App
