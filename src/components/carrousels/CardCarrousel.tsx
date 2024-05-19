import { Center } from "@chakra-ui/react"
import { Card } from "../card/Card"
import { Slide, Slider } from "../commons/slider"

interface card{
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

interface CardsSliderProps{
    cards: []
}
export function CardsSliders({cards}: CardsSliderProps){

    if(cards.length === 1){
        return (
            <Center>
                <Card card={cards[0]} />
            </Center>
        )
    }

    const settings = {
        spaceBetween: 50,//espaço entre os slides
        slidesPerView: cards.length  < 3 ? cards.length:3, //delimita a quantidade de slides por página
        navigation: cards.length  >= 3 && true, //coloca as setinhas da navegação
        draggable: cards.length  >= 3 && true,
        loop: cards.length  >= 3 && true, //permite que navegue em loop nunca acaba voltando pro começo
        pagination: cards.length  >= 3 && {
           clickable: true//permite clicar nas bolinhas de cima que mostram a paginação permite navegar
        },
        
      }

    return (
        <Slider settings={settings} >
            {cards.map( (card) => (
                <Slide key={card.title} >
                    <Card card={card} ></Card>
                </Slide>
            ) )}
        </Slider>
    )
}