import React, { useRef, useContext } from "react";
import { Container } from "react-bootstrap";
import Style from "./Login.module.css";
import AuthContext from "../store/authContext";
const Login = () => {
  const passwordRef = useRef();
  const emailRef = useRef();

  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGFVm98_6VmN7odn0DZtuX7Qrnfv7UvNQ",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
        console.log(res);
        login(res.idToken);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };
  return (
    <Container>
      <form className={Style.container} onSubmit={handleLogin}>
        <h2
          className="align-self-center"
          style={{
            fontFamily: "Metal Mania",
            width: "80%",
            margin: "35px auto",
            textAlign: "center",
            fontSize: "35px",
            color: "black",
          }}
        >
          Login
        </h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" ref={emailRef} id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id="password"
            minLength={"6"}
            required
          />
        </div>
        <button>Login</button>
      </form>
    </Container>
  );
};

export default Login;
