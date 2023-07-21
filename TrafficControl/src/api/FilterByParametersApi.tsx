import { filterByClient } from "../axios";
import { FilterRequest } from "./models/FilterRequest";

export interface FilteredData {
    licensePlate: string,
    speed: number,
    date: string
}

export class FilterBy{
static async fetchFilteredData(filter: FilterRequest) : Promise<FilteredData[]> {
    const response = await filterByClient.get("filterby", {params: filter});
    return response.data;
}
}

