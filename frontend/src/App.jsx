import { useAuth } from './hooks/useAuth';
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage';
import { MainLayout } from './components/MainLayout';

function App() {
  const { usuario, carregando } = useAuth();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      location.reload();
    }
  };

  if (carregando) {
    // Você pode criar um componente de Spinner/Loader mais bonito aqui
    return <div className="loader-overlay" style={{display: 'flex'}}><div className="spinner"></div></div>;
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