import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import {
  getTopicosPainel,
  addTopicoPainel,
  updateTopicoPainel,
  deleteTopicoPainel
} from '../../Services/FirebaseService';

const STATUS_LABELS = {
  a_estudar: 'A Estudar',
  em_progresso: 'Em Progresso',
  compreendido: 'Compreendido',
  precisa_revisar: 'Precisa Revisar',
  precisa_aprofundar: 'Precisa Aprofundar',
  revisado: 'Revisado/Consolidado'
};
const STATUS_ORDER = [
  'a_estudar',
  'em_progresso',
  'compreendido',
  'precisa_revisar',
  'precisa_aprofundar',
  'revisado'
];
const MATERIAS = [
  'Biologia', 'Química', 'Física', 'Matemática', 'Linguagens', 'Humanas', 'Redação', 'Interdisciplinar'
];

// Recebe userId como prop
export default function Home({ userId }) {
  const [topicos, setTopicos] = useState([]);
  const [filtro, setFiltro] = useState('todas');
  const [modalAberto, setModalAberto] = useState(false);
  const [editando, setEditando] = useState(null); // null = novo, { ... } = edição
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // Formulário do modal
  const [form, setForm] = useState({
    materia: 'Biologia',
    nome: '',
    status: 'a_estudar',
    compreensao: 'Raso',
    data: '',
    observacoes: ''
  });

  useEffect(() => {
    carregarTopicos();
    // eslint-disable-next-line
  }, []);

  async function carregarTopicos() {
    setCarregando(true);
    try {
      const lista = await getTopicosPainel(userId);
      setTopicos(lista);
    } catch (e) {
      setErro('Erro ao carregar tópicos.');
    }
    setCarregando(false);
  }

  function filtrarTopicos() {
    const filtrados = filtro === 'todas' ? topicos : topicos.filter(t => t.materia === filtro);
    // Ordena sempre pelo campo 'ordem' (nulo/undefined vai para o final)
    return filtrados.slice().sort((a, b) => {
      if (a.ordem === undefined) return 1;
      if (b.ordem === undefined) return -1;
      return a.ordem - b.ordem;
    });
  }

  function abrirModal(topico) {
    setEditando(topico);
    setForm(topico ? { ...topico } : {
      materia: 'Biologia', nome: '', status: 'a_estudar', compreensao: 'Raso', data: '', observacoes: ''
    });
    setModalAberto(true);
  }
  function fecharModal() {
    setModalAberto(false);
    setEditando(null);
    setForm({ materia: 'Biologia', nome: '', status: 'a_estudar', compreensao: 'Raso', data: '', observacoes: '' });
  }

  async function salvarTopico(e) {
    e.preventDefault();
    console.log("[salvarTopico] Início", { userId, form, editando });
    if (!userId) {
      setErro('Usuário não autenticado.');
      console.error("[salvarTopico] userId indefinido");
      return;
    }
    try {
      if (editando && editando.id) {
        console.log("[salvarTopico] Editando tópico", { topicoId: editando.id, form });
        await updateTopicoPainel(userId, editando.id, form);
        console.log("[salvarTopico] Tópico atualizado com sucesso");
      } else {
        console.log("[salvarTopico] Adicionando novo tópico", { form });
        await addTopicoPainel(userId, form);
        console.log("[salvarTopico] Novo tópico adicionado com sucesso");
      }
      fecharModal();
      console.log("[salvarTopico] Modal fechado");
      carregarTopicos();
      console.log("[salvarTopico] Tópicos recarregados");
    } catch (e) {
      setErro('Erro ao salvar tópico: ' + (e.message || JSON.stringify(e)));
      console.error('[salvarTopico] Erro ao salvar tópico:', e);
    }
  }

  async function removerTopico(topico) {
    if (!window.confirm('Tem certeza que deseja remover este tópico?')) return;
    try {
      await deleteTopicoPainel(userId, topico.id);
      carregarTopicos();
    } catch (e) {
      setErro('Erro ao remover tópico.');
    }
  }

  // Resumo
  const contagem = STATUS_ORDER.reduce((acc, status) => {
    acc[status] = 0;
    return acc;
  }, {});
  topicos.forEach(t => { if (contagem[t.status] !== undefined) contagem[t.status]++; });
  const total = topicos.length;

  return (
    <div className={styles.homePageContainer}>
      <header className={styles.homeHeader}>
        <h1>Painel de Gestão de Estudos ENEM</h1>
        <p>Personalizado para Cairo Silva - Medicina Unoeste</p>
      </header>
      <main className={styles.mainPanel}>
        <section className={styles.filtros}>
          <label htmlFor="filtro-materia">Filtrar por matéria:</label>
          <select id="filtro-materia" value={filtro} onChange={e => setFiltro(e.target.value)}>
            <option value="todas">Todas</option>
            {MATERIAS.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <button type="button" onClick={() => abrirModal(null)}>Adicionar Tópico</button>
        </section>
        {erro && <div style={{ color: 'red', marginBottom: 8 }}>{erro}</div>}
        {carregando ? (
          <div>Carregando tópicos...</div>
        ) : (
          <section className={styles.painelTopicos}>
            {filtrarTopicos().map((t, idx) => (
              <div key={t.id || idx} className={styles.topicoCard} data-status={t.status}>
                <div className={styles.topicoHeader}>{t.nome}</div>
                <div className={styles.topicoMateria}>{t.materia}</div>
                <div className={styles.topicoStatus} data-status={t.status}>{STATUS_LABELS[t.status]}</div>
                <div className={styles.topicoCompreensao}>Compreensão: {t.compreensao}</div>
                <div className={styles.topicoData}>{t.data ? `Último estudo: ${t.data}` : ''}</div>
                <div className={styles.topicoObservacoes}>{t.observacoes}</div>
                <div className={styles.acoes}>
                  <button title="Editar" onClick={() => abrirModal(t)}>✏️</button>
                  <button title="Remover" onClick={() => removerTopico(t)}>🗑️</button>
                </div>
              </div>
            ))}
          </section>
        )}
        {/* Resumo do progresso */}
        <section className={styles.resumo}>
          <h2>Resumo do Progresso</h2>
          <div className={styles.resumoBarra}>
            {STATUS_ORDER.map(status => contagem[status] > 0 && (
              <div
                key={status}
                className={styles.barra + ' ' + styles['barra-' + status]}
                style={{ width: `${(contagem[status] / (total || 1)) * 100}%` }}
              />
            ))}
          </div>
          <div className={styles.resumoMetricas}>
            {STATUS_ORDER.map(status => (
              <span key={status}>{STATUS_LABELS[status]}: <b>{contagem[status]}</b></span>
            )).reduce((prev, curr) => [prev, ' | ', curr])}
          </div>
        </section>
      </main>
      {/* Modal de edição/adicionar */}
      {modalAberto && (
        <div className={styles.modal} onClick={e => { if (e.target.classList.contains(styles.modal)) fecharModal(); }}>
          <div className={styles.modalConteudo}>
            <span className={styles.fechar} onClick={fecharModal}>&times;</span>
            <h2>{editando ? 'Editar Tópico' : 'Adicionar Tópico'}</h2>
            <form className={styles.formTopico} onSubmit={salvarTopico}>
              <label>Matéria:
                <select required value={form.materia} onChange={e => setForm(f => ({ ...f, materia: e.target.value }))}>
                  {MATERIAS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </label>
              <label>Tópico/Tema:
                <input type="text" required value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} />
              </label>
              <label>Status:
                <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
                  {Object.entries(STATUS_LABELS).map(([val, label]) => <option key={val} value={val}>{label}</option>)}
                </select>
              </label>
              <label>Nível de Compreensão:
                <select value={form.compreensao} onChange={e => setForm(f => ({ ...f, compreensao: e.target.value }))}>
                  <option value="Raso">Raso</option>
                  <option value="Médio">Médio</option>
                  <option value="Profundo">Profundo</option>
                </select>
              </label>
              
              <label style={{ gridColumn: '1 / 3' }}>Observações:
                <textarea rows={3} value={form.observacoes} onChange={e => setForm(f => ({ ...f, observacoes: e.target.value }))} />
              </label>
              <button type="submit" style={{ gridColumn: '1 / 3' }}>Salvar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
