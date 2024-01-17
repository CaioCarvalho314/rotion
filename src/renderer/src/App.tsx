import { queryClient } from "./lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "./Routes";

import "./styles/global.css";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
