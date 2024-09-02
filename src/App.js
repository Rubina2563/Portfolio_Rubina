
import React, { useState, useEffect } from 'react';
import Home from './Pages/Home'; // Your Home page component
import Loading from './components/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loading /> : <Home />}</>;
};

export default App;