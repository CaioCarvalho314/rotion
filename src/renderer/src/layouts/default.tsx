import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import "../styles/global.css";
export default function Default() {
  return (
    <div id="header" className="h-screen w-screen text-rotion-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
