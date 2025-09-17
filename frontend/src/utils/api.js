// frontend/src/utils/api.js

// Define a URL base da nossa API.
// Em desenvolvimento, será uma string vazia (usando o proxy).
// Em produção, será a URL que definimos no .env.production.
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Criamos uma função "fetch" customizada.
export async function apiFetch(endpoint, options = {}) {
  const { body, ...restOptions } = options;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...restOptions,
    headers: {
      'Content-Type': 'application/json',
      ...restOptions.headers,
    },
    body: body ? JSON.stringify(body) : null,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Ocorreu um erro na API.');
  }
  return data;
}