import { Flex, Heading, Text } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import { RAGE_UP_RED } from "../../foundations/colors";

const ContactUsPage = () => {
    return (
        <PageLayout>
            <Flex justifyContent={"center"} w={"full"}>
                <Flex w="full" px={20} maxW={"6xl"} flexDir={"column"} py={20} gap={10}>
                    <Heading size={"2xl"} color={RAGE_UP_RED} textAlign={"center"}>
                        Contact Us
                    </Heading>
                    <Flex flexDir={"column"} gap={5}>
                        <Text>
                            Want to get in touch to ask a query? Hit us up at hire@rageup.in or +91 81494 20499.
                            Operating Address: H-301, 24K Stargaze by Kolte-Patil Developers, Paud Road, Opp. Ambrosia Resort, Bavdhan, Pune - 411021
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </PageLayout>
    );
};

export default ContactUsPage;
