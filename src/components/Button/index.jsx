import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button as AntdButton } from 'antd';

import './Button.scss';

function Button(props) {
  return (
    <AntdButton
      {...props}
      className={classNames('button', props.className, {
        'button--large': props.size === 'large',
      })}
    />
  );
}

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
