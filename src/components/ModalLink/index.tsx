import React from 'react';
import { Container, LinkArea, LongUrl, ModalContainer, ShortLinkArea, ShortLinkUrl , Title } from './styles';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ModalLink(){
    return(
        <ModalContainer>
            <Container>
                <TouchableOpacity>
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

                <LinkArea>
                    <Title>
                        Link encurtado
                    </Title>

                    <LongUrl>
                        https://www.google.com
                    </LongUrl>

                    <ShortLinkArea>
                        <ShortLinkUrl>

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