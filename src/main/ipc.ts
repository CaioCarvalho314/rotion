import { ipcMain } from "electron";
import { IPC } from "../shared/constants/ipc";
import { FetchAllDocumentsResponse } from "../shared/@types/ipc";

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: [
        { id: "1", title: "Rocketseat", content: "Curso da Rocketseat" },
        { id: "2", title: "Ignite", content: "Curso da Ignite" },
        { id: "3", title: "Discover", content: "Curso da Discover" },
        { id: "4", title: "Settings", content: "Configurações" },
      ],
    };
  }
);
