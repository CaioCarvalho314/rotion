//Data Structure
export interface Document {
  id: string;
  title: string;
  content: string;
}

//Data Requests
export interface SaveDocumentRequest extends Document {}

export interface FetchDocumentRequest {
  id: string;
}

export interface DeleteDocumentRequest {
  id: string;
}

//Data Responses
export interface FetchAllDocumentsResponse {
  data: Document[];
}

export interface FetchDocumentResponse {
  data: Document;
}

export interface CreateDocumentResponse {
  data: Document;
}
