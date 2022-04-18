import { Box, Flex,Text,Avatar } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex
        align='center'>
            <Box mr='4' textAlign='right'>
                <Text>José Neilson</Text>
                <Text 
                color="gray.300" 
                fontSize='small'>joseneilson25@gmail.com</Text>
            </Box>
            <Avatar 
                size='md' name="José Neilson"                     
                src="https://github.com/gdpnei2002.png"/>
        </Flex>
    )
}