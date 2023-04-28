import { Container, Heading, VStack, Input, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container h={'500px'} maxW={'800'} mt={'25'}
     mb={'25'} borderRadius={'140px'}
     bgColor={'ButtonHighlight'}
     border={'2px solid black'}
     >
        <form >
            <VStack justifyContent={'center'} py={'40'} px={'40'}>
                <Heading size={'md'}>Welcome Back</Heading>

                <Input type={'email'} placeholder={'Email'} required
                  border={'1px solid black'}
                 />

                 <Input type={'password'} placeholder={'Password'} required
                  border={'1px solid black'}/>

                  <Button variant={'link'} alignSelf={'flex-end'} colorScheme={'green'}>
                    <Link to={'/forgetpassword'}>Forget Password</Link>
                  </Button>
                    

                  <Button colorScheme={'green'}>Login</Button>

                  <Text>New User?{' '}
                    <Button colorScheme={'purple'} variant={'link'}>
                      <Link to={'/SignUp'}>Sign Up</Link>
                    </Button>
                  </Text>


            </VStack>
        </form>
    </Container>
  )
}

export default Login