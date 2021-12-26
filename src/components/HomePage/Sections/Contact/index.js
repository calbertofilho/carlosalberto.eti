import React from 'react'
import { Emphasis, Section, Form, Wrapper, InputArea, Input, Label, TextArea, ButtonArea, Button } from './elements'

const ContactSection = () => {
  return (
    <Section id='contact'>
      <Emphasis>Contato</Emphasis>
      <Form action="https://formsubmit.co/carlos@lberto.eti.br" method="POST" encType='multipart/form-data'>
        <Wrapper>
          <InputArea>
            <Input type='text' name='name' placeholder=' ' autocomplete='nofill' />
            <Label htmlFor='tel'>Nome</Label>
          </InputArea>
          <InputArea>
            <Input type='email' name='email' placeholder=' ' autocomplete='nofill' />
            <Label htmlFor='email'>Email</Label>
          </InputArea>
          <InputArea>
            <Input type='tel' name='tel' placeholder=' ' autocomplete='nofill' />
            <Label htmlFor='tel'>Telefone</Label>
          </InputArea>
          <InputArea>
            <Input type='text' name='_subject' placeholder=' ' autocomplete='nofill' />
            <Label htmlFor='_subject'>Projeto</Label>
          </InputArea>
          <InputArea>
            <TextArea name='message' placeholder=' ' autocomplete='nofill'></TextArea>
            <Label htmlFor='message'>Mensagem</Label>
          </InputArea>
          <ButtonArea>
            <Button type='submit' value='Enviar' />
          </ButtonArea>
          <input type='hidden' name='_template' value='basic' />
          <input type='hidden' name='_captcha' value='false' />
          <input type="hidden" name="_next" value="https://www.carlosalberto.eti.br/thanks" />
        </Wrapper>
      </Form>
    </Section>
  )
}

export default ContactSection
