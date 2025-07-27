import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    window.location.href = 'https://muhammad-awais-portfolio-93.netlify.app/';
  }, []);

  return (
    <div className="redirect-container">
      {isLoading && <div className="loader"></div>}
    </div>
  );
}

export default App;
