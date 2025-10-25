export type TFile = {
    id?: number;
    name: string;
    modified: string;
    file_size: string;
    sharing: string;
    file_type: string;
};

export type TDocumentFolder = {
  id: number;
  folder_name: string;
  files: TFile[];
};