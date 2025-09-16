import { AuthPage } from '../pages/AuthPage';

// Este componente recebe o usuário e a função de logout como props
export function MainLayout({ usuario, onLogout, children }) {
  if (!usuario) {
    // Se por algum motivo não houver usuário, redireciona para a página de login
    return <AuthPage />;
  }

  return (
    <div id="app-container">
      <div className="app-header">
        <span id="usuario-logado">{usuario.email}</span>
        <button id="logout-btn" className="btn-secundario" onClick={onLogout}>Sair</button>
      </div>
      
      {/* 'children' é uma prop especial do React que renderiza o que for
          colocado DENTRO do componente MainLayout */}
      <main>
        {children}
      </main>
    </div>
  );
}