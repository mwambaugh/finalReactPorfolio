import React from "react";
// import { Card, Button } from "antd";
import resume from '../utils/Resume.pdf';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc =`//cdnjs.cloudfare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const DownloadResume = () => {
    return(
        <div className='res'>
            <h2 className='heading'>Resume</h2>
            <Document
            file ={resume}
            onLoadError={console.error}
            style={{width: '100vw', height:'auto'}}
            >
                <Page pageIndex={0}/>
            </Document>
        </div>
    )
};

export default DownloadResume;
