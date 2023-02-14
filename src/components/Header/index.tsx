import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Logo from '../Logo';
import Button from '../Button';
import Tag from '../Tag';

const Header: React.FC = () => {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const HeaderStyle = {
    top: scroll ? '0' : '28px',
    backgroundColor: scroll ? '#0b0c10' : '#0b0c108d',
  };

  return (
    <div style={HeaderStyle} className={clsx(styles.root)}>
      <header className={clsx(styles.header)}>
        <Tag tag="nav">
          <div className={clsx(styles.wrapper)}>
            <Logo />
            <nav className={clsx(styles.nav)}>
              <ul className={clsx(styles.navItems)}>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#myskills">My Skills</a>
                </li>
                <li>
                  <a href="#works">Works</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            <a href="#contact">
              <Button type="contained">Contact</Button>
            </a>
            </nav>
          </div>
        </Tag>
      </header>
    </div>
  );
};

export default Header;
