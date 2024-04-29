import { styled } from "styled-components"

const Container = styled.div`
background: #000000BA;

`
const MainText = styled.span`
font-family: 'TildaSansRegular';
font-size: 28px;
font-weight: 500;
line-height: 34px;
letter-spacing: 0em;
text-align: left;
color: #FFF;
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
    font-family: 'TildaSansRegular';
    background: #D98646;
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
    background: linear-gradient(90deg, #D98646,#D98646, #D98646,#D98646);
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
import dotIcon from '../icons/dot.svg';
import line from '../icons/line.svg';
import icon1 from '../icons/iconFooter.svg'
import icon2 from '../icons/iconFooter2.svg'
import icon3 from '../icons/iconFooter3.svg'
import API from '../API'


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

import Modal from 'react-modal';

const ModalContent = styled.div`
  max-height: 600px;
  overflow-y: auto;
  padding: 1rem; 
`;

import { useEffect, useState } from "react";
export default function TheFooter() {
    const [width, setWidth] = useState(window.innerWidth);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return <>

        <Container className="py-14" id="footer">
            {width >= 780 ?
                <div className="flex justify-between max-w-6xl mx-auto mb-28 px-8">
                    <div className="flex flex-col space-y-4 redTopBordered pt-4">
                        <MainText>Меню сайта</MainText>
                        <div className="text-white flex flex-row items-center space-x-4 justify-start">
                            <img src={dotIcon} alt="" />
                            <a href="#Main"><span>Главная</span></a>
                        </div>
                        <div className="text-white flex flex-row items-center space-x-4 justify-start">
                            <img src={dotIcon} alt="" />
                            <a href="#Services"><span>Услуги</span></a>
                        </div>
                        <div className="text-white flex flex-row items-center space-x-4 justify-start">
                            <img src={dotIcon} alt="" />
                            <a href="#OurProjects"><span>Портфолио</span></a>
                        </div>
                        <div className="text-white flex flex-row items-center space-x-4 justify-start">
                            <img src={dotIcon} alt="" />
                            <a href="#Footer"><span>Контакты</span></a>
                        </div>
                    </div>
                    <img src={line} alt="" />
                    <div className="flex flex-col space-y-4 redTopBordered pt-4 text-white">
                        <MainText>Контакты</MainText>
                        <div>
                            +77021598658
                        </div>
                    </div>

                    <img src={line} alt="" />

                    <div className="flex flex-col space-y-4 redTopBordered pt-4 text-white">
                        <MainText>Подпишись</MainText>
                        <div>
                            Instagram/Telegram <br />Facebook/Twitter
                        </div>
                    </div>
                </div>
                :
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-left text-2xl ">
                    <div className="flex flex-col space-y-12 max-w-6xl space-y-20 items-start justify-center redTopBordered pt-4">
                        <div className="flex flex-col space-y-4 ">
                            <MainText>Меню сайта</MainText>
                            <div className="text-white flex flex-row items-center space-x-4 justify-start">
                                <img src={dotIcon} alt="" />
                                <a href="#Main"><span>Главная</span></a>
                            </div>
                            <div className="text-white flex flex-row items-center space-x-4 justify-start">
                                <img src={dotIcon} alt="" />
                                <a href="#Services"><span>Услуги</span></a>
                            </div>
                            <div className="text-white flex flex-row items-center space-x-4 justify-start">
                                <img src={dotIcon} alt="" />
                                <a href="#OurProjects"><span>Портфолио</span></a>
                            </div>
                            <div className="text-white flex flex-row items-center space-x-4 justify-start">
                                <img src={dotIcon} alt="" />
                                <a href="#Footer"><span>Контакты</span></a>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4 text-white redTopBordered pt-4">
                            <MainText>Контакты</MainText>
                            <div>
                                +77021598658
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4 text-white redTopBordered pt-4">
                            <MainText>Подпишись</MainText>
                            <div>
                                Instagram/Telegram <br />Facebook/Twitter
                            </div>
                        </div>
                    </div>
                </div>

            }
            <div className="text-center text-white pt-28 lg:pt-0" onClick={openModal}
                style={{ cursor: "pointer" }}>© 2024 . Политика конфиденциальности</div>

        </Container>


        <Modal style={{

        }} isOpen={modalIsOpen} onRequestClose={closeModal} className="" >
            <ModalContent>
                <div className="p-4 text-xl">
                    Конфиденциальность клиентов - наш приоритет. Наша политика конфиденциальности разработана для защиты вашей личной информации. На нашем лендинге мы не собираем никаких персональных данных без вашего согласия. Мы ценим вашу конфиденциальность и стремимся обеспечить безопасную среду для посещения нашего сайта. Ниже приведены основные принципы нашей политики конфиденциальности:

                    <br />1. Сбор информации: Мы не собираем никаких персональных данных о посетителях нашего лендинга без их явного согласия.

                    <br />2. Использование информации: Любая предоставленная вами информация используется исключительно для ответа на ваши запросы и обратной связи. Мы не раскрываем, продаем или передаем вашу личную информацию третьим лицам.

                    <br />3. Контактные данные: На нашем лендинге вы можете найти контактную информацию для связи с нами. Мы гарантируем безопасность и конфиденциальность любой информации, переданной через эти каналы связи.

                    <br />4. Безопасность: Мы принимаем меры безопасности для защиты вашей личной информации от несанкционированного доступа или использования.

                    <br />5. Изменения в политике конфиденциальности: Мы оставляем за собой право вносить изменения в нашу политику конфиденциальности. Любые изменения будут опубликованы на этой странице.

                    <br />Если у вас возникли вопросы или предложения относительно нашей политики конфиденциальности, пожалуйста, свяжитесь с нами, используя контактную информацию, указанную на нашем лендинге.

                </div>
            </ModalContent>
            <div className="text-center">
                <button onClick={closeModal}>Закрыть</button>
            </div>
        </Modal>
    </>
}
