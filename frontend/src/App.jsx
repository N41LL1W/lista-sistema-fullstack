import { useAuth } from './hooks/useAuth';
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage';
import { MainLayout } from './components/MainLayout';

function App() {
  const { usuario, carregando } = useAuth();

  // A função de logout agora é necessária aqui para ser passada ao layout
  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    location.reload();
  };

  if (carregando) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      {usuario ? (
        // Se o usuário está logado, renderiza o Layout Principal
        // e coloca a HomePage DENTRO dele (como 'children')
        <MainLayout usuario={usuario} onLogout={handleLogout}>
          <HomePage />
        </MainLayout>
      ) : (
        // Se não, mostra a página de autenticação
        <AuthPage />
      )}
    </>
  );
}

export default App;