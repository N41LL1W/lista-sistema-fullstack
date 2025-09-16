import { useState, useEffect } from 'react';

// Esta página vai buscar e exibir as listas do usuário
export function HomePage() {
  const [listas, setListas] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // useEffect é o hook do React para executar "efeitos colaterais",
  // como buscar dados de uma API quando o componente carrega.
  useEffect(() => {
    async function fetchListas() {
      try {
        setCarregando(true);
        const response = await fetch('/api/listas');
        if (!response.ok) {
          throw new Error('Falha ao buscar dados. Por favor, tente novamente.');
        }
        const data = await response.json();
        setListas(data.listas);
        setTemplates(data.templates);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    }

    fetchListas();
  }, []); // O array vazio [] garante que a busca só aconteça uma vez

  if (carregando) {
    return <div className="container">Carregando listas...</div>;
  }

  if (erro) {
    return <div className="container feedback-msg erro">{erro}</div>;
  }
  
  // Por enquanto, vamos apenas mostrar os nomes das listas
  return (
    <div className="container" id="lista-manager">
      <h1>Gerenciar Listas</h1>
      {/* Aqui entrarão os formulários para criar listas */}

      <div className="listas-salvas">
        <h2>Minhas Listas Salvas</h2>
        <ul>
          {listas.length > 0 ? (
            listas.map(lista => <li key={lista.id}>{lista.nome_lista}</li>)
          ) : (
            <p>Nenhuma lista criada ainda.</p>
          )}
        </ul>
      </div>
    </div>
  );
}