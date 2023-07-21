import { dayOverviewClient } from "../axios";


export interface DayOverviewData {
    hour: number,
    averageSpeed: number
}

export class DayOverviewApi {
    static async fetchDayOverview(date: string): Promise<DayOverviewData[]> {
        const response = await dayOverviewClient.get("retrievedata", {params: {date}});
        return response.data;
      }
}