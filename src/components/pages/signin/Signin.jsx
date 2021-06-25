import React from 'react'
import { Container,FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SiginElements';

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>ProWeb 10</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlForm='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlForm='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin;
