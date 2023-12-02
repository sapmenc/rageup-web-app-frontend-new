import { Image, Stack, Text } from "@chakra-ui/react"

function CustomStack(props: any) {
    const { heading, description, image, reverse } = props
    return (
        <Stack my={16}
            w='80%'
            mx={'auto'}
            direction={[
                reverse ? 'column-reverse' : 'column',
                reverse ? 'column-reverse' : 'column',
                reverse ? 'column-reverse' : 'column',
                reverse ? 'row-reverse' : 'row',
            ]}
            align='center'
            >
            <Stack
                w={['100%', '100%', '100%', '50%']}
                justify={'flex-start'} align={'flex-start'}>
                <Text
                    textAlign={'left'}
                    fontWeight={'400'}
                    fontSize={'40px'}
                    color={'#000'}
                >
                    {heading}
                </Text>
                <Text textAlign={'left'}
                fontWeight={'400'}
                fontSize={'24px'}
                >
                    {description}
                </Text>
            </Stack>
            <Stack w={['100%', '100%', '100%', '50%']} justify={'center'} align={'center'}>
                <Image src={image}
                    w={['100%', '100%', '100%', '440px']}
                    h={['100%', '100%', '100%', '440px']}
                    objectFit={'contain'}
                />
            </Stack>
        </Stack>
    )
}

export default CustomStack