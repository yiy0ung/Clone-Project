import React from 'react';
import './Button.scss';

type Props = {
  display?: 'primary'|'outline';
  type?: 'button'|'submit'|'reset';
  size?: 'medium'|'small';
  style?: object;
  className?: string;
  onClick?: () => void;
  content: string|Node;
}

const Button: React.SFC<Props> = ({
  display,
  type,
  size,
  style,
  className,
  onClick,
  content,
}) => {
  return (
    <button
      style={style}
      className={`Button Button-${size} Button-${display} ${className}`}
      type={type}
      onClick={onClick}>
      <span className={'Button-content'}>
        {content}
      </span>
    </button>
  );
};

Button.defaultProps = {
  display: 'primary',
  type: 'button',
  size: 'medium',
  style: {},
  className: '',
  onClick: () => {},
};

export default Button;