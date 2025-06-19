import React, { useState } from 'react';
import styles from './Ben10Page.module.css';

// Dados do Omnitrix (base + variáveis)
const omnitrixData = [
  {
    base: 'FO',
    variables: [
      { syllable: 'GO', word: 'FOGO', emoji: '🔥', sound: 'omnitrix_transform_fogo.mp3' },
      { syllable: 'CA', word: 'FOCA', emoji: '🦭', sound: 'omnitrix_transform_agua.mp3' },
      { syllable: 'RA', word: 'FORA', emoji: '🚪', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'LHA', word: 'FOLHA', emoji: '🍃', sound: 'omnitrix_generic_sound.mp3' },
    ],
  },
  {
    base: 'MA',
    variables: [
      { syllable: 'LA', word: 'MALA', emoji: '💼', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'PA', word: 'MAPA', emoji: '🗺️', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'IS', word: 'MAIS', emoji: '➕', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'R', word: 'MAR', emoji: '🌊', sound: 'omnitrix_generic_sound.mp3' },
    ],
  },
  {
    base: 'PA',
    variables: [
      { syllable: 'TO', word: 'PATO', emoji: '🦆', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'N', word: 'PAN', emoji: '🍞', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'RA', word: 'PARA', emoji: '➡️', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'PA', word: 'PAPA', emoji: '👶', sound: 'omnitrix_generic_sound.mp3' },
    ],
  },
  {
    base: 'BO',
    variables: [
      { syllable: 'LA', word: 'BOLA', emoji: '⚽', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'CA', word: 'BOCA', emoji: '👄', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'TA', word: 'BOTA', emoji: '👢', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'NE', word: 'BONE', emoji: '🧢', sound: 'omnitrix_generic_sound.mp3' },
    ],
  },
  {
    base: 'CA',
    variables: [
      { syllable: 'SA', word: 'CASA', emoji: '🏠', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'BO', word: 'CABO', emoji: '🔌', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'RRO', word: 'CARRO', emoji: '🚗', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'CHO', word: 'CACHO', emoji: '🍇', sound: 'omnitrix_generic_sound.mp3' },
    ],
  },
  {
    base: 'PI',
    variables: [
      { syllable: 'PA', word: 'PIPA', emoji: '🪁', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'LHA', word: 'PILHA', emoji: '🔋', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'CO', word: 'PICO', emoji: '⛰️', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'ÃO', word: 'PIÃO', emoji: '🧿', sound: 'omnitrix_generic_sound.mp3' },
    ],
  },
  {
    base: 'LU',
    variables: [
      { syllable: 'Z', word: 'LUZ', emoji: '💡', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'A', word: 'LUA', emoji: '🌙', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'VA', word: 'LUVA', emoji: '🧤', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'CRO', word: 'LUCRO', emoji: '💰', sound: 'omnitrix_generic_sound.mp3' },
    ],
  },
  {
    base: 'SO',
    variables: [
      { syllable: 'L', word: 'SOL', emoji: '☀️', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'PA', word: 'SOPA', emoji: '🍲', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'CO', word: 'SOCO', emoji: '🥊', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'RTE', word: 'SORTE', emoji: '🍀', sound: 'omnitrix_generic_sound.mp3' },
    ],
  },
  {
    base: 'PE',
    variables: [
      { syllable: 'IXE', word: 'PEIXE', emoji: '🐟', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'DA', word: 'PEDA', emoji: '🧱', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'LO', word: 'PELO', emoji: '🐾', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'NA', word: 'PENA', emoji: '🪶', sound: 'omnitrix_generic_sound.mp3' },
    ],
  },
  {
    base: 'MO',
    variables: [
      { syllable: 'TO', word: 'MOTO', emoji: '🏍️', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'LA', word: 'MOLA', emoji: '🌀', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'ÇA', word: 'MOÇA', emoji: '👧', sound: 'omnitrix_generic_sound.mp3' },
      { syllable: 'RO', word: 'MORO', emoji: '🏡', sound: 'omnitrix_generic_sound.mp3' },
    ],
  },
  // Adicione mais conforme desejar!
];

const OMNITRIX_ACTIVATION_SOUND = require('./assets/omnitrix.mp3');
const BEN10_IMAGE = require('./assets/placeholder_ben10.png');

