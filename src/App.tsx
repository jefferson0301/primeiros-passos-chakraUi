import { Box, Center, VStack } from "@chakra-ui/react"

import { VerticalCard } from "./components/card/VerticalCard"
import { Header } from "./components/commons/header"

import { vertical_cards, cards, cards_carrousel } from "./components-mok.json"
import { Card } from "./components/card/Card"
import  Slider  from "./components/commons/slider/slider"
import { SwiperSlide } from "swiper/react"
import { CardsSliders } from "./components/carrousels/CardCarrousel"




function App() {
  
  const settings = {
    spaceBetween: 50,//espaço entre os slides
    slidesPerView: 3, //delimita a quantidade de slides por página
    navigation: true, //coloca as setinhas da navegação
    pagination:{
       clickable: true//permite clicar nas bolinhas de cima que mostram a paginação permite navegar
    },
    
  }

  

  return (
    
      <div>
        <Header />
        <Center>
          <Box maxW="1280px">
            <VStack gap="64px" marginY="64px" >
            {vertical_cards.map( (vertical_card) => (
              <VerticalCard 
                key={vertical_card.title}
                card={vertical_card}          
              />
            ) )}
            {cards.map(card => (
              <Card key={card.title} card={card} />
            ))}
            </VStack>
            {cards_carrousel && <CardsSliders  cards={cards_carrousel} /> }
          </Box>
          
        </Center>
        
          <Slider settings={settings} >
            <SwiperSlide><h1>Teste 1</h1></SwiperSlide>
            <SwiperSlide><h1>Teste 2</h1></SwiperSlide>
            <SwiperSlide><h1>Teste 3</h1></SwiperSlide>
            <SwiperSlide><h1>Teste 4</h1></SwiperSlide>
          </Slider>

      </div>
    
  )
}

export default App
