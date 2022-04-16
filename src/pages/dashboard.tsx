import Header from "../components/Header";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard(){
    return(
        <Flex direction="column" height="100vh">
            <Header />

                <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto"
                paddingX="6">
                <Sidebar />

                <SimpleGrid flex="1" gap ="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                           //pb="4"
                           >
                        <Text fontSize="lg" mb="4"> Incritos da semana</Text>
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                           //pb="4"
                           >
                        <Text fontSize="lg" mb="4"> Taxa de abertura</Text>
                    </Box>
                    
                </SimpleGrid>

            </Flex>
        </Flex>
    );
} 