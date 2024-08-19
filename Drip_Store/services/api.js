// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Substitua pelo URL da sua API

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Adicione outros cabeçalhos necessários, como Authorization se necessário
  },
});

// Adiciona o token JWT aos cabeçalhos das requisições
api.interceptors.request.use(config => {
    const token = localStorage.getItem('jwtToken'); // Supondo que o token esteja armazenado no localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });

export default api;
