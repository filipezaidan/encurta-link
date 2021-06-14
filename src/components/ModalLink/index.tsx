import React from 'react';
import { TouchableOpacity, Share} from 'react-native';
import {
    Container,
    LinkArea,
    LongUrl,
    ModalContainer,
    ShortLinkArea,
    ShortLinkUrl,
    Header,
    Title,
    ViewContainer
} from './styles';
import { Feather } from '@expo/vector-icons';
import ClipBoard from 'expo-clipboard';

interface ModalProps{
    onClose: () => void;
}

export default function ModalLink({onClose}: ModalProps ){

    function copyLink(){
        ClipBoard.setString('www.teste.com.br');
        alert('Link copiado com sucesso! :D')
    }

    async function handleShare(){
        try{

            const result = await Share.share({
                message: `Link: www.teste.com.br`
            })

            if(result.action === Share.sharedAction){
               if(result.activityType){
                    console.log('ActivityType')     
                }else{
                    console.log('Compartilhou link conm sucesso!')
                }
            }else if(result.action === Share.dismissedAction){
                console.log('Modal fechado')
                
            }

        }catch(error){
            console.log(error.menssage)
        }
    }

    return(
        <ModalContainer>
            <ViewContainer onPress={onClose}/>
            <Container>

                <Header>

                    <TouchableOpacity
                        onPress={onClose}
                    >
                        <Feather
                        name='x'
                        color='#212743'
                        size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleShare}
                    >
                        <Feather
                        name='share'
                        color='#212743'
                        size={30}
                        />
                    </TouchableOpacity>

                </Header>
                <LinkArea>
                    <Title>
                        Link encurtado
                    </Title>

                    <LongUrl>
                        https://www.google.com 
                    </LongUrl>

                    <ShortLinkArea
                        activeOpacity={1}
                        onPress={copyLink}
                    >
                        <ShortLinkUrl numberOfLines={1}>
                            https:teste.bit.com
                        </ShortLinkUrl>
                        <TouchableOpacity
                            onPress={copyLink}
                        >
                            <Feather
                                name='copy'
                                color='#fff'
                                size={25}
                            />
                        </TouchableOpacity>
                    </ShortLinkArea>
                
                </LinkArea>
            </Container>
        </ModalContainer>
    );
}