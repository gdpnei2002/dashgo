import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Form/input";
import { Header}  from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useRouter } from "next/router";
import { useMutation } from 'react-query'
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import Link from "next/link";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail invalido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais')
})

export default function CreateUser() {

    const router = useRouter()

    const createUser = useMutation(async (user: CreateUserFormData) => {
      const response = await api.post('users', {
        user: {
          ...user,
          created_at: new Date(),
        }
      })
  
      return response.data.user;
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      }
    });

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(createUserFormSchema)
      })

    const handleCreteUser: SubmitHandler<CreateUserFormData> = async (values) =>{
       await createUser.mutateAsync(values);

       router.push('/users')
    }
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box 
                    as="form" 
                    flex='1' 
                    borderRadius={8} 
                    bg="gray.800" 
                    p={["6","8"]} 
                    onSubmit={handleSubmit(handleCreteUser)}>
                    <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing={["6","8"]}>
                        <SimpleGrid minChildWidth={240}
                            spacing={["6","8"]}
                            w="100%">

                            <Input  
                                name="name" 
                                label="Nome completo"
                                error={errors.name}
                                {...register} />
                            <Input 
                                name="email" 
                                label="Email" 
                                error={errors.email}
                                {...register}
                                type="email" />

                        </SimpleGrid>

                        <SimpleGrid
                            minChildWidth={240}
                            spacing={["6","8"]}
                            w="100%">

                            <Input 
                                name="password" 
                                label="Senha" 
                                type="password"
                                error={errors.password}
                                {...register} />
                            <Input 
                                name="password_confirmation" 
                                label="Confirmação da senha"
                                type="password"
                                error={errors.password_validation}
                                {...register} />
                        
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify='flex-end'>
                        <HStack spacing={["6","8"]}>
                            <Link href="/users">
                                <Button as="a" colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button 
                                type="submit"
                                isLoading={isSubmitting}
                                colorScheme='pink'>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}