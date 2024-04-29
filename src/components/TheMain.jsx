
import successIcon from '../icons/successIcon.svg'

import { styled } from "styled-components";

import Modal from 'react-modal';

import vectorRight from "../icons/vector-right.svg";
import mainPageImg from '../img/main-page-img.svg';
import phoneIcon from '../icons/phoneIcon.svg'
import mainFon from '../img/mainFon.png'

import TheNav from "./TheNav";
import { useState } from "react";

const Container = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${mainFon});
`;

const DescriptionText = styled.span`
  color: #C5AEAE;
`

const StyledButton = styled.button`
   width: 196px;
    height: 51px;
    border-radius: 50px;
    background: #D98646;
    position: relative;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-family: sans-serif;
    background: #730F0F;
    background-size: 400%;
    z-index: 0;

   
  &:hover {
    animation: animate 8s linear infinite;
  }
   
  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
   
  &:before {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #730F0F,#730F0F, #730F0F,#730F0F);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: .5s;
  }
   
  &:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }
`
const StyledImgDiv = styled.div`
  position: relative;
`
import API from '../API'


const StyledMainImg = styled.img`
${window.innerWidth < 1014 ?
    `
    object-fit: cover;
    height: 100%;
    max-height: 300px;
    border-radius: 40px;
  `
    :
    ''
  }`

const StyledImg = styled.img`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 80px;
  z-index: 10000;
`

const SpanAfterDiv = styled.span`
font-family: 'TildaSansRegular';
font-size: 25px;
font-style: italic;
font-weight: 600;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
`

const StyledInput = styled.input`
border-bottom: 1px solid #0000003B;
text-align: center;
`
import X from '../icons/X.svg';
const Xbutton = styled.button`
  position: absolute;
  right: 1rem;
`
const ModalMainText = styled.span`
font-family: 'TildaSansRegular';
font-size: 35px;
font-weight: 500;
line-height: 42px;
letter-spacing: 0em;
text-align: center;
color: #1E2151;
`
const ModalSecondText = styled.span`
font-family: 'TildaSansRegular';
font-size: 14px;
font-weight: 500;
line-height: 17px;
letter-spacing: 0em;
color: #0000009C;
`
const ModalThirdText = styled.span`
font-family: 'TildaSansRegular';
font-size: 10px;
font-weight: 500;
line-height: 12px;
letter-spacing: 0em;
text-align: center;
color: #00000057;
`

const ModalFourthText = styled.span`
font-family: 'TildaSansRegular';
font-size: 14px;
font-weight: 500;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
`


export default function TheMain() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState();
  const [phone_number, setPhoneNumber] = useState();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };


  const handleRequestCold = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": name,
      "phone_number": phone_number
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${API}/api/request_cold`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result == 'Success!') {
          openModal2();
        } else {
          alert("Error")
        }
      })
      .catch((error) => alert(error));

  }


  const SuccessDiv = styled.div`
color: #00000057;
`

  const StyledDiv3 = styled.div`
  position: absoulte;
  z-index: 100000;
`

  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  const openModal2 = () => {
    setModal2IsOpen(true);
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
  };

  return (
    <>
      <Container className="p-4 pb-28" id="Main">
        <TheNav />
        <div className="py-32 max-w-6xl mx-auto text-center flex flex-col items-center w-full sm:w-9/12 lg:w-1/2 space-y-8 lg:space-y-10">
          {/* <span className="text-white text-4xl font-bold italic">Привлечём новых клиентов в <br />Ваш бизнес</span> */}
          {/* <span className="text-white text-5xl font-bold italic">Ваш бизнес</span> */}
          <DescriptionText className="text-2xl">
            Мы - "Consultancy Experts", команда опытных консультантов, специализирующихся на предоставлении высококачественных консультационных услуг в сфере
          </DescriptionText>
          <StyledButton className="flex flex-row items-center justify-center space-x-2 w-64" onClick={openModal}>
            <span className="text-white text-xl">Записаться</span>
          </StyledButton>
        </div>
      </Container>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
        content: {
          width: '400px',
          height: '80%',
          margin: 'auto auto',
          borderRadius: '20px',
        },

      }}>
        <div className="text-center text-2xl flex flex-col items-center space-y-8 p-1">
          <Xbutton onClick={closeModal}><img src={X} alt="" /></Xbutton>
          <ModalMainText >Бесплатный звонок</ModalMainText>
          <ModalSecondText className="px-6">
            Наш специалист свяжется с вами в течение одной минуты
          </ModalSecondText>
          <StyledInput
            placeholder="Имя"
            value={name}
            onChange={handleNameChange}
          />
          <StyledInput
            placeholder="+7 (000) 000 00 00"
            value={phone_number}
            onChange={handlePhoneNumberChange}
          />
          <StyledButton className="text-xl" onClick={handleRequestCold}>Перезвонить</StyledButton>
          <ModalThirdText className="px-4">Нажимая кнопку “Перезвонить”, вы соглашаетесь с обработкой персональных данных</ModalThirdText>
          <ModalFourthText className="text-sm">Работает на технологии <span className="text-orange-400">Телефон</span></ModalFourthText>
        </div>
      </Modal>

      <Modal isOpen={modal2IsOpen} onRequestClose={closeModal2} style={{
        content: {
          width: `${window.innerWidth >= 800 ? '50' : '80'}%`,
          height: '80%',
          margin: 'auto auto',
          borderRadius: '20px',
          zIndex: 10000,
        },
      }}>
        <StyledDiv3 className="text-center text-2xl flex flex-col items-center space-y-8 p-1">
          <Xbutton onClick={closeModal2}><img src={X} alt="" /></Xbutton>
          <div className="flex flex-col items-center py-2 space-y-12">
            <img src={successIcon} alt="" />
            <SuccessDiv className="flex flex-col items-center space-y-2">
              <span>
                Спасибо за вашу заявку!
              </span>
              <span>
                Наш менеджер свяжется с вами в ближайшее время.
              </span>
              <span>
                Ожидайте звонка или письма.
              </span>
            </SuccessDiv>
            <span className="underline text-orange-400" onClick={closeModal2}>
              Отправить заявку повторно
            </span>
          </div>
        </StyledDiv3>
      </Modal>
    </>
  );
}
