import { useState, useEffect } from 'react';

export function useAuth() {
  // O estado 'usuario' guardará os dados do usuário se ele estiver logado, ou null se não estiver.
  const [usuario, setUsuario] = useState(null);
  // O estado 'carregando' nos dirá se ainda estamos verificando a sessão no servidor.
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Esta função é executada uma vez, quando a aplicação carrega.
    async function verificarStatusLogin() {
      try {
        const response = await fetch('/api/auth/status');
        const data = await response.json();
        if (data.logado) {
          setUsuario(data.usuario); // Usuário está logado, guardamos seus dados.
        } else {
          setUsuario(null); // Usuário não está logado.
        }
      } catch (error) {
        console.error("Erro ao verificar status de login", error);
        setUsuario(null); // Em caso de erro, consideramos como deslogado.
      } finally {
        setCarregando(false); // A verificação terminou.
      }
    }

    verificarStatusLogin();
  }, []); // O array vazio [] garante que isso só rode uma vez.

  // O hook retorna o estado atual para quem o usar.
  return { usuario, carregando };
}