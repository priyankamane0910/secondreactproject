import { Button, Container, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const UploadVideo = () => {
  return (
    <Container  h={'100vh'} p={'16'}>
        <form>
            <VStack h={'full'} justifyContent={'center'} color={'purple.500'} >
                <AiOutlineCloudUpload size={'200'}/>
            </VStack>

            <HStack pt={'10'}>
                <input required type={'file'} />
                <Button colorScheme={'linkedin'} type='submit' colorScheme={'purple'}>Upload</Button>
            </HStack>
        </form>
    </Container>
  )
}

export default UploadVideo