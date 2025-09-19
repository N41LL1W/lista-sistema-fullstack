// Local: frontend/src/utils/api.js

// Define a URL base da nossa API.
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export async function apiFetch(endpoint, options = {}) {
  const { body, ...restOptions } = options;

  // CORREÇÃO: Garante que não haja barras duplas na URL final.
  // Remove a barra inicial do endpoint se a URL base já tiver uma.
  const finalEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
  const url = `${API_BASE_URL}/${finalEndpoint}`;

  const response = await fetch(url, {
    ...restOptions,
    headers: {
      'Content-Type': 'application/json',
      ...restOptions.headers,
    },
    body: body ? JSON.stringify(body) : null,
  });

  // Lógica para lidar com respostas vazias (como um 204 No Content)
  const contentType = response.headers.get("content-type");
  if (response.status === 204 || !contentType || !contentType.includes("application/json")) {
    if (!response.ok) {
        throw new Error(`Erro na API: Status ${response.status}`);
    }
    return; // Retorna undefined para respostas sem corpo JSON
  }

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Ocorreu um erro na API.');
  }
  return data;
}