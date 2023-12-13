import { Flex, Image, Stack, Text } from '@chakra-ui/react'
import img from '../../assets/landing-page/articleship-match-img.png'
// import {
//     RAGE_UP_RED,
//     RAGE_UP_RED_HOVER,
// } from "../../foundations/colors";
// import { useNavigate } from "react-router-dom";
// import { MAIN } from "../../routes/routeNames";

const IdealArticleshipMatch = () => {
    // const navigate = useNavigate();
  return (
    <Flex w='100%' px={['10px','10px','10px','100px']} py='50px' flexDir={['column-reverse','column-reverse','column-reverse','row-reverse']} background="linear-gradient(360deg, #EEE1F4 30%, #FFFFFF)">
    <Stack w={['100%','100%','100%','50%']} justify={'center'} align={'center'}>
        <Text fontWeight={'bold'} fontSize={'24px'} w='90%'>Discover Your Ideal Articleship Match</Text>
        <Text fontSize={'20px'} w='90%'>{"Its your opportunity to find perfect gear for your career's engine. We'll help you join the firm where your skills and ambitions can come together and rightly fit in."}</Text>
        <Flex w='90%' mt='10px'>
      </Flex>
    </Stack>
    <Flex w={['100%','100%','100%','50%']} justify={'center'} align={'center'} mb={['30px','30px','50px','0px']}>
        <Image w={['95%','80%','70%','85%']} src={img} alt="img"/>
    </Flex>
</Flex>
  )
}

export default IdealArticleshipMatch