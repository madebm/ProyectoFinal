import axios from 'axios';

const baseURL = 'https://421f-2803-1800-4018-daab-3172-8291-c5c3-2a65.ngrok-free.app';
let publicService = axios.create({
  baseURL,
});

publicService.interceptors.request.use(async (config) => {
  config.headers['Content-Type'] = 'application/json'; // Cambiado a "Content-Type"
  return config;
});

export { publicService };
