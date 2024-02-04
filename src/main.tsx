import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import theme from "./theme.ts"
import { GlobalStyles } from "./GlobalStyle.ts"
import { Provider } from "react-redux"
import { store } from "./store/index.ts"
import ErrorBoundary from "./components/Handlers/ErrorBoundary/ErrorBoundary.tsx"
import ErrorHandler from "./components/Handlers/ErrorHandler/ErrorHandler.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
          <ErrorBoundary
            fallback={<ErrorHandler message="Oops, something went wrong." />}
          >
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
