import { useAuth } from './hooks/useAuth';
import { AuthPage } from './pages/AuthPage';

function App() {
  // Usamos nosso hook customizado para pegar o status do usuário.
  const { usuario, carregando } = useAuth();

  // Se ainda estivermos verificando a sessão, mostramos uma mensagem de carregamento.
  if (carregando) {
    return <h1>Carregando...</h1>;
  }

  // Após a verificação, decidimos qual "mundo" mostrar.
  return (
    <div>
      {usuario ? (
        // Se o 'usuario' EXISTE (não é null), o usuário está logado.
        // Mostramos a aplicação principal.
        <div>
          <h1>Aplicação Principal</h1>
          <p>Bem-vindo, {usuario.email}!</p>
          {/* Aqui entrarão os componentes da nossa lista de compras */}
        </div>
      ) : (
        // Se o 'usuario' NÃO EXISTE (é null), o usuário está deslogado.
        // Mostramos a página de autenticação.
        <AuthPage />
      )}
    </div>
  );
}

export default App;