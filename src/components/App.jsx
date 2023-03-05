import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectError } from 'redux/contacts/selectors';
import { getCurrentUserRequest, logOutRequest } from 'redux/users/operations';
import { selectIsLoggedIn, selectUserData } from 'redux/users/selectors';
import { Loader } from './Loader/Loader';
import { Toast } from './Toast/Toast';
import { UserMenu, Navigation, Header, StyledNavLink, Email, Button } from './App.Stuled';


const HomePage = lazy(() => import('pages/Home/Home'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const SignUpPage = lazy(() => import('pages/SignUp/SignUp'));
const SignInPage = lazy(() => import('pages/SignIn/SignIn'));

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(getCurrentUserRequest());
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  useEffect(() => {
    if (error) {
      toast('Oops. Something went wrong');
    }
  }, [error]);

  return (
    <>
        <Header>
          <nav>
            {isLoggedIn ? (
              <>
                <Navigation>
                  <StyledNavLink to="/">Home</StyledNavLink>
                  <StyledNavLink to="/contacts">Contacts</StyledNavLink>
                  <UserMenu>
                    <Email>{userData.email}</Email>
                    <Button onClick={handleLogOut}>Logout 🚪</Button>
                  </UserMenu>
                </Navigation>
              </>
            ) : (
              <>
              <Navigation>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/sign-in">Sign In</StyledNavLink>
                <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
                </Navigation>
              </>
            )}
          </nav>
        </Header>
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="*" element={<NavLink to="/" />} />
            </Routes>
          </Suspense>
        </main>
        <Toast />
    </>
  );
};
