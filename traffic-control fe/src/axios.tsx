import axios from "axios";

export const dbOptionsClient = axios.create({
  baseURL: "http://localhost:5000/dboptions/"
});

export const dayOverviewClient = axios.create({
  baseURL: "http://localhost:5000/dayoverview/"
});

export const filterByClient = axios.create({
    baseURL: "http://localhost:5000/filterby/"
});
