import { Button, Card, Grid, Input, Spacer, Text } from '@nextui-org/react'
import React, { useRef } from 'react'
import { shallow } from 'zustand/shallow'
import { useTokenStore } from '../../../store'

const Login = () => {
  const { token, userId } = useTokenStore(
    (state) => ({ token: state.token, userId: state.userId }),
    shallow
  )
  const setToken = useTokenStore((s) => s.setToken);
  const clearToken = useTokenStore((s) => s.clearToken);
  const isLoggedIn = useTokenStore((s) => s.isLoggedIn);
  const userData = {
    userName: useRef<HTMLInputElement>(null),
    userPassword: useRef<HTMLInputElement>(null)
  }


  
  const url: string = process.env.NEXT_PUBLIC_API_LINK_FOR_LOGIN;

  function login() {
    console.log(userData.userName.current.value)
    fetch(url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userName: userData.userName.current.value,
          userPassword: userData.userPassword.current.value
        })
      })
      .then((response) => response.json())
      .then((data) => { 
        console.log(data)
        setToken(data.token)
    })
  }


  return (
    <Grid.Container justify="center">
      <Grid xs={4}>
        <Card>
          <Card.Body css={{ padding: "$15" }}>
            <Text h2>Login</Text>
            <Spacer y={0.5} />
            <form>
              <Input labelPlaceholder="Username" css={{ w: "250px" }} ref={userData.userName} />
              <Spacer y={1.3} />
              <Input.Password labelPlaceholder="Password" ref={userData.userPassword}/>
              <Spacer y={1} />
              {isLoggedIn()
                ? <Button shadow color="error" auto css={{ w: "150px" }} onClick={() => clearToken()}>Logout</Button>
                : <Button shadow color="primary" auto css={{ w: "150px" }} onClick={() => login()}>Login</Button>
              }
              <Text>{token}</Text>
            </form>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}

export default Login