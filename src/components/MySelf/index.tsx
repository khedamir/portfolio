import React from 'react';
import clsx from 'clsx';
import styles from './MySelf.module.scss';
import Tag from '../Tag';

const MySelf = () => {
  return (
    <div className={clsx(styles.myself)}>
      <header style={{ paddingBottom: '60px' }} className="container">
        <Tag tag="h2">
          <h2>Me, MySelf and I</h2>
        </Tag>
        <br />
        <Tag tag="p">
          <p>
            Since Adobe Flash was a complete innovation, alongside with CSS 1.0 and HTML 4.01 as
            standards of the current web I've been passionate about web.
            <br />
            <br />
            For over a decade I had many opportunities to work in a vast spectrum of web
            technologies what let me gather a significant amount of various experience. Working for
            companies and individuals around the globe I met and learnt from amazing and ambitious
            people.
            <br />
            <br />I currently work remotely with a selected freelance client base being open for new
            opportunities.
          </p>
        </Tag>
      </header>
    </div>
  );
};

export default MySelf;
