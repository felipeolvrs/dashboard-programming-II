import { useState } from "react";

export function Login() {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <>
      <form action="">
        <label htmlFor="">Login</label>
        <input type="text" name="login" id="" placeholder="" value={login} onChange={(e) => setLogin(e.target.value)}/>

        <label htmlFor="">Senha</label>
        <input type="password" name="senha"  value={password} onChange={(e) =>setPassword(e.target.value)}/>
s
        <button>Login</button>
      </form>
    </>
  );
}
