import React, { useState } from 'react';
import './SectionLogin.css';
import Sapatos from '../../../public/image-sapatos-login.png';
import Facebook from '../../../public/icon-facebook.svg';
import Gmail from '../../../public/icon-gmail.svg';

export function SectionLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                // Exemplo de tratamento de erro
                const errorData = await response.json();
                setError(errorData.message);
                throw new Error('Login falhou');
            }

            const data = await response.json();
            // Armazenar o token no localStorage
            localStorage.setItem('token', data.token);

            // Redirecionar ou atualizar o estado conforme necessário
            setSuccessMessage('Login bem-sucedido!');
            // Exemplo de redirecionamento usando React Router (opcional)
            // window.location.href = '/dashboard';

        } catch (error) {
            console.error('Erro:', error.message);
        }
    };

    return (
        <>
            <section className='section-login'>
                <div className='forms-content'>
                    <form className="form" onSubmit={handleLogin}>
                        <h1>Acesse sua conta</h1>
                        <p>Novo cliente? Então registre-se <a href="/register">aqui</a>.</p>
                        {error && <p className="error-message">{error}</p>}
                        <label htmlFor="email">Login *</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Insira seu login ou email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Senha *</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Insira sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <a href="/forgot-password" className="forgot-password">Esqueci minha senha</a>
                        <button type="submit">Acessar a Conta</button>
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        <div className='login-rede-sociais'>
                            <span>Ou faça login com</span>
                            <a href="#">
                                <img src={Gmail} className='icon-gmail' alt="gmail" />
                            </a>
                            <a href="#">
                                <img src={Facebook} className='icon-facebook' alt="facebook" />
                            </a>
                        </div>
                    </form>
                </div>
                <div className='image-sapatos'>
                    <img src={Sapatos} className='sapatos-login' alt="sapatos" />
                </div>
            </section>
        </>
    );
}
