import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
    gray:{
        "900": "#181823",
        "800": "#1F2029",
        "700": "#353646",
        "600": "#4B4063",
        "500": "#616438",
        "400": "#79709A",
        "300": "#96498E",
        "200": "#8395ce",
        "100": "#010200",
        "50": "#EEEEEF2",
        }
    },
    fonts:{
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles:{
        global:{
            body:{
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})