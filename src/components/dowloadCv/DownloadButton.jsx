import React, { useState } from 'react';
import htmlPdf from 'html-pdf';
import css from './DownloadButton.module.css';

const DownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);

    const resumeContent = document.getElementById('resume-content').innerHTML;

    const options = {
      format: 'A4',
      orientation: 'portrait',
      border: {
        top: '10mm',
        bottom: '10mm',
        left: '10mm',
        right: '10mm',
      },
    };

    htmlPdf.create(resumeContent, options).toFile('resume.pdf', (err, res) => {
      setIsLoading(false);
      if (err) {
        console.error(err);
      } else {
        window.open(res.filename);
      }
    });
  };

  return (
    <button
      className={css.downloadButton}
      disabled={isLoading}
      onClick={handleDownload}
    >
      {isLoading ? 'Downloading...' : 'Download CV'}
    </button>
  );
};

export default DownloadButton;
