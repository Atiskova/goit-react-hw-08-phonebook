import React from 'react';
import { Background } from 'pages/Background.styled';

function HomePage() {
  return (
    <>
      <Background>
        <p style={{ padding: "12px", margin: 'auto', fontWeight: 500, fontSize: 30, textAlign: 'center'}}>Welcome to The Phone Book, you might save here your contacts.</p>
      </Background>
    </>
  );
}

export default HomePage;
