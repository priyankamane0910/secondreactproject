import { Container, Heading, VStack, Input, Button, Avatar , Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container h={'500px'} maxW={'700'} mt={'25'}
     mb={'25'} borderRadius={'140px'}
     bgColor={'ButtonHighlight'}
     border={'2px solid black'}
     >
        <form >
            <VStack justifyContent={'center'} py={'10'} px={'40'}>
                <Heading >Mathematics</Heading>
                <Avatar size={'xl'}/>

                <Input type={'text'} placeholder={'Name'} required
                  border={'1px solid black'}
                 />

                <Input type={'email'} placeholder={'Email'} required
                  border={'1px solid black'}
                 />

                 <Input type={'password'} placeholder={'Password'} required
                  border={'1px solid black'}/>

                 <Input type={'password'} placeholder={'Confirm Password'} required
                  border={'1px solid black'}/>

                  <Text>Already signed Up? {' '}
                    <Button variant={'link'} colorScheme={'purple'}>
                      <Link to={'/Login'}>Login</Link>
                    </Button>
                  </Text>

                
                    <br/>

                  <Button colorScheme={'green'}>Login</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default SignUp