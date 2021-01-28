import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';

import { Button, Block } from '../../../components';

class RegisterForm extends Component {
  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  render() {
    const success = false;
    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Block>
          {success ? (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}>
              <Form.Item
                name="email"
                hasFeedback
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}>
                <Input
                  size="large"
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="E-mail"
                />
              </Form.Item>

              <Form.Item
                name="name"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}>
                <Input
                  size="large"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Ваше имя"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}>
                <Input
                  size="large"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                />
              </Form.Item>

              <Form.Item
                name="again password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}>
                <Input
                  size="large"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Повторить пароль"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="button--large">
                  Зарегистрироваться
                </Button>
              </Form.Item>

              <Link className="auth__register-link" to="/login">
                Войти в аккаунт
              </Link>
            </Form>
          ) : (
            <div className="auth__success-block">
              <div>
                <InfoCircleTwoTone />
              </div>
              <h3>Подтвердите свой аккаунт</h3>
              <p>На Вашу почту отправлено письмо с ссылкой для подтверждения аккаунта.</p>
              <Link className="auth__register-link" to="/login">
                Вернуться назад
              </Link>
            </div>
          )}
        </Block>
      </div>
    );
  }
}

export default RegisterForm;
