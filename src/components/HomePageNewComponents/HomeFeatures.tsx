import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react"
// import bg from '../../assets/landing-page/feature-bg.png'
import shade from '../../assets/landing-page/feature-bg-shade.png'
import img1 from '../../assets/landing-page/feature-img-1.png'
import img2 from '../../assets/landing-page/feature-img-2.png'
import img3 from '../../assets/landing-page/feature-img-3.png'
import {
  RAGE_UP_RED,
  RAGE_UP_RED_HOVER,
} from "../../foundations/colors";
import { useNavigate } from "react-router-dom";
import { MAIN } from "../../routes/routeNames";


const HomeFeatures = () => {
  const navigate = useNavigate();
  return (
    <Stack w='100%'>
        <Stack w='100%' align={'center'} gap={8} pb='50px'>
          <Text fontWeight={'bold'} textAlign={'center'} fontSize={'25px'}>What's RageUp ?</Text>
          <Text textAlign={'center'} fontSize={'20px'} w={['90%','65%','50%','47%']}>We are a niche platform developed with the assistance of CA firms that allows aspirants to discover perfect Articleship Experience.</Text>
        </Stack>
        <Stack w='100%' position='relative' bg={['#EEE1F4','#EEE1F4','#EEE1F4']} py='50px'>
          {/* <Image src={bg} alt='feature-bg' position='absolute' top='0' zIndex={-10} display={['none','none','none','block']}/> */}
          <Image src={shade} alt='feature-bg-shade' position='absolute' bottom='0' zIndex={1} display={['block','block','block','block']}/>
          <Stack w='100%' px={['60px','100px','150px','200px']} pb='50px'>
            <Text fontWeight={'bold'} fontSize={'24px'} w='100%'>Features</Text>
            <Text fontSize={'20px'} w='100%'>Here is a gist of what we can do for you...</Text>
          </Stack>
          <Flex px='100px' w='100%' justify={'space-evenly'} flexWrap={'wrap'} zIndex={10}>
            <Stack w='30%' minW={'220px'} align={'center'} m='10px'>
              <Image src={img1} w='70%' alt="img-1"/>
              <Text fontSize={'24px'} fontWeight={'bold'} w='80%' textAlign={'center'}>Discover Articleships</Text>
            </Stack>
            <Stack w='30%' minW={'220px'} align={'center'} m='10px'>
              <Image src={img3} w='70%' alt="img-3"/>
              <Text fontSize={'24px'} fontWeight={'bold'} w='80%' textAlign={'center'}>Learn from the best courses</Text>
            </Stack>
            <Stack w='30%' minW={'220px'} align={'center'} m='10px'>
              <Image src={img2} w='70%' alt="img-2"/>
              <Text fontSize={'24px'} fontWeight={'bold'} w='80%' textAlign={'center'}>Seek guidance from mentors</Text>
            </Stack>
          </Flex>
          <Flex w='100%' justify={'center'} >
          <Button
              mt='60px'
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
              Explore RageUp
          </Button>
          </Flex>
        </Stack>
      </Stack>
  )
}

export default HomeFeatures