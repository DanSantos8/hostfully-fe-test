import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout/Layout"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<div>lala</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  )
}

export default App
