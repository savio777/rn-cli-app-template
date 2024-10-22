import axios, {AxiosResponse} from 'axios';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  async function (response: AxiosResponse) {
    return response;
  },

  async function (error) {
    console.warn(
      `[ERRO: ${error?.response?.status}] {[${error?.config?.method}]`,
      error?.config?.url,
    );

    Alert.alert('Erro', error?.response?.data?.message || 'Erro na requisição');
  },
);

export default api;
