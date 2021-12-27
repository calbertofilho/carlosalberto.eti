import React from 'react';
import { MdEmail, MdLocationOn, MdPhone, MdHorizontalRule } from "react-icons/md";
import { Section, EmphasisBox, Emphasis, Paragraph, ContentBox, ContactInfoBox, InfoBox, Heading, Wrapper, Icon, Text, InfoTitle, Info, FormBox, Form, Label, Input, TextArea, BtnWrap, Submit, Reset } from './elements';

const ContactSection = () => {
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
          <Heading>Stay In Touch</Heading>
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
            <Label htmlFor='tel'>Nome</Label>
            <Input type='text' name='name' placeholder=' ' autoComplete='false' />
            <Label htmlFor='email'>Email</Label>
            <Input type='email' name='email' placeholder=' ' autoComplete='nofill' />
            <Label htmlFor='tel'>Telefone</Label>
            <Input type='tel' name='tel' placeholder=' ' autoComplete='nofill' maxLength='15' />
            <Label htmlFor='_subject'>Projeto</Label>
            <Input type='text' name='_subject' placeholder=' ' autoComplete='nofill' />
            <Label htmlFor='message'>Mensagem</Label>
            <TextArea name='message' placeholder=' ' autoComplete='nofill'></TextArea>
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
