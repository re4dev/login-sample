import React from 'react'
import styles from "./Footer.module.scss"
import { Link, Text } from '@nextui-org/react'
import { useTokenStore } from '../../store'

const Footer = () => {
  const {token} = useTokenStore((state) => ({
    token: state.token
  }))

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.column}><p>This is just a login data check sample.</p></div>
        <div className={styles.column}>{token ? <Text color='white'>Current token: {token}</Text> : <Text color='white'>Not logged in</Text>}</div>
        <div className={styles.column}>Check my <Link href='https://github.com/re4dev/login-sample-with-zustand' isExternal>github</Link></div>
      </footer>
    </>
  )
}

export default Footer