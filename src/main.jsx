import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFullBack from "./ui/ErrorFallback";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFullBack}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
