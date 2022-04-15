import { Flex, Text, Input, Icon } from "@chakra-ui/react";
import { RiSearchEyeLine } from 'react-icons/ri'

export default function Header(){
    return(
            <Flex as="header" width="100%" maxWidth={1480} height="20"
            marginX="auto" marginTop="4" paddingX="6" align="center">

                <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight"
                width="64">
                    Dashgo
                    <Text as="span" ml="1" color="pink.500">.</Text>
                </Text>

                <Flex as="label" flex="1" py="4" paddingX="8"
                    ml="6" maxWidth={400} alignSelf="center" color="gray.200"
                    position="relative" bg="gray.800" borderRadius="full">

                <Input color="gray.50" variant="unstyled"
                placeholder="Buscar na plataforma"
                paddingX="4"
                marginX="4"
                _placeholder={{color:'gray.400'}}
                />
                
                  <Icon as={RiSearchEyeLine} fontSize="20"/>

                </Flex>
            </Flex>
 );
} 