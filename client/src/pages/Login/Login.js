import "./Login.css";
import { Link } from "react-router-dom";
import google from "../../images/google.svg";
import see from "../../images/see.svg";
import nosee from "../../images/nosee.svg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormInput from "../../components/shared/FormInput/FormInput";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [logo, setLogo] = useState(nosee);
  const [show, setShow] = useState(true);

  function handleClick() {
    show ? setLogo(see) : setLogo(nosee);
    setShow(!show);
  }

  useEffect(() => {
    console.log(password);
  }, [password]);

  let location = useLocation();
  let navigate = useNavigate();

  async function login() {
    let user = { email, password };

    let result = await fetch("https://schoolscout.herokuapp.com/auth/login/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // let feedback = await result.json();
    let requestStatus = result.status;

    if (requestStatus === 200) {
      alert("Login successful");
      console.log(
        "result.status",
        result.status,
        "result.statusText",
        result.statusText
      );
      navigate(process.env.PUBLIC_URL + "/");
    } else {
      alert(result.status + ": " + result.statusText);
    }
  }

  return (
    <section className="login-section">
      <div className="app-login-container">
        <div className="app-login-img"></div>
        <div className="app-sgnup-form">
          <h1 className="app-login-heading">Login to your account</h1>
          <div className="app-login-form" action="">
            <FormInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="app-login-input"
              placeholder="Enter email address"
              type="text"
            />
            <div className="app-login-pwd-container">
              <FormInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="app-login-input app-login-input-left"
                placeholder="Password"
                type={!show ? "text" : "password"}
              />
              <img
                onClick={handleClick}
                className="app-login-pwd-mask"
                src={logo}
                alt=""
              />
            </div>
            <Link
              className="app-login-fgt-pwd"
              to={process.env.PUBLIC_URL + "/forgot-password"}
            >
              Forgot password?
            </Link>
            <button onClick={() => login()} className="app-login-btn">
              Login
            </button>
            <label className="lbl-or" htmlFor="">
              OR
            </label>
            <button className="app-login-btn-google">
              <img src={google} alt="" />
              Login with Google
            </button>
            <label className="app-login-sgnup" htmlFor="">
              Don’t have an account?{" "}
              <Link
                className="app-login-sgnup-lnk"
                to={process.env.PUBLIC_URL + "/signup"}
              >
                Sign up
              </Link>
            </label>
          </div>
        </div>
      </div>
      <Link
        style={{ display: "hidden" }}
        id="cap-rslt"
        to={process.env.PUBLIC_URL + "/career-advisory/cap-rslt"}
      ></Link>
    </section>
  );
};
