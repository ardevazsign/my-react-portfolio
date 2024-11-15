import React from 'react';
import css from './DownloadButton.module.css';

const DownloadButton = ({ pdfUrl, fileName }) => {
  const handleDownload = () => {
    const linkSource = pdfUrl;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <button className={css.downloadButton} onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadButton;
