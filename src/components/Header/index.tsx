import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Logo from '../Logo';
import Button from '../Button';

const Header: React.FC = () => {
    return (
        <div className={clsx(styles.root)}>
            <header className={clsx(styles.header)}>
                <span className='tag'>{'<nav>'}</span>
                <div className={clsx(styles.wrapper)}>
                    <Logo />
                    <nav className={clsx(styles.nav)}>
                        <ul className={clsx(styles.navItems)}>
                            <li><a href="#about">About</a></li>
                            <li><a href="#myskills">My Skills</a></li>
                            <li><a href="#works">Works</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact"><Button type='contained'>Contact</Button></a></li>
                        </ul>
                    </nav>
                </div>
                <span className='tag'>{'<nav>'}</span>
            </header>
        </div>
    )
}

export default Header;
