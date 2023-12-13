import { Flex, Image, Stack, Text } from "@chakra-ui/react"
import img1 from '../../assets/landing-page/learning-success-img.png'
import img2 from '../../assets/landing-page/mentorship-magic-img.png'

const HeroLastSection = () => {
  return (
    <Flex w='100%' px={['10px','10px','10px','100px']} py='100px' flexDir={['column','column','column','row']}>
        <Stack w={['100%','100%','100%','50%']} align={'center'} mb={['20px','20px','20px','0px']}>
            <Stack w='80%' mb='20px'>
            <Text fontWeight={'bold'} fontSize={'24px'}>Learning meets success</Text>
            <Text fontSize={'20px'} w='80%'>Learn from our courses, mirroring the foundational learning required to kick start your professional careers.</Text>
            </Stack>
            <Image src={img1} alt='img1' w={['95%','80%','70%','85%']}/>
        </Stack>
        <Stack w={['100%','100%','100%','50%']} align={'center'}>
        <Stack w='80%' mb='50px'>
            <Text fontWeight={'bold'} fontSize={'24px'}>1 : 1 Mentorship works magic</Text>
            <Text fontSize={'20px'} w='80%'>No need to struggle alone anymore. Our Pros are here to directly answer all your questions.</Text>
            </Stack>
        <Image src={img2} alt='img2' w={['95%','80%','70%','85%']}/>
        </Stack>
    </Flex>
  )
}

export default HeroLastSection