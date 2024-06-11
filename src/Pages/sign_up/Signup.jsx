import React from "react";
import "./Signup.css";

export const SignIn = () => {
  return (
    <div className="sign-in">
      <img className="frame" alt="Frame" src="/img/frame-2321.png" />
      <div className="left-side-column">
        <div className="container">
          <div className="main">
            <div className="form-register">
              <div className="heading">
                <div className="title">Create your account</div>
                <div className="text-wrapper">It’s free and easy</div>
              </div>
              <div className="form">
                <div className="x-form-group">
                  <div className="input-large">
                    <div className="form-title-default">
                      <label className="form-title" htmlFor="input-2">
                        Full name
                      </label>
                    </div>
                    <div className="input">
                      <div className="control-wrapper">
                        <div className="control">
                          <input className="text" id="input-2" placeholder="Enter your name" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="x-form-group">
                  <div className="input-large">
                    <div className="form-title-default">
                      <label className="form-title" htmlFor="input-4">
                        E-mail or phone number
                      </label>
                    </div>
                    <div className="input">
                      <div className="control-wrapper">
                        <div className="control">
                          <input
                            className="text"
                            id="input-4"
                            placeholder="Type your e-mail or phone number"
                            type="tel"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="x-form-group">
                  <div className="input-large">
                    <div className="form-title-default">
                      <div className="form-title">Password</div>
                    </div>
                    <div className="input">
                      <div className="control-wrapper">
                        <div className="control">
                          <div className="div">Type your password</div>
                        </div>
                      </div>
                    </div>
                    <div className="form-help-text">
                      <p className="p">Must be 8 characters at least</p>
                    </div>
                  </div>
                </div>
                <div className="check">
                  <p className="text-2">
                    <span className="span">By creating an account means you agree to the </span>
                    <span className="text-wrapper-2">Terms</span>
                    <span className="span">&nbsp;</span>
                    <span className="text-wrapper-2">and</span>
                    <span className="span">&nbsp;</span>
                    <span className="text-wrapper-2">Conditions</span>
                    <span className="span">, and our </span>
                    <span className="text-wrapper-2">Privacy Policy</span>
                  </p>
                </div>
              </div>
            </div>
            <button className="button">
              <div className="label">Sign Up</div>
            </button>
            <div className="social">
              <div className="delimiter">
                <img className="line" alt="Line" src="/img/line-52.svg" />
                <p className="text-wrapper-3">or do it via other accounts</p>
                <img className="line" alt="Line" src="/img/line-53.svg" />
              </div>
              <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="img-wrapper">
                    <img className="search" alt="Search" src="/img/search-1.svg" />
                  </div>
                  <div className="img-wrapper">
                    <img className="vector" alt="Vector" src="/img/vector.svg" />
                  </div>
                </div>
              </div>
            </div>
            <p className="LABEL">
              <span className="text-wrapper-4">Aldready have an account?</span>
              <span className="text-wrapper-5">&nbsp;</span>
            </p>
            <div className="LABEL-2">Sign In</div>
          </div>
        </div>
      </div>
      <div className="art">
        <img className="login-art" alt="Login art" src="/img/login-art.png" />
      </div>
    </div>
  );
};
