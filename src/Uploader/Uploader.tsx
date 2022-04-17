import React, { useContext } from 'react';
import "./Uploader.scss";

import csvIcon from "../assets/file-csv.png"
import uploadIcon from "../assets/upload.png"
import { isString } from '../utils/utils';
import { FileContext } from '../providers/FileProvider';


const Uploader: React.FC = () => {
    const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);

    const { content, setFile } = useContext(FileContext);

    React.useEffect(() => {
        if (uploadedFile === null) {
            return;
        }
        const reader: FileReader = new FileReader();

        reader.onload = (readerEvent) => {
            if (isString(readerEvent.target?.result)) {
                setFile(readerEvent.target!.result, uploadedFile.name);
                setUploadedFile(null);
            }
        }

        reader.readAsText(uploadedFile);
    }, [uploadedFile, setFile]);

    if (content.length > 0) {
        return null;
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const files: FileList | null = event.target.files;
        if (files === null) {
            return;
        }
        setUploadedFile(files[0]);
    }

    return (
        <div className="upload-file">
            <img src={csvIcon} alt="csv" />
            <span>Upload een CSV bestand om deze te bekijken</span>
            <label htmlFor="file">
                <div className='button'><img src={uploadIcon} alt="upload" />Upload bestand</div>
            </label>
            <input type="file" id="file" accept=".csv" onChange={handleInputChange} />
        </div>
    )
}

export default Uploader;