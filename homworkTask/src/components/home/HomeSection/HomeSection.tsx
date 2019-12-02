import React from 'react';
import './HomeSection.scss';

type Props = {
  children: JSX.Element;
};

const HomeSection: React.SFC<Props> = ({ children }) => {
  return (
    <section className={'HomeSection'}>
      <div className={'HomeSection-content'}>
        {children}
      </div>
    </section>
  );
};

export default HomeSection;