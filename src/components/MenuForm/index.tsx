import React from 'react';

import { Container, NavigationForm, Form, DropboxLogo } from './styles';

const MenuForm: React.FC = () => {
  return(
    <Container>
      <NavigationForm>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="action-close">✕</button>
      </NavigationForm>
      <Form>
        <span className='title'>Registre-se</span>
        <span className='subTitle'>Preencha o formulario abaixo</span>

        <input type="text" placeholder='nome'/>
        <input type="text" placeholder='sobrenome'/>
        <input type="email" placeholder='E-mail'/>
        <input type="password" placeholder='Password'/>


        <button>Proseguir</button>

        <span className="terms">
          Esta página está sujeita à política de privacidade e aos termos de serviços
        </span>
      </Form>
    </Container>
  );
}

export default MenuForm;