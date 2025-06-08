import React from 'react';
import styles from './ConceptCard.module.css'; // Ajustaremos se o CSS também for para a raiz de components

function ConceptCard({ conceptTitle, visualRepresentation, definition, keywords, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3>{conceptTitle}</h3>
      {visualRepresentation && (
        <div
          className={styles.visualRepresentation}
          dangerouslySetInnerHTML={{ __html: visualRepresentation }}
        />
      )}
      <p className={styles.definition}>{definition}</p>
      <p className={styles.keywords}><strong>Palavras-chave:</strong> {keywords}</p>
    </div>
  );
}

export default ConceptCard;
