import React from 'react';
import Header from './Header/Header';
import Uploader from './Uploader/Uploader';
import Viewer from './Viewer/Viewer';
import "./App.scss";
import { FileProvider } from "./providers/FileProvider";

const App: React.FC = () => (
  <FileProvider>
    <Header />
    <div className="container">
      <Uploader />
      <Viewer />
    </div>
  </FileProvider>
);

export default App;
