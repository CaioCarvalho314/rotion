import { ipcMain } from "electron";

ipcMain.handle("fetch-documents", async () => {
  return [
    { id: 1, title: "Rocketseat" },
    { id: 2, title: "Ignite" },
    { id: 3, title: "Discover" },
    { id: 4, title: "Settings" },
  ];
});
