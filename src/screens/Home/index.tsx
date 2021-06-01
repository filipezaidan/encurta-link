import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'

import { Feather } from '@expo/vector-icons';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

import {
    BoxIcon,
    ButtonLink,
    ButtonLinkText,
    ContainerInput,
    ContainerLogo,
    Input,
    Logo,
    SubTitle,
    Title
} from './styles';

export default function Home(){
    return(
        <LinearGradient
            colors={['#1ddbb9', '#132742']}
            style={{flex: 1, justifyContent: 'center'}}
        >
            <StatusBarPage
                backgroundColor='#1ddbb9'
                barStyle='light-content'
            />

            <Menu/>

            <ContainerLogo>
                <Logo
                    source={require('../../assets/logo.png')}
                    resizeMode='contain'
                />
                <Title>
                    EncurtaLink
                </Title>
                <SubTitle>
                    Cole seu link para encurtar
                </SubTitle>
            </ContainerLogo>
            
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
                />
            </ContainerInput>

            <ButtonLink>
                <ButtonLinkText>
                    Gerar Link
                </ButtonLinkText>
            </ButtonLink>
        </LinearGradient>
    );
}