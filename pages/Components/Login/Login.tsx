import { Button, Card, Grid, Input, Spacer, Text } from '@nextui-org/react'
import React from 'react'

const Login = () => {
  return (
    <Grid.Container justify="center">
      <Grid xs={4}>
        <Card>
          <Card.Body css={{ padding: "$15"}}>
            <Text h2>Login</Text>
            <Spacer y={0.5} />
            <form>
                <Input labelPlaceholder="E-Mail" css={{ w: "250px"}}/>
                <Spacer y={1.3} />
                <Input.Password labelPlaceholder="Password" />
                <Spacer y={1} />
                <Button shadow color="primary" auto css={{ w: "150px"}}>
                    Login
                </Button>
            </form>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}

export default Login