import { Button } from "antd";
import React, { Component } from "react";
import axios from "axios";
import { Content, Wrapper } from "./Login.style";
import * as HiIcons from "react-icons/hi";
import * as GiIcons from "react-icons/gi";
export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password,
    };

    axios
      .post("http//localhost:8000/login", data)
      .then((res) => {
        // console.log(res);
        localStorage.setItem('token',res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Content onSubmit={this.handleSubmit}>
        <div>
          <div id="header">
            {/* <img src=".\Images\logo.jpg" width="450" height="150" /> */}
            <h1>欢迎登录Kai4234BookStore后台管理系统！</h1>
          </div>
          <div id="log">
            <div id="e-mail">
              <div id="icon">
                <HiIcons.HiOutlineMail
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                />
              </div>
              <div id="form">
                <input
                  type="email"
                  placeholder="admin@123.com"
                  onChange={(e) => (this.email = e.target.value)}
                ></input>
              </div>
            </div>
            <div id="password">
              <div id="icon">
                <GiIcons.GiCarKey
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                />
              </div>
              <div id="form">
                <input
                  type="password"
                  placeholder="admin123"
                  onChange={(e) => (this.password = e.target.value)}
                ></input>
              </div>
            </div>
            <Button id="button2">登录</Button>
          </div>
        </div>
      </Content>
    );
  }
}
