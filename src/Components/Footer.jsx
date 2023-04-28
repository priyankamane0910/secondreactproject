import { Box, Button, Heading, HStack, Input, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    
    <Box h={'225px'} bgColor={'blackAlpha.800'} color={'white'} textAlign={'center'} p={'20'}>

        <Stack direction={['column', 'row']}>
            <VStack w={'full'}  alignItems={'center'}  >
              <Heading 
              textTransform={'uppercase'} size={'md'} >
                 Subscribe to us
              </Heading>
              <HStack borderBottom={'1px solid white'}>
                <Input
                    placeholder='Enter your email address'
                    border={'none'}
                     focusBorderColor={'none'}
                    // outline={'none'}
                    />
                <Button 
                    borderRadius={'0 15px 15px 0'} 
                    variant={'ghost'} p={'0'}
                    colorScheme={'purple'} >
                   <AiOutlineSend/>
                </Button>
              </HStack>
            </VStack >

            <VStack w={'full'} borderLeft={['none', '1px solid white']}>
                <Heading textTransform={'uppercase'} size={'lg'}>Video Hub</Heading>
                <text>All rights received</text>
            </VStack>

            <VStack w={'full'} borderLeft={['none', '1px solid white']}>
                <Heading size={'md'} textTransform={'uppercase'}>Social media</Heading>
                <Button variant={'link'} colorScheme={'pink'}>
                    <a href='https://www.youtube.com/' target={'_blank'}>You Tube</a>
                </Button>
                <Button variant={'link'} colorScheme={'pink'}>
                    <a href='https://www.instagram.com/' target={'_blank'}>Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme={'pink'}>
                    <a href='https://in.linkedin.com/' target={'_blank'}>LinkedIn</a>
                </Button>
                
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer