import React, { useEffect } from 'react';
import SignUpForm from 'components/SignInForm/SignInForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from 'redux/users/operations';
import { useNavigate } from 'react-router-dom';
import { selectAuthError, selectIsLoggedIn } from 'redux/users/selectors';
import { Background } from 'pages/Background.styled';
import { toast } from 'react-toastify';
import { Toast } from 'components/Toast/Toast';

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleLogin = formData => {
    dispatch(loginRequest(formData));
  };

  return (
    <Background>
      {error !== null && toast('Oops. Something went wrong')}
      <SignUpForm onSubmit={handleLogin} isLoginForm />
      <Toast />
    </Background>
  );
}

export default SignInPage;
