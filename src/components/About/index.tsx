import clsx from 'clsx';
import React from 'react';
import styles from './About.module.scss';
import avatar from '../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../Logo';
import Tag from '../Tag';

const About = () => {
  return (
    <div className={clsx(styles.about, 'container')}>
      <div className={clsx(styles.aboutTitle)}>
        <Tag tag="h1">
          <h1 className={clsx(styles.title)}>
            Hi, <br /> I,m <Logo />, <br /> web developer
          </h1>
        </Tag>

        <div className={clsx(styles.description)}>
          <Tag tag="p">
            <p>Front End Developer | React</p>
          </Tag>
        </div>
        <Link to={'/'}>
          <Button type="outlined">Contact me</Button>
        </Link>
      </div>
      <div className={clsx(styles.avatar)}>
        <div className={clsx(styles.shadow)}></div>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default About;
