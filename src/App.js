import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { onSnapshot } from '@firebase/firestore';
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';
import { auth, handleUserProfile } from './firebase/utils';

import './default.scss';

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const unlisten = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await handleUserProfile(authUser);
        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unlisten();
    };
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          render={() => (
            <HomePageLayout currentUser={currentUser}>
              <HomePage />
            </HomePageLayout>
          )}
          exact
        />
        <Route
          path="/registration"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )
          }
        />
        <Route
          path="/login"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            )
          }
        />
      </Switch>
    </div>
  );
}

export default App;
