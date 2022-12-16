import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css"
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {
  return (
    <EuiProvider>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Dashboard />}/>
        <Route path="*" element={<Dashboard />}/>
      </Routes>
      <div>App</div>
    </EuiProvider>
  );
}
