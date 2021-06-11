import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard,  KeyboardAvoidingView, Platform, Modal } from 'react-native';
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
import ModalLink from '../../components/ModalLink';

export default function Home(){
    const [link, setLink ] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    function handleSortLink(){
        //('Link gerado: '+ link)
        setModalVisible( (value) => !value);
    }

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
                                value={link}
                                OnChangeText={ (text) => setLink(text)}
                                />
                        </ContainerInput>

                        <ButtonLink 
                            onPress={handleSortLink}
                        >
                            <ButtonLinkText>
                                Gerar Link
                            </ButtonLinkText>
                        </ButtonLink>
                        
                    </ContainerContent>

                </KeyboardAvoidingView>

                <Modal
                    visible={true}
                    transparent
                    animationType='slide'
                    
                >
                    <ModalLink/>
                </Modal>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}