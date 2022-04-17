import React, { useContext } from 'react';
import { FileContext } from '../providers/FileProvider';
import "./Header.scss";

const Header: React.FC = () => {
  const { clearFile } = useContext(FileContext);
  return (
    <div className='header'>
      <span onClick={clearFile}>CSV Viewer</span>
    </div>
  )
}

export default Header;