function Ben10Page() {
  const [currentBaseIndex, setCurrentBaseIndex] = useState(0);
  const [selectedVariable, setSelectedVariable] = useState(null);
  const [formedWord, setFormedWord] = useState('');
  const [wordEmoji, setWordEmoji] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const [activating, setActivating] = useState(false);

  const currentSet = omnitrixData[currentBaseIndex] || null;

  const handleVariableClick = (variable) => {
    setSelectedVariable(variable);
    setFormedWord('');
    setWordEmoji('');
    setShowEmoji(false);
  };

  const handleActivateOmnitrix = () => {
    if (!selectedVariable || !currentSet) return;
    setFormedWord(selectedVariable.word);
    setWordEmoji(selectedVariable.emoji);
    setShowEmoji(true);
    setActivating(true);
    // Toca o som do Omnitrix
    const audio = new Audio(OMNITRIX_ACTIVATION_SOUND);
    audio.play().catch(() => {
      // fallback para navegadores que bloqueiam autoplay
      alert('(Fallback) Som: barulhino-omnitrix-tururururururrurururuuuuuu.mp3');
    });
    // Após alguns segundos, passa para a próxima base
    setTimeout(() => {
      setCurrentBaseIndex((prev) => prev + 1);
      setSelectedVariable(null);
      setFormedWord('');
      setWordEmoji('');
      setShowEmoji(false);
      setActivating(false);
    }, 3500);
  };

  let content;
  const OMNITRIX_POWERDOWN_SOUND = require('./assets/omnitrix-power-down.mp3');

  // Toca o som de power down quando chega ao fim
  if (!currentSet) {
    // Toca o som apenas uma vez ao atingir o fim
    setTimeout(() => {
      const audio = new Audio(OMNITRIX_POWERDOWN_SOUND);
      audio.play();
    }, 150); // pequeno delay para garantir montagem do DOM
    content = (
      <div className={styles.module}>
        <h2>Omnitrix das Sílabas!</h2>
        <p>Herói Mestre do Omnitrix!</p>
        <div className={styles.omnitrixDisplay} style={{margin: '20px auto'}}>FIM</div>
        <p>Todas as transformações completas!</p>
      </div>
    );
  } else {
    content = (
      <section className={styles.module}>
        <h2>Omnitrix das Sílabas!</h2>
        <p>Escolha uma sílaba para combinar com a base e formar uma nova palavra!</p>
        <div className={styles.omnitrixActivity}>
          <div className={styles.baseSyllableContainer}>
            <p>Sílaba Base do Omnitrix:</p>
            <div className={styles.omnitrixDisplay} id="baseSyllableDisplay">{currentSet.base}</div>
          </div>
          <div className={styles.variableSyllablesContainer}>
            <p>Roda de Sílabas (Clique para selecionar):</p>
            <div className={styles.syllableWheel}>
              {currentSet.variables.map((variable) => (
                <button
                  key={variable.syllable}
                  type="button"
                  className={selectedVariable === variable ? styles.selected : ''}
                  onClick={() => handleVariableClick(variable)}
                  disabled={activating}
                >
                  {variable.syllable}
                </button>
              ))}
            </div>
            <p>Sílaba Selecionada: <span className={styles.selectedVariableSyllable}>{selectedVariable ? selectedVariable.syllable : 'Nenhuma'}</span></p>
          </div>
        </div>
        <button
          id="activateOmnitrixButton"
          className={styles.activateOmnitrixButton}
          onClick={handleActivateOmnitrix}
          disabled={!selectedVariable || activating}
        >
          Ativar Omnitrix!
        </button>
        <div id="resultArea" className={styles.resultArea}>
          <p id="formedWord" className={styles.formedWord}>{formedWord}</p>
          {showEmoji && <div id="wordEmojiDisplay" className={styles.wordEmojiDisplay}>{wordEmoji}</div>}
        </div>
        <div className={styles.characterImage}>
          <img src={BEN10_IMAGE} alt="Ben 10" style={{ width: 150, opacity: 0.8 }} />
        </div>
      </section>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Mundo do Ben 10: Transformando com o Omnitrix!</h1>
      </header>
      <main>{content}</main>
      <footer className={styles.pageFooter}>
        <p>Mockup para o Plano de Ensino do Afonso</p>
      </footer>
    </div>
  );
}

export default Ben10Page;
