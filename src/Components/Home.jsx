import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {Box, Center, Heading, Image, Img, Stack} from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Container, Text } from '@chakra-ui/react'

import Book1 from '../Images/1st.jpg'
import Book2 from '../Images/2ndd.png'
import Book3 from '../Images/3rdd.png'
import Book4 from '../Images/4th.jpg'
import Book5 from '../Images/5th.jpg'
import importance from '../Images/importance.jpg'


const heading={
   top: '50%',
   left: '50%',
   position:'absolute',
   transform:'translate(-50%, -50%)',
   texttransform: 'uppercase',
   p:'3',
}


const Home = () => {
  
  return (
   <>
   <Box>
        
     <Carousel 
      infiniteLoop autoPlay interval={1500} showStatus={false} showThumbs={false} showIndicators={false}
      >
      
         <Box h={'100vh'}>
            <Image src={Book1} h={'600px'}  alt='item1'/>
            <Heading backgroundColor={'blackAlpha.700'} color={'white'} {...heading}>Maths is everywhere</Heading>
         </Box>
         <Box>
            <Image src={Book2} h={'600px'} alt='item2'/>
            <Heading backgroundColor={'blackAlpha.700'} color={'white'} {...heading}>Math is Redical</Heading>
         </Box>
         <Box>
            <Image src={Book5} h={'600px'} alt='item3'/>
            <Heading backgroundColor={'blackAlpha.700'} color={'white'} {...heading}>Every Problem has solution</Heading>
         </Box>
    </Carousel>
    
    <Container maxW={'container.lg'} maxH={'200vh'} p={'16'} >
          
          <Heading borderBottom={'2px solid'} 
          w={'fit-content'} textTransform={'uppercase'} 
          m={'auto'} marginTop={'50px'} size={'lg'}>Importance</Heading>
       
         <Stack 
            h={'full'}
            direction={['column', 'row']}
            p={'2'}
            alignItems={'center'}
            marginLeft={'70px'}
            >
               <img src={importance} height={'200px'} width={'200px'} style={{border:'5px solid'}} />
               <Text letterSpacing={'0.5px'} lineHeight={'22px'} fontSize={'20px'} >
                  Mathematics has a number of very useful benefits to our mind if we go into its study.
                  It develops our reasoning, helps us to have analytical thinking, quickens our mind, 
                  generates practicality and also its use can be applied in the day to day. The 
                  mathematics is present in our daily lives. For many students, math is boring, abstract, 
                  lacking in creativity, complex and very difficult to understand, hence the typical 
                  expressions of “I am of letters” or “Numbers are not mine.” However, it is a subject 
                  that is part of the study of our children and as such should be an effort for compression, 
                  which usually involves constant practice.
               </Text>
         </Stack>
     </Container>
        
    </Box>
    </>
  )
}


export default Home