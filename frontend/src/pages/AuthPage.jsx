import { useState } from 'react';
import { AuthForm } from '../components/AuthForm';

export function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

  const mostrarFeedback = (mensagem, tipo = 'erro') => {
    setFeedback({ mensagem, tipo });
    setTimeout(() => setFeedback(null), 4000);
  };

  const handleRegistro = async ({ email, senha }) => {
    setIsLoading(true);
    setFeedback(null);
    try {
      const response = await fetch('/api/auth/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
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
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      location.reload();
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