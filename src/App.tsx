import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexRouter from './router/index-router';
import AdministrationIndex from './components/dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    token && setIsLoggedIn(true);
  }, [token])

  return (
    <div className="App">
      {isLoggedIn ? <AdministrationIndex /> : <IndexRouter />}
    </div>
  );
}

export default App
