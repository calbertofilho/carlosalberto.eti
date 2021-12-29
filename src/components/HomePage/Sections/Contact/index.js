import React from 'react';
import { MdEmail, MdLocationOn, MdPhone, MdHorizontalRule } from "react-icons/md";
import { Section, EmphasisBox, Emphasis, EmphasisParagraph, ContentBox, ContactInfoBox, InfoBox, Heading, Icon, Text, InfoTitle, Info, FormBox, Form, Label, Input, InputWrap, EmailArea, TelArea, TextArea, BtnWrap, Submit, Reset, Indicator } from './elements';


const ContactSection = () => {
  const [name, setName] = React.useState('');
  let indicator;
  const [tel, setTel] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  let sendButton;

  const mascaraTel = (phone) => {
    phone = phone.replace(/\D/g, '');
    phone = phone.replace(/^(\d{2})(\d)/g,'($1) $2');
    phone = phone.replace(/(\d)(\d{4})$/,'$1-$2');
    setTel(phone);
  };

  const removeValores = () => {
    setName('');
    indicator = document.getElementById('indicator');
    indicator.classList.remove('valid');
    indicator.classList.remove('invalid');
    setTel('');
    setSubject('');
    setMessage('');
    validaFormulario();
  };

  const validaEmail = (email) => {
    indicator = document.getElementById('indicator');
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

  const validaFormulario = () => {
    indicator = document.getElementById('indicator');
    sendButton = document.getElementById('send');

    if ((name.length !== 0) && indicator.classList.contains('valid') && (tel.length === 15) && (subject.length !== 0) && (message.length !== 0)) {
      sendButton.disabled = false;
      sendButton.classList.remove('disabled');
    } else {
      sendButton.disabled = true;
      if (!sendButton.classList.contains('disabled')) {
        sendButton.classList.add('disabled');
      }
    }

  };

  return (
    <Section id='contact'>
      <EmphasisBox>
        <Emphasis>Contato</Emphasis>
        <EmphasisParagraph>
          <MdHorizontalRule /> Fique a vontade para entrar em contato comigo e solicitar um orçamento para seu projeto. <MdHorizontalRule />
        </EmphasisParagraph>
      </EmphasisBox>
      <ContentBox>
        <ContactInfoBox>
          <Heading>Localização</Heading>
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
              <Info>+55 (85) 98899-8844</Info>
            </Text>
          </InfoBox>
          <InfoBox>
            <Icon><MdEmail /></Icon>
            <Text>
              <InfoTitle>E-Mail</InfoTitle>
              <Info>carlos@lberto.eti.br</Info>
            </Text>
          </InfoBox>
        </ContactInfoBox>
        <FormBox>
          <Form action='https://formsubmit.co/carlos@lberto.eti.br' method='POST' encType='multipart/form-data' autoComplete='false'>
            <Heading>E-Mail</Heading>
            <Input name='name' type='text' placeholder=' ' autoComplete='false' value={name} onChange={e => setName(e.target.value)} onKeyUp={validaFormulario} />
            <Label htmlFor='name'>Nome</Label>
            <InputWrap>
              <EmailArea>
                <Input name='email' type='email' className='email' placeholder=' ' autoComplete='nofill' onChange={e => validaEmail(e.target.value)} onKeyUp={validaFormulario} />
                <Label htmlFor='email'>Email</Label>
                <Indicator id='indicator' />
              </EmailArea>
              <TelArea>
                <Input name='tel' type='tel' placeholder=' ' autoComplete='nofill' maxLength='15' value={tel} onChange={e => mascaraTel(e.target.value)} onKeyUp={validaFormulario} />
                <Label htmlFor='tel'>Telefone</Label>
              </TelArea>
            </InputWrap>
            <Input name='_subject' type='text' placeholder=' ' autoComplete='nofill' value={subject} onChange={e => setSubject(e.target.value)} onKeyUp={validaFormulario} />
            <Label htmlFor='_subject'>Projeto</Label>
            <TextArea name='message' placeholder=' ' autoComplete='nofill' value={message} onChange={e => setMessage(e.target.value)} onKeyUp={validaFormulario}></TextArea>
            <Label htmlFor='message'>Mensagem</Label>
            <BtnWrap>
              <Reset type='reset' value='Limpar' onClick={removeValores} />
              <Submit type='submit' value='Enviar' id='send' className='disabled' disabled />
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
