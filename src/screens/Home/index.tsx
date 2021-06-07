import React from 'react';
import { TouchableWithoutFeedback, Keyboard,  KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import { Feather } from '@expo/vector-icons';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

import {
    BoxIcon,
    ButtonLink,
    ButtonLinkText,
    ContainerContent,
    ContainerInput,
    ContainerLogo,
    Input,
    Logo,
    SubTitle,
    Title
} from './styles';

export default function Home(){
    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>

            <LinearGradient
                colors={['#1ddbb9', '#132742']}
                style={{flex: 1, justifyContent: 'center'}}
            >
                <StatusBarPage
                    backgroundColor='#1ddbb9'
                    barStyle='light-content'
                />

                <Menu/>


                <KeyboardAvoidingView 
                    behavior={ Platform.OS === 'ios' ? 'position': 'padding'}
                    enabled
                >

                    <ContainerLogo>
                        <Logo
                            source={require('../../assets/logo.png')}
                            resizeMode='contain'
                            />
                    </ContainerLogo>

                    <ContainerContent>

                        <Title>
                            EncurtaLink
                        </Title>
                        <SubTitle>
                            Cole seu link para encurtar
                        </SubTitle>
                    
                        <ContainerInput>
                            <BoxIcon>
                                <Feather 
                                    name='link'
                                    size={22}
                                    color='#fff'
                                    />
                            </BoxIcon>

                            <Input
                                placeholder='Cole seu link aqui...'
                                placeholderTextColor='white'
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='url'
                                />
                        </ContainerInput>

                        <ButtonLink>
                            <ButtonLinkText>
                                Gerar Link
                            </ButtonLinkText>
                        </ButtonLink>
                        
                    </ContainerContent>

                </KeyboardAvoidingView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}