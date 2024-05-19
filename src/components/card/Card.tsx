import { Flex, Heading, VStack, Text, Image } from "@chakra-ui/react";
import { customScrollBar } from "../../styles/styles";

interface CardProps{
    card:{
        image?: {// ? em frente ao atributo serve para que a imagem não seja obrigatória
            url: string,
            alt: string
        }
        title: string,
        content: string,
        publishDate?: string
    }
}

export function Card({card}: CardProps){

    const {title, content, image, publishDate} = card

    return (
        <Flex 
            direction="column" 
            maxW="450px" 
            maxH="500px" 
            borderRadius="8px"  
            bgColor="gray.100"
        >
            {image &&  
            <Image 
                w="100%"
                h="100%"
                maxW={"450px"} 
                maxH={"220px"}
                objectFit="cover"
                borderTopRadius="8px" 
                src={image.url} 
                alt={image.alt} 
            /> }
            <VStack
                p="16px"
                spacing="16px"
                maxW="450px"
                minW="200px"
                h="100%"
                w="100%"
                overflow="auto"                
            >   
                {publishDate && <Text variant="subtitle" >{publishDate}</Text>} 
                <Heading size="lg" >{title}</Heading>
                <Text overflowY="auto" css={customScrollBar} >{content}</Text>
            </VStack>
        </Flex>
    )
}