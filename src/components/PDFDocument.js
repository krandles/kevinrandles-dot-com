import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class PDFDocument extends Component {
  render() {
    return (
      <div>
        <a href="#">
          <Document file="Kevin Randles Resume 2018.pdf">
            <Page pageNumber={1} />
          </Document>
        </a>
      </div>
    );
  }
}

export default PDFDocument;
