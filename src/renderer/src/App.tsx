import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./styles/global.css";

export default function App() {
  return (
    <div id="header" className="h-screen w-screen text-rotion-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center text-rotion-400">
          Selecione ou crie um arquivo
        </main>
      </div>
    </div>
  );
}
