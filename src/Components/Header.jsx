import React from 'react'
import {BiMenuAltLeft} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {
    Drawer, DrawerBody,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    Button,
    useDisclosure,
    Stack,
    VStack,
    Heading,
    DrawerHeader,
    HStack,
    } from '@chakra-ui/react'

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
        <Button h={'9'} w={'8'} pos={'fixed'} top={'4'} left={'4'} p={'0'}
        borderRadius={'full'} colorScheme={'whatsapp'} onClick={onOpen}
        zIndex={'overlay'}
        >

             <BiMenuAltLeft size={'30'}/>

        </Button>

        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
           
            <DrawerOverlay/>
            <DrawerContent >
                <DrawerCloseButton/>
                <DrawerHeader>Mathematics</DrawerHeader>
                <DrawerBody>
                    
                    <VStack alignItems={'flex-start'}>
                        <div>
                            <Button variant={"ghost"} colorScheme={'linkedin'} onClick={onClose}>
                               <Link to={'/'} >Home</Link>
                            </Button>
                        </div>
                        <div>
                            <Button variant={"ghost"} colorScheme={'linkedin'} onClick={onClose}>
                               <Link to={'/videos'}>Videos</Link>
                            </Button>
                        </div>
                        <div>
                            <Button variant={"ghost"} colorScheme={'linkedin'} onClick={onClose}>
                               <Link to={'/videos?category=free'}>Free Videos</Link>
                            </Button>
                        </div>
                        <div>
                            <Button variant={"ghost"} colorScheme={'linkedin'} onClick={onClose}>
                               <Link to={'/upload'}>Upload Video</Link>
                            </Button>
                        </div>
                    </VStack>

                    <HStack position={'absolute'} bottom={'10'} w={'full'} >

                        <Button variant={'solid'} colorScheme={'pink'}  onClick={onClose} >
                            <Link to={'/login'}>Log In</Link>
                        </Button>
                        <Button variant={'outline'} colorScheme={'pink'} left={'8'}  onClick={onClose}>
                            <Link to={'/signUp'}>Sign Up</Link>
                        </Button>

                    </HStack>
                </DrawerBody>
            </DrawerContent>

        </Drawer>
    </>
  )
}

export default Header