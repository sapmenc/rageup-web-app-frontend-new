import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import heroBg from '../../assets/landing-page/hero-bg.png'
import heroImg from '../../assets/landing-page/hero-img.png'
import NavWithGetStartedNew from '../../components/navigation/Navbar/NavWithGetStartedNew'
import {
    RAGE_UP_RED,
    RAGE_UP_RED_HOVER,
} from "../../foundations/colors";
import { useNavigate } from "react-router-dom";
import { MAIN } from "../../routes/routeNames";
import HomeFeatures from '../../components/HomePageNewComponents/HomeFeatures';
import HomeMainFeature from '../../components/HomePageNewComponents/HomeMainFeature';
import IdealArticleshipMatch from '../../components/HomePageNewComponents/IdealArticleshipMatch';
import HeroLastSection from '../../components/HomePageNewComponents/HeroLastSection';
import LandingFooterNew from '../../components/LandingPageComponent/LandingFooterNew';
import HeroVideoSection from '../../components/HomePageNewComponents/HeroVideoSection';

const HomePageNew = () => {
  const navigate = useNavigate();
  return (
    <Stack w='100%'>
      <NavWithGetStartedNew/>
      <Flex w='100%' mb={['150px','160px','150px','150px']} position={'relative'} py={['40px','40px','40px','60px','90px']} mt='-10px' flexDir={['column','column','column','row']}>
        <Image src={heroBg} alt='hero-bg' w='100vw' position='absolute' top='0' zIndex={-10} h={['700px','820px','840px','650px','700px','750px']}/>
        <Stack w={['100%','100%','100%','50%']} justify={'flex-end'} pl={['30px','60px','100px','100px']} pb={['40px','40px','40px','40px','50px']}>
          <Text fontWeight={'bold'} fontSize={['30px','40px','40px','40px','40px','40px']} color={'white'} w={['90%','90%','80%','80%']}>Experience the future of CA Education and Career Development.</Text>
          <Text fontWeight={'medium'} fontSize={'20px'} color={'white'} w='80%'>Turn your <b>CA Articleship</b> dreams into reality now.</Text>
          <Button
              mt='35px'
              w='160px'
              py='10px'
              borderRadius={'15px'}
              display={["none", "none", "none", "block"]}
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
        </Stack>
        <Flex w={['100%','100%','100%','50%']} justify={'center'} align={'center'}>
          <Image src={heroImg} w={['90%','80%','70%','90%']} alt='hero-img'/>
        </Flex>
      </Flex>
      <HomeFeatures/>
      <HomeMainFeature/>
      <IdealArticleshipMatch/>
      <HeroVideoSection/>
      <HeroLastSection/>
      <LandingFooterNew/>
    </Stack>
  )
}

export default HomePageNew
