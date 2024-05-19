import { Flex, Image, VStack, Text, Heading,  } from "@chakra-ui/react";
import { customScrollBar } from "../../styles/styles";

interface VerticalCardProps{
    card:{
        image: {
            url: string,
            alt: string
        }
        title: string,
        content: string,
        publishDate: string
    }
  }

export function VerticalCard({ card }: VerticalCardProps){

    const {image, title, content, publishDate}= card

    return (
        <Flex maxWidth="850px" maxHeight="400px" borderRadius="8px" bgColor="gray.100" >
            {/*objectFit="cover" usado para não deformar a imagem  */}
            
            {/* maxWidth dispositivos pequenos 200px, medios 300px ...  */} 
            <Image 
                maxWidth={["200px", "300px", "400px", "500px"]} 
                maxHeight={["200px", "300px", "400px", "500px"]}  
                objectFit="cover" 
                src={image.url} 
                alt={image.alt} 
                borderLeftRadius="8px"
            />
            <VStack 
                padding="16px" 
                spacing="16px" 
                align="flex-start" 
                maxW="350px" 
                minH="200px" 
                h={["200px", "300px", "400px"]}
            >
                <Text variant="subtitle" >{publishDate}</Text>
                <Heading size="lg" >{title}</Heading>
                <Text 
                    overflowY="auto" 
                    css={customScrollBar}
                    >
                    {content}
                </Text>
            </VStack>
        </Flex>
    )
}