import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import styled from './App.module.css';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import AuthLayout from './AuthLayout/AuthLayout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';


// basename='/goit-react-hw-08-phonebook'

const HomePage = lazy(() => import("pages/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename='/goit-react-hw-08-phonebook'>
            <div className={styled.container}>
              <Navigation />
              <Suspense>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route element={<PublicRoute/>}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                  </Route>
                  <Route element={<PrivateRoute/>}>
                    <Route path="/contacts" element={<ContactsPage />} />
                  </Route>
                </Routes>
              </Suspense>
            </div>
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
}
