import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={clsx(styles.logo)}>
            <Link to={'/'}>
                Kheda
            </Link>
        </div>
    )
}

export default Logo
