import React from "react";
import { Label } from "../../components/Label";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      <img className="frame" alt="Frame" src="/img/frame-2321.png" />
      <div className="left-side-column">
        <div className="container">
          <div className="main">
            <div className="form-login-default">
              <img className="emoji" alt="Emoji" src="/img/emoji.png" />
              <div className="heading">
                <div className="title">Welcome back!</div>
                <p className="p">Make sure to follow the indtructions</p>
              </div>
              <div className="form">
                <div className="x-form-group">
                  <div className="input-large">
                    <div className="form-title-default">
                      <label className="form-title" htmlFor="input-2">
                        E-mail or phone number
                      </label>
                    </div>
                    <div className="input">
                      <div className="control-wrapper">
                        <div className="control">
                          <input
                            className="text"
                            id="input-2"
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
                          <div className="text-2">Type your password</div>
                        </div>
                      </div>
                    </div>
                    <div className="form-help-text">
                      <div className="form-help-text-2">Forgot Password?</div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="button">
                <div className="label">Sign In</div>
              </button>
              <div className="social">
                <div className="delimiter">
                  <img className="line" alt="Line" src="/img/line-52.svg" />
                  <p className="text-wrapper-2">or do it via other accounts</p>
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
            </div>
            <div className="frame-3">
              <Label />
              <div className="LABEL-2">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
      <div className="art">
        <img className="login-art" alt="Login art" src="/img/login-art.png" />
      </div>
    </div>
  );
};
