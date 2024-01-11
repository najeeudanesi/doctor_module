import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/css/general.css"
import "./assets/css/index.css"
import "./assets/css/pages-icons.css"
import "./assets/css/pages-sidebar.css"
import { createBrowserHistory } from 'history';
// import Homepage from './components/home';
// import ProtectedRoute from './routes/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
// import UserPortal from './components/UserPortal';
// import Dashboard from './components/pages/Dashboard';
import { MyProvider } from './contexts';
import PageLayout from './components/layouts/PageLayout';




function App() {


  return (
    <MyProvider>

      <Router >
        <div>
          <Routes>
            <Route path="*" Component={PageLayout} />
            {/* <Route
              path="/doctor/*"
              element={
                <ProtectedRoute component={UserPortal} />}
            /> */}
            <Route render={() => <h1>Error 404. Page not found.</h1>} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </MyProvider>
  );
}

export default App;
