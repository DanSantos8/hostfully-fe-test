import { ThemeProvider } from "styled-components"
import theme from "./theme"
import { GlobalStyles } from "./GlobalStyle"
import { Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<div>Home page</div>} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
