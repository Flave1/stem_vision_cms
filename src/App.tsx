import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexRouter from './router/index-router';
import { Routes } from 'react-router-dom';
import AdministrationIndex from './components/dashboard';
import { connect } from 'react-redux';

function App({ token }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    token && setIsLoggedIn(true);
  }, [token])

  return (
    <div className="App">
      {isLoggedIn ? <AdministrationIndex /> : <IndexRouter />}
    </div>
  );
}
function mapStateToProps(state: any) {
  return { token: state.auth.token };
}
export default connect(mapStateToProps, null)(App)
