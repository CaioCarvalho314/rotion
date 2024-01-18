import { ipcMain } from "electron";
import { IPC } from "../shared/constants/ipc";
import {
  FetchAllDocumentsResponse,
  FetchDocumentResponse,
  FetchDocumentRequest,
  CreateDocumentResponse,
  SaveDocumentRequest,
  DeleteDocumentRequest,
  Document,
} from "../shared/@types/ipc";
import { store } from "./store";
import { randomUUID } from "node:crypto";

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: Object.values(store.get("documents")),
    };
  }
);

ipcMain.handle(
  IPC.DOCUMENTS.FETCH,
  async (_, { id }: FetchDocumentRequest): Promise<FetchDocumentResponse> => {
    const response = store.get(`documents.${id}`) as Document;
    return {
      data: response,
    };
  }
);

ipcMain.handle(
  IPC.DOCUMENTS.CREATE,
  async (): Promise<CreateDocumentResponse> => {
    const id = randomUUID();
    const newDocument: Document = {
      id,
      title: "Sem Titulo",
      content: "",
    };
    store.set(`documents.${id}`, newDocument);
    return {
      data: newDocument,
    };
  }
);

ipcMain.handle(
  IPC.DOCUMENTS.SAVE,
  async (_, { id, title, content }: SaveDocumentRequest): Promise<void> => {
    store.set(`documents.${id}`, { id, title, content });
  }
);

ipcMain.handle(
  IPC.DOCUMENTS.DELETE,
  async (_, { id }: DeleteDocumentRequest): Promise<void> => {
    // @ts-ignore
    store.delete(`documents.${id}`);
  }
);
