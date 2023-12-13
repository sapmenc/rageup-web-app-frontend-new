import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import img from '../../assets/landing-page/home-main-feature-img.png'
import {
    RAGE_UP_RED,
    RAGE_UP_RED_HOVER,
  } from "../../foundations/colors";
  import { useNavigate } from "react-router-dom";
  import { MAIN } from "../../routes/routeNames";

const HomeMainFeature = () => {
    const navigate = useNavigate();
  return (
    <Flex w='100%' px={['10px','10px','10px','100px']} pt='150px' pb='50px' flexDir={['column-reverse','column-reverse','column-reverse','row']}>
        <Stack w={['100%','100%','100%','50%']} justify={'center'} align={'center'}>
            <Text fontWeight={'bold'} fontSize={'24px'} w='90%'>Time to get to the heart of it!</Text>
            <Text fontSize={'20px'} w='90%'>Exploring articleship is like fitting puzzle pieces in a vast landscape. CA students often face several challenges during their practical training with no one there to lend a hand!</Text>
            <Flex w='90%' mt='10px'>
            <Button
              w='160px'
              py='10px'
              borderRadius={'15px'}
              backgroundColor={RAGE_UP_RED}
              color={"white"}
              fontWeight={700}
              transitionDuration={"100"}
              _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
              onClick={() => {
              navigate(MAIN);
              }}
          >
              Get Started
          </Button>
          </Flex>
        </Stack>
        <Flex w={['100%','100%','100%','50%']} justify={'center'} align={'center'} mb={['30px','30px','50px','0px']}>
            <Image w={['95%','80%','70%','85%']} src={img} alt="img"/>
        </Flex>
    </Flex>
  )
}

export default HomeMainFeature