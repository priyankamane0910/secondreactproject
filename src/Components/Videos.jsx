import { Heading, Stack, VStack ,Text, Button} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

const Videos = () => {

    const VideoArr=[
         'https://cdn.pixabay.com/vimeo/487508532/Woman%20-%2058142.mp4?width=640&hash=0d04483bca070b3a8567ac4120a2af09038319ab',
        'https://cdn.pixabay.com/vimeo/688648666/Skate%20-%20110734.mp4?width=1280&hash=7a5fb1d4f6f8d7a8b37298f011666a3be97e5b12',
        'https://cdn.pixabay.com/vimeo/770315514/Sea%20-%20138588.mp4?width=1280&hash=e6f46286f0c6f80a09bb243069e5dc7e46927cc7',
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
        'https://cdn.pixabay.com/vimeo/577442929/Mountains%20-%2081945.mp4?width=1280&hash=86ff8f45815e48cf8e0a8bc918e9e4a433e43e46',
        'https://player.vimeo.com/external/476396222.sd.mp4?s=b80070ca3b168f3fc133f6b500c9e3a225bb32a7&profile_id=164',

    ];

    // const CaptionArr=[
    //     'Lecture 1',
    //     'Lecture 2',
    //     'Lecture 3',
    //     'Lecture 4',
    //     'Lecture 5',
    //     'Lecture 6',
    //     'Lecture 7',
    // ]

  const [videosSrc, setVideos]=useState(VideoArr[0])
  //const [Captions, setCaptions]=useState(CaptionArr[0])

  return (
    
    <Stack direction={['column','row']} h={'120vh'}>
       <VStack w={'full'} >
            <video
            controls
            controlsList='nodownload'
            src={videosSrc} style={{width:'100%'}}></video>

            <VStack alignItems={'flex-start'} overflow={'auto'} p={'3'}>
                <Heading size={'md'}>Sample Video</Heading>
                <Text>Mathematics is the science and study of quality, 
                      structure, space, and change. Mathematicians seek out
                      patterns, formulate new conjectures, and establish 
                      truth by rigorous deduction from appropriately chosen 
                      axioms and definitions.
                </Text>
                
               
            </VStack>

          
       </VStack>

       <VStack w={['full', 'xl']} overflow={'auto'} alignItems={'stretch'}>

            <Heading size={'md'} mt={'40px'} ml={'145px'}>All Lectures</Heading>

          {VideoArr.map((item, index)=>
          (
             <Button variant={'ghost'} colorScheme={'linkedin'}
              onClick={()=>setVideos(item)}
             >
                Lecture {index+1}
             </Button>
          ))}
        
       </VStack>

    </Stack>

  )
}

export default Videos