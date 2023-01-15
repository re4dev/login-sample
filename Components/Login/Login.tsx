import { Button, Card, Grid, Input, Spacer, Text } from '@nextui-org/react'
import React, { useRef, useState } from 'react'
import { shallow } from 'zustand/shallow'
import { useTokenStore } from '../../store'

const Login = () => {
  const { userId, isLoggedIn, setToken, setUserId, clearToken } = useTokenStore(
    (state) => (
      {
        token: state.token, 
        userId: state.userId, 
        isLoggedIn: state.isLoggedIn,
        setToken: state.setToken,
        setUserId: state.setUserId,
        clearToken: state.clearToken
      }
    ),
    shallow
  )
  const userData = {
    userName: useRef<HTMLInputElement>(null),
    userPassword: useRef<HTMLInputElement>(null)
  }
  const [message, setMessage] = useState<string>("");



  const url: string = process.env.NEXT_PUBLIC_API_LINK_FOR_LOGIN;

  function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch("/api/login",
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
        setToken(data.token)
        setUserId(data.userId)
      }).catch((error) => {
        console.error('Error:', error);
        setMessage(error.message);
      }
      )
  }


  return (
    <Grid.Container justify="center">
      <Grid sm={6} md={4}>
        <Card>
          <Card.Body css={{ padding: "$15" }}>
            {isLoggedIn()
              ?<><Text h2 color='red'>Hello {userData.userName.current.value}</Text><Spacer y={0.3} /><Text>User-ID: {userId}</Text><Spacer y={0.3} /><Button shadow color="error" auto css={{ w: "150px" }} onClick={() => { clearToken(); setMessage(""); }}>Logout</Button></>
              : <><form onSubmit={login}><Text h2>Login</Text><Spacer y={0.7} /><Input labelPlaceholder="Username" css={{ w: "250px" }} ref={userData.userName} /><Spacer y={1.3} /><Input.Password labelPlaceholder="Password" css={{ w: "250px" }} ref={userData.userPassword} /><Spacer y={1} /><Button shadow color="primary" auto css={{ w: "150px" }} type="submit">Login</Button></form></>
            }
            {message && !isLoggedIn() ? <Text>{message}</Text> : null}
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}

export default Login