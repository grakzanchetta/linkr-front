import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGlobal } from "../../context/globalContext";
import { useEffect } from "react";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { global } = useGlobal();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token !== null) {
      navigate("/timeline");
    }
  }, []);

  async function login(event) {

    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/`,
        user
      );
      global.token = data;
      localStorage.setItem("token", JSON.stringify(data));
      navigate("/timeline");
    } catch (error) {
      setLoading(false);
      alert("Dados inválidos ou incompletos. Tente novamente");
      console.log(error.message);
    }
  }

  function BuildLogin() {

    return (
      <PageContainer>
        <TitleContainer>
          <h1>linkr</h1>
          <h2>
            save, share and discover
            <br />
            the best links in the web
          </h2>
        </TitleContainer>
        <LoginContainer>
          <LoginForm>
            <form onSubmit={login}>
              <input
                required
                type="email"
                placeholder="email"
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
              />
              <input
                required
                type="password"
                placeholder="password"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
              />
              <button disabled={loading} typeof="submit">
                Log In
              </button>
            </form>
            <div>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <h3>First time? Create an account!</h3>
              </Link>
            </div>
          </LoginForm>
        </LoginContainer>
      </PageContainer>
    );
  }

  const MadeLogin = BuildLogin();

  return <>{MadeLogin}</>;
}

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: 375px) {
    display: inherit;
  }
`;

const TitleContainer = styled.div`
  width: 62.5vw;
  height: 100vh;
  background-color: #000000;

  h1 {
    margin-top: 29.4vh;
    margin-left: 9.23vw;
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 106px;
    line-height: 117px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }

  h2 {
    margin-left: 9.23vw;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #ffffff;
  }

  @media (max-width: 375px) {
    height: 175px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 0;
      font-family: "Passion One";
      font-style: normal;
      font-weight: 700;
      font-size: 76px;
      line-height: 84px;
      letter-spacing: 0.05em;
      color: #ffffff;
    }

    h2 {
      font-family: "Oswald";
      font-style: normal;
      font-weight: 700;
      font-size: 23px;
      line-height: 34px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

const LoginContainer = styled.div`
  width: 37.5vw;
  height: 100vh;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 375px) {
    width: 100vw;
    display: inherit;
    padding-top: 50px;
  }
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -15vh;
  margin-left: auto;
  margin-right: auto;
  width: 37.5vw;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 31.5vw;
  }

  input {
    height: 65px;
    padding-left: 11px;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-bottom: 13px;
    border-radius: 6px;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #9f9f9f;
    width: 31.5vw;
  }

  button {
    background-color: #1877f2;
    height: 65px;
    color: white;
    border-radius: 6px;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    margin-left: 3vw;
    margin-right: 3vw;
    width: 31.5vw;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
  }

  h3 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #ffffff;
  }

  @media (max-width: 375px) {
    width: 100vw;
    margin-top: 0px;

    input {
      width: 94vw;
      height: 55px;
      margin-left: 3vw;
      margin-right: 3vw;
      margin-bottom: 11px;
      border-radius: 6px;
      font-family: "Oswald";
      font-style: normal;
      font-weight: 700;
      font-size: 27px;
      line-height: 40px;
      color: #9f9f9f;
    }

    button {
      margin-left: 3vw;
      margin-right: 3vw;
      width: 94vw;
    }

    h3 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;
      text-decoration-line: underline;
      color: #ffffff;
    }
  }
`;
