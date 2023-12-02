import { Card, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const SingleHistory = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <Card backgroundColor={"#FFE4E1"} p={4} gap={5}>
      <Flex flexDir={"column"} gap={1}>
        <Flex justifyContent={"space-between"}>
          <Text color={"#343434"} fontSize={"xs"}>
            Start date
          </Text>
          <Text color={"#343434"} fontSize={"xs"}>
            Nov, 2021
          </Text>
        </Flex>

        <Heading color={"#343434"} size={"xs"}>
          Firm Name
        </Heading>

        <Flex justifyContent={"space-between"}>
          <Text color={"#343434"} fontSize={"xs"}>
            Department
          </Text>
          <Text color={"#343434"} fontSize={"xs"}>
            2 Years
          </Text>
        </Flex>
        <Text color={"#343434"} fontSize={"xs"}>
          Pune, Maharashtra, India
        </Text>
      </Flex>

      <Text color={"#343434"} fontSize={"xs"} noOfLines={isExpanded ? 0 : 3}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odio
        expedita laudantium dicta officia ea voluptas voluptatem, praesentium
        doloremque, sint rem ex voluptates minima! Dicta voluptatibus velit vel
        culpa doloribus temporibus magni rem nesciunt, asperiores corrupti
        cumque modi suscipit sequi obcaecati ipsum ratione totam tempora natus
        aperiam commodi, ad sed molestias. Pariatur necessitatibus ad fugit
        consectetur debitis, sed rerum rem officia? Incidunt debitis beatae
        consequuntur architecto mollitia laboriosam eveniet earum temporibus
        maxime voluptate, esse, est totam nam rem natus reiciendis quibusdam,
        ipsa velit ipsum? Quos nisi consequatur enim aut aliquid! Error
        explicabo maxime dolorem debitis numquam. Facilis expedita soluta
        ducimus repellendus. Culpa provident sapiente tempora ex eum. Voluptate
        eos vel facilis? Eligendi earum eveniet, obcaecati fugit mollitia
        voluptates hic ex! Eos laudantium esse, accusamus quae ad omnis,
        sapiente autem dolorem ipsam excepturi eius dicta deleniti eligendi
        voluptatibus corporis veniam soluta ipsa corrupti consequuntur tempore
        quas? Voluptatum aut hic nobis nisi adipisci numquam accusamus odit odio
        natus dignissimos? Nihil facere libero sapiente! Incidunt voluptatum
        doloremque praesentium reiciendis tenetur eaque cumque, itaque unde at
        odio iure ab eum possimus, ullam suscipit? Maiores modi similique hic
        nulla cumque! Porro culpa, magnam unde accusantium atque quia ad. Libero
        alias accusamus quia vel, unde dignissimos!
      </Text>
      <Text
        color={"#343434"}
        fontSize={"xs"}
        display={"inline"}
        cursor={"pointer"}
        fontWeight={"bold"}
        _hover={{
          textDecoration: "underline",
        }}
        onClick={() => {
          setIsExpanded((prev) => !prev);
        }}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Text>
    </Card>
  );
};

export default SingleHistory;
