import React from 'react';
import './HomeTemplate.scss';

type Props = {
  children: JSX.Element;
};

const HomeTemplate: React.SFC<Props> = ({ children }) => {
  return (
    <div className={'HomeTemplate'}>
      {children}
    </div>
  );
};

export default HomeTemplate;