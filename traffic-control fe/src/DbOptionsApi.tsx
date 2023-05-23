import { AxiosResponse } from "axios";
import { dbOptionsClient } from "./axios";

export class DbOptionsApi {
  static async clear(): Promise<AxiosResponse<void>> {
    return dbOptionsClient.post("clear");
  }
    static async upload(filePath: string): Promise<AxiosResponse<void>> {
      return dbOptionsClient.put("upload", { params: { filePath } });
    }
}
