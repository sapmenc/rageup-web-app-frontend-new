import { Flex, Stack, Text } from '@chakra-ui/react'
import {useRef} from 'react'
import ReactPlayer from "react-player/lazy";

const HeroVideoSection = () => {
    const playerRef = useRef(null);
  return (
    <Flex w='100%' justify={'center'} align={'center'} pt='200px' pb='100px'>
        <Flex w={['90%','75%','65%']} py='50px' px='10px' boxShadow={'0px 0px 20px 5px #FD060280'} borderRadius={'20px'} flexDir={['column','column','row']}>
            <Stack w={['100%','100%','65%']} pr={['20px','20px','0px','0px']} pl={['20px','20px','20px','100px']} justify={'center'} mb={['40px','40px','0px']}>
                <Text fontWeight={'bold'} fontSize={['35px','40px','40px','45px']}>Hold On!</Text>
                <Text fontWeight={'bold'} fontSize={['35px','40px','40px','45px']}>Right Where You Are!</Text>
                <Text fontWeight={'medium'} fontSize={['12px','15px','15px','17px']}>{"don't scroll without watching!"}</Text>
            </Stack>
            <Flex w={['100%','100%','35%']}>
            <ReactPlayer w='100%' url="https://ik.imagekit.io/o0spphqdc/RageUp/Rageup_tutorial?updatedAt=1702450686234"
                ref={playerRef}
                controls={false}
                playing = {true}
                loop
            />
            </Flex>
        </Flex>
    </Flex>
  )
}

export default HeroVideoSection