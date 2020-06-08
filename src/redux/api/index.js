import axios from "axios";

const baseURL = "https://truco-mock-server.herokuapp.com";

export const apiCall = (endpoint, body, headers, method) => axios({
  method,
  url: baseURL + endpoint,
  body,
  headers
});