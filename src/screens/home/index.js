import React from 'react';
import { TouchableOpacity } from 'react-native';
import {  Wrapper, Container, Header, BalanceContainer, Balance } from './styles';
import Banner from '../../components/banner/index';
import Topo from '../../components/topo/index';

import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
 
import img from '../../images/logo.png'

export default function Home() {
    return (
        <Wrapper>           
          <Container>
               <Header>
                <TouchableOpacity>
                    <Ionicons name="md-person-circle-sharp" size={30} color="#c3b087" />
                </TouchableOpacity> 
                <BalanceContainer>
                    <Balance source={img}/>
                </BalanceContainer>
                <TouchableOpacity>
                    <MaterialIcons name="logout" size={30} color="#c3b087" />
                </TouchableOpacity> 
                </Header>
                <Topo />
                <Banner />
                <Banner />
            </Container>
        </Wrapper>     
    )
}