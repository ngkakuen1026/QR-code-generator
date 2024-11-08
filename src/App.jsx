import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';

function App() {

  const [url, setUrl] = useState('https://reactjs.org');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="min-h-screen px-20 py-10 bg-gray-600">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">QR</span> Code Generator
        </h1>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          Enter your <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">URL</span> to generate a  
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> QR </span>
          code.
        </h1>
      </div>
      <div className="p-10">
          <input 
              type="text" 
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={url}
              onChange={handleInputChange}
          />
      </div>
      <div className="flex justify-center">
        <QRCodeSVG value={url} size={384} />
      </div>
    </div>
  )
}

export default App
