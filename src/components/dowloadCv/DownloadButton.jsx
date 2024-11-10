import React, { useState } from 'react';
// import htmlPdf from 'html-pdf';
import jsPDF from 'jspdf';
import css from './DownloadButton.module.css';

function DownloadButton() {
  const [isLoading, setIsLoading] = useState(false);
  const resumeUrl = 'https://ardevazsign.github.io/OwenSaavedraCv/.html';

  const handleDownload = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(resumeUrl);
      const htmlContent = await response.text();

      const doc = new jsPDF();
      doc.html(htmlContent, {
        callback: function (doc) {
          doc.save('resume.pdf');
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error('Error fetching or processing resume: ', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        className={css.downloadButton}
        disabled={isLoading}
        onClick={handleDownload}
      >
        {isLoading ? 'Downloading...' : 'Download CV'}
      </button>
    </div>
  );
}

export default DownloadButton;
