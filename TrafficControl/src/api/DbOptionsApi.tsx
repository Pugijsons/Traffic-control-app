import { AxiosResponse } from "axios";
import { dbOptionsClient } from "../axios";

export class DbOptionsApi {
  static async clear(): Promise<AxiosResponse<void>> {
    return dbOptionsClient.post("clear");
  }
  static async upload(file: File): Promise<AxiosResponse<void>> {
    const formData = new FormData();
    formData.append('file', file);
  
    return dbOptionsClient.put("upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}