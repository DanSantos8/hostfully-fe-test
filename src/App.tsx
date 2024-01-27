import { ThemeProvider } from "styled-components"
import theme from "./theme"
import { GlobalStyles } from "./GlobalStyle"
import { Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./pages/Home"
import Layout from "./components/Layout/Layout"
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<div>lala</div>} />
            <Route path="*" element={<div>Not found</div>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
