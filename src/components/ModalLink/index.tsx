import React from 'react';
import { Container, LinkArea, LongUrl, ModalContainer, ShortLinkArea, ShortLinkUrl , Header, Title, ViewContainer} from './styles';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


interface ModalProps{
    onClose: () => void;
}

export default function ModalLink({onClose}: ModalProps ){
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
                    <TouchableOpacity>
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
                    >
                        <ShortLinkUrl numberOfLines={1}>
                            https:teste.bit.com
                        </ShortLinkUrl>

                        <Feather
                            name='copy'
                            color='#fff'
                            size={25}
                        />
                    </ShortLinkArea>
                
                </LinkArea>
            </Container>
        </ModalContainer>
    );
}