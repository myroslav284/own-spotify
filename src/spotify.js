import axios from "axios";

const authEndPoint = "https://accounts.spotify.com/en/authorize?";
const clientId = "1ca5c132c9e64d5f8acc878b034f0b89";
const redirectUrl = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/"
})

export const setClientToken = (token) =>{
  apiClient.interceptors.request.use(async function(config){
    config.headers.Authorization = "Bearer " + token;
    return config;
  })
}

export default apiClient;