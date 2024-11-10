import React from 'react';
import css from './ViewCv.module.css';

const ViewCv = ({ cvUrl }) => {
  // const cvUrl = 'https://ardevazsign.github.io/OwenSaavedraCv/';
  return (
    <button
      className={css.cvViewButton}
      onClick={() => window.open(cvUrl, '_black', 'noopener noreferrer')}
    >
      View Resume
    </button>
  );
};

export default ViewCv;
