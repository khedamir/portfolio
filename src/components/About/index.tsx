import clsx from 'clsx'
import React from 'react'
import Logo from '../Logo'
import styles from './About.module.scss'
import avatar from '../../assets/images/avatar.jpg'
import Button from '../Button'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className={clsx(styles.about)}>
            <div className={clsx(styles.aboutTitle)}>
                <span className="tag">{'<h1>'}</span>
                <h1 className={clsx(styles.title)}>Hi, <br /> I,m <Logo />, <br /> web developer</h1>
                <span className="tag">{'</h1>'}</span>

                <div className={clsx(styles.description)}>
                    <span className="tag">{'<p>'}</span>
                    <p>Front End Developer | React</p>
                    <span className="tag">{'</p>'}</span>
                </div>
                <Link to={'/'}>
                    <Button type='outlined'>Contact me!</Button>
                </Link>
            </div>
            <div className={clsx(styles.avatar)}>
                <div className={clsx(styles.shadow)}></div>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default About
