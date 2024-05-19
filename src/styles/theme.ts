import { extendTheme } from "@chakra-ui/react"

//include custom optionin here, like colors, fonts
const customTheme = {
    components: {
        Text: {
            variants:{
                subtitle:{
                    color: "gray.500",
                    fontWeigth: "semibold",
                    fontSize: "14px"
                }
            }
        }
    }
}

const theme = extendTheme(customTheme)

export default theme
