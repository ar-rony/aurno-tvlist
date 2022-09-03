import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='aurno-header'>
        <h1>
          Aurno TvList
        </h1>
      </div>
      <main className='aurno-app'>
      <iframe src="//stream.crichd.vip/update/sscricket.php" width={100} height={500}allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" ></iframe>
      </main>
    </React.Fragment>
  );
}

export default App;
