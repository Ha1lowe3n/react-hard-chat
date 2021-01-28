import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Button, Block } from '../../../components';

class LoginForm extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}>
            <Form.Item
              name="username"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}>
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}>
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="button--large">
                Войти в аккаунт
              </Button>
            </Form.Item>

            <Link className="auth__register-link" to="/register">
              Зарегистрироваться
            </Link>
          </Form>
        </Block>
      </div>
    );
  }
}

export default LoginForm;
