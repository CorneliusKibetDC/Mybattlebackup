import React, { useState } from 'react';
import { RegisterForm, LogInForm } from './Components/logIn'; // Adjust the path as needed
import Game from './Components/Game';
import './style.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            <h1>Battleship Game</h1>
            {isLoggedIn ? (
                // Render Game component if the user is logged in
                <Game />
            ) : (
                // Render Register and Login forms if the user is not logged in
                <div>
                    <h2>Register</h2>
                    <RegisterForm />
                    <h2>Login</h2>
                    <LogInForm onLoginSuccess={handleLoginSuccess} />
                </div>
            )}
        </div>
    );
}

export default App;
