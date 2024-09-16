import React from 'react'
import { Button, Html, Container, Text, Link, Preview, Body } from "@react-email/components";

const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <html>
        <Preview>Welcome to N3xtTest</Preview>
        <Body style={{background:'#fff'}}>
            <Container>
                <Text>Hello {name}</Text>
                <Link href='https://github.com/iamthanuj'>Follow RetroHammer</Link>
            </Container>
        </Body>
    </html>
  )
}

export default WelcomeTemplate