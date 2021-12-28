import React from 'react';
import { MdEmail, MdLocationOn, MdPhone, MdHorizontalRule } from "react-icons/md";
import { Section, EmphasisBox, Emphasis, Paragraph, ContentBox, ContactInfoBox, InfoBox, Heading, Wrapper, Icon, Text, InfoTitle, Info, FormBox, Form, Label, Input, InputWrap, EmailArea, TelArea, TextArea, BtnWrap, Submit, Reset, Indicator } from './elements';

const ContactSection = () => {
  const indicator = document.getElementById('indicator');

  const validaEmail = (email) => {
    const pattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/; // eslint-disable-line
    if (pattern.test(email)) {
      indicator.classList.add('valid');
      indicator.classList.remove('invalid');
    } else {
      indicator.classList.add('invalid');
      indicator.classList.remove('valid');
    }
    if (email === '') {
      indicator.classList.remove('valid');
      indicator.classList.remove('invalid');
    }
  };

  return (
    <Section id='contact'>
      <EmphasisBox>
        <Emphasis>Contato</Emphasis>
        <Paragraph>
          <MdHorizontalRule /> Fique a vontade para entrar em contato comigo e solicitar um orçamento para seu projeto. <MdHorizontalRule />
        </Paragraph>
      </EmphasisBox>
      <ContentBox>
        <ContactInfoBox>
          <Heading>Localização</Heading>
          <Wrapper>
            <InfoBox>
              <Icon><MdLocationOn /></Icon>
              <Text>
                <InfoTitle>Endereço</InfoTitle>
                <Info>R Mariana Furtado Leite, 1036<br />Fortaleza, Ceará, Brasil<br />60.811-030</Info>
              </Text>
            </InfoBox>
            <InfoBox>
              <Icon><MdPhone /></Icon>
              <Text>
                <InfoTitle>Telefone</InfoTitle>
                <Info>+55 85 98899-8844</Info>
              </Text>
            </InfoBox>
            <InfoBox>
              <Icon><MdEmail /></Icon>
              <Text>
                <InfoTitle>E-Mail</InfoTitle>
                <Info>carlos@lberto.eti.br</Info>
              </Text>
            </InfoBox>
          </Wrapper>
        </ContactInfoBox>
        <FormBox>
          <Form action='https://formsubmit.co/carlos@lberto.eti.br' method='POST' encType='multipart/form-data' autoComplete='false'>
            <Heading>E-Mail</Heading>
            <Input name='name' type='text' placeholder=' ' autoComplete='false' />
            <Label htmlFor='name'>Nome</Label>
            <InputWrap>
              <EmailArea>
                <Input name='email' type='email' className='email' placeholder=' ' autoComplete='nofill' onChange={e => validaEmail(e.target.value)} />
                <Label htmlFor='email'>Email</Label>
                <Indicator id='indicator' />
              </EmailArea>
              <TelArea>
                <Input name='tel' type='tel' placeholder=' ' autoComplete='nofill' maxLength='15' />
                <Label htmlFor='tel'>Telefone</Label>
              </TelArea>
            </InputWrap>
            <Input name='_subject' type='text' placeholder=' ' autoComplete='nofill' />
            <Label htmlFor='_subject'>Projeto</Label>
            <TextArea name='message' placeholder=' ' autoComplete='nofill'></TextArea>
            <Label htmlFor='message'>Mensagem</Label>
            <BtnWrap>
              <Reset type='reset' value='Limpar' />
              <Submit type='submit' value='Enviar' />
            </BtnWrap>
            <input type='hidden' name='_template' value='basic' />
            <input type='hidden' name='_captcha' value='false' />
            <input type="hidden" name="_next" value="https://www.carlosalberto.eti.br/thanks" />
          </Form>
        </FormBox>
      </ContentBox>
    </Section>
  )
}

export default ContactSection
