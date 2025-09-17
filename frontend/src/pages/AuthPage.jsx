import { useState } from 'react';
import { AuthForm } from '../components/AuthForm';
import { apiFetch } from '../utils/api'; // Importa nossa nova função

export function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const mostrarFeedback = (mensagem, tipo = 'erro') => {
    setFeedback({ mensagem, tipo });
    setTimeout(() => setFeedback(null), 4000);
  };

  const handleRegistro = async ({ email, senha }) => {
    setIsLoading(true);
    setFeedback(null);
    try {
      // Usa a nova função apiFetch
      await apiFetch('/api/auth/registrar', {
        method: 'POST',
        body: { email, senha },
      });
      mostrarFeedback('Registro bem-sucedido! Por favor, faça o login.', 'sucesso');
      setIsLoginView(true);
    } catch (error) {
      mostrarFeedback(error.message, 'erro');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async ({ email, senha }) => {
    setIsLoading(true);
    setFeedback(null);
    try {
      // Usa a nova função apiFetch
      await apiFetch('/api/auth/login', {
        method: 'POST',
        body: { email, senha },
      });
      location.reload(); // Recarrega a página para o useAuth detectar a sessão
    } catch (error) {
      mostrarFeedback(error.message, 'erro');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="auth-container">
      {isLoginView ? (
        <div className="container">
          <h1>Login</h1>
          <AuthForm 
            tipo="login" 
            onSubmit={handleLogin} 
            feedback={feedback} 
            isLoading={isLoading} 
          />
          <p>Não tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); setIsLoginView(false); }}>Registre-se</a></p>
        </div>
      ) : (
        <div className="container">
          <h1>Registro</h1>
          <AuthForm 
            tipo="registro" 
            onSubmit={handleRegistro} 
            feedback={feedback} 
            isLoading={isLoading} 
          />
          <p>Já tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); setIsLoginView(true); }}>Faça login</a></p>
        </div>
      )}
    </div>
  );
}