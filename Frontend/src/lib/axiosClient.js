import axios from 'axios';

/**
 * Axios instance pre-configured for Backend API calls.
 * 
 * In development, requests to /api are proxied by Vite to http://localhost:8080
 * (see vite.config.js). In production, update the baseURL accordingly.
 */
const axiosClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - attach auth token if available
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle common errors
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;

    if (response) {
      switch (response.status) {
        case 401:
          console.warn('Unauthorized - redirecting to login...');
          // TODO: Redirect to login page or refresh token
          break;
        case 403:
          console.warn('Forbidden - insufficient permissions');
          break;
        case 500:
          console.error('Server error:', response.data?.message);
          break;
        default:
          break;
      }
    } else {
      console.error('Network error - unable to reach server');
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
