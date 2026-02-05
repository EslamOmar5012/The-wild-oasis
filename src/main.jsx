import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFullBack from "./ui/ErrorFallback";
import App from "./App";
import { DarkModeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFullBack}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </ErrorBoundary>
  </StrictMode>,
);
