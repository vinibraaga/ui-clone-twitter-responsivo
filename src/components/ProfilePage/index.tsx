import React from 'react';

import Feed from '../Feed'

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton, 
 } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>
       
        <h1>Vinicio Braga</h1>
        <h2>@vinibraaga7</h2>

        <p>
          Developer React  
        </p>

        <ul>
            <li>
              <LocationIcon />
              São Paulo, Brasil
            </li>     
            <li>
              <CakeIcon />
              Nascido(a) em 02 de março de 2000
            </li> 
        </ul>   

        <Followage>
            <span>
                seguindo <strong>100</strong>
            </span>
            <span>
            <strong>100000 </strong> seguidores 
            </span>
        </Followage>

        </ProfileData>

        <Feed />
    </Container>

  );
}

export default ProfilePage;