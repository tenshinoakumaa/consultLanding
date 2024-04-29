import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import TheBurger from '../components/TheBurger.tsx'

const Li = styled.li`
  color: #d7d7d7;
  font-family: 'TildaSansRegular';
`;

const DropdownNav = styled.div`
  margin-bottom: ${({ isOpen }) => (isOpen ? '200px' : '50px')};
  transition: margin-bottom 0.5s ease;
`;

const DropdownUl = styled.ul`
  position: absolute;
  right: 40%;
  top: ${({ isOpen }) => (isOpen ? '100px' : '-500px')};
  transition: top 0.5s ease;
`;

export default function TheNav() {
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      {width >= 900 ? (
        <div className="flex flex-row justify-between items-center max-w-6xl mx-auto mb-28 pt-4">
          <div className="text-white">
            Logo
          </div>
          <ul className="mx-auto flex flex-row justify-between items-center text-xl max-w-6xl text-white space-x-12">
            <Li className="cursor-pointer hover:text-white">О нас</Li>
            <Li className="cursor-pointer hover:text-white"><a href="#experts">О мастере</a></Li>
            <Li className="cursor-pointer hover:text-white"><a href="#services">Услуги</a></Li>
            <Li className="cursor-pointer hover:text-white"><a href="#cases">Кейсы</a></Li>
            <Li className="cursor-pointer hover:text-white"><a href="#footer">Контакты</a></Li>

          </ul>
          <div className="p-2 rounded-xl text-white" style={{ background: '#730F0F' }}>
            Записаться
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto relative">
          <DropdownNav className="flex flex-row justify-between max-w-6xl mx-auto w-full sm:w-9/12 items-center">
            <img
              src={logo}
              alt=""
              className="cursor-pointer"
            />
            <TheBurger />
          </DropdownNav>
        </div>
      )
      }
    </>
  );
}
