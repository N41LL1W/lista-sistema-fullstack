import { useState } from 'react';
import './AuthForm.css';

export function AuthForm({ tipo, onSubmit, feedback, isLoading }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoading) return; // Impede múltiplos envios
    onSubmit({ email, senha });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        autoComplete="email"
        disabled={isLoading}
      />
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder={tipo === 'login' ? "Senha" : "Senha (mínimo 6 caracteres)"}
        required
        autoComplete={tipo === 'login' ? "current-password" : "new-password"}
        disabled={isLoading}
      />
      
      {feedback && <p className={`feedback-msg ${feedback.tipo}`}>{feedback.mensagem}</p>}
      
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Aguarde...' : (tipo === 'login' ? 'Entrar' : 'Registrar')}
      </button>
    </form>
  );
}