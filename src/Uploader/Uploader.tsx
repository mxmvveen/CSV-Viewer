import React from 'react';
import "./Uploader.scss";

import csvIcon from "../assets/file-csv.png"
import uploadIcon from "../assets/upload.png"

const Uploader = () => (
    <div className="container">
        <div className="upload-file">
            <img src={csvIcon} alt="csv" />
            <span>Upload een CSV bestand om deze te bekijken</span>
            <button className='button'><img src={uploadIcon} alt="upload" />Upload bestand</button>
        </div>
    </div>
)

export default Uploader;
