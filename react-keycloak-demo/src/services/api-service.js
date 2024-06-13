import axios from "axios";

import UserService from "./auth-service";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  if (UserService.isLoggedIn()) {
    const cb = () => {
      config.headers.Authorization = `Bearer ${UserService.getAccessToken()}`;
      return Promise.resolve(config);
    };
    return UserService.updateToken(cb);
  }
});

  

api.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      const message = error.response?.data?.message || error.message;
    //   useNotifications.getState().addNotification({
    //     type: 'error',
    //     title: 'Error',
    //     message,
    //   });
  
    //   if (error.response?.status === 401) {
    //     const searchParams = new URLSearchParams();
    //     const redirectTo = searchParams.get('redirectTo');
    //     window.location.href = `/auth/login?redirectTo=${redirectTo}`;
    //   }
  
      return Promise.reject(error);
    },
  );
