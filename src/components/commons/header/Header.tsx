import { Flex, Heading, Image, Text} from "@chakra-ui/react";
import { memo } from "react";

export function Header(){
    return (
        <Flex padding="5" align="center" gap="3" >
            <Image src="icone.svg" color="gray.500" alt="icone blog.g" />
            <Flex flexDirection="column" >
                <Heading>blog.g</Heading>{/*Heading para cabeçalho */}
                <Text>Notícias doi mundo dos códigos</Text> {/*Text é para textos*/}
            </Flex>
        </Flex>
    )
}

export default memo(Header)