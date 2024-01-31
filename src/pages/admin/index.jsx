import React, { useState } from 'react';
import s from './admin.module.scss';
import { useRouter } from 'next/router';

const Index = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

	const handleLogin = async () => {
		// Проверка логина и пароля
		if (login === process.env.NEXT_PUBLIC_REACT_APP_LOGIN && password === process.env.NEXT_PUBLIC_REACT_APP_PASSWORD) {
			// Если проверка проходит успешно, сохраняем информацию в localStorage
			localStorage.setItem('SECRET_WORD', process.env.NEXT_PUBLIC_REACT_APP_SECRET_WORD);
			console.log('Аутентификация успешна. SECRET_WORD сохранен в localStorage.');
      router.push("/")
		} else {
      alert("Неверный логин или пароль.")
		}
	};

  return (
    <section className={s.admin_section}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">SEND</button>
      </form>
    </section>
  );
};

export default Index;