'use client';
import Link from "next/link";
import styles from "./styles.module.css";
import { login } from "../../api/portfolio";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'

export default function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const handleSubmit = async () => {
    event.preventDefault()
    const res = await login(username, password);
    if (res?.data.error) {
      alert(res?.data.error);
      return;
    }

    console.log(res?.data);
    router.push("/portfolio")
  };

  return (
    <div className={styles.bg}>
      <form className={styles.loginForm} >
        <h1>Iniciar Sesión</h1>
        <div className={styles.content}>
          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Usuario"
              onChange={(event) =>
                setUsername(event.target.value)
              }
            />
          </div>
          <div className={styles.inputField}>
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />
          </div>
        </div>
        <p className={styles.error}>{errorMsg}</p>
        <div className={styles.action}>
          <Link href="/portfolio">
            <button>Volver</button>
          </Link>
          <button onClick={handleSubmit}>Aceptar</button>
        </div>
      </form>
    </div>
  );
}
