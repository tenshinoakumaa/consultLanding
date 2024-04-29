import successIcon from "../icons/successIcon.svg";
import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Modal from "react-modal";
import { styled } from "styled-components";
import icon1 from "../icons/iconFooter.svg";
import icon2 from "../icons/iconFooter2.svg";
import icon3 from "../icons/iconFooter3.svg";

const MainText = styled.span`
  font-family: "TildaSansRegular";
  font-size: 28px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  color: #f69a54;
`;

const StyledButton = styled.button`
  width: 196px;
  height: 51px;
  border-radius: 50px;
  background: #d98646;
  position: relative;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
  background: #d98646;
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
    background: linear-gradient(90deg, #d98646, #d98646, #d98646, #d98646);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }
`;
import API from "../API";
import vectorRight from "../icons/vector-right.svg";
import X from "../icons/X.svg";
import logo from "../img/black-logo.png";

const Xbutton = styled.button`
  position: absolute;
  right: 1rem;
`;

const ModalMainText = styled.span`
  font-family: "TildaSansRegular";
  font-size: 35px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
  color: #1e2151;
`;

const ModalSecondText = styled.span`
  font-family: "TildaSansRegular";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  color: #0000009c;
`;

const ModalThirdText = styled.span`
  font-family: "TildaSansRegular";
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
  color: #00000057;
`;

const ModalFourthText = styled.span`
  font-family: "TildaSansRegular";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
`;
import burgerIcon from "../icons/burgetIcon.svg";

const StyledInput = styled.input`
  border-bottom: 1px solid #0000003b;
  text-align: center;
`;

type Anchor = "top" | "left" | "bottom" | "right";

export default function AnchorTemporaryDrawer() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    // left: false,
    // bottom: false,
    // right: false,
  });

  React.useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${API}/api/contacts`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        result.map((item) => {
          if (item.key == "phone") {
            setPhone(item.value);
          }
          if (item.key == "email") {
            setEmail(item.value);
          }
          if (item.key == "address") {
            setAddress(item.value);
          }
        });
      })
      .catch((error) => console.error(error));
  }, []);

  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  const openModal2 = () => {
    setModal2IsOpen(true);
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
  };

  const [name, setName] = useState();
  const [phone_number, setPhoneNumber] = useState();

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
      name: name,
      phone_number: phone_number,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${API}/api/request_cold`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result == "Success!") {
          closeModal();
          openModal2();
        } else {
          alert("Error");
        }
      })
      .catch((error) => alert(error));
  };

  const SuccessDiv = styled.div`
    color: #00000057;
  `;

  const StyledDiv3 = styled.div`
    position: absoulte;
    z-index: 100000;
  `;

  const list = (anchor: Anchor) => {
    return (
      <Box
        className="px-16"
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem key={"main"} disablePadding>
            <div className="flex justify-between items-center w-full px-4 py-4">
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <img src={X} alt="" />
              </div>
            </div>
          </ListItem>

          <ListItem key={"Главная"} disablePadding>
            <ListItemButton>
              <ListItemText primary={"Главная"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Услуги"} disablePadding>
            <a href="#Services">
              <ListItemButton>
                <ListItemText primary={"Услуги"} />
              </ListItemButton>
            </a>
          </ListItem>

          <ListItem key={"Контакты"} disablePadding>
            <a href="#Footer">
              <ListItemButton>
                <ListItemText primary={"Контакты"} />
              </ListItemButton>
            </a>
          </ListItem>

          <ListItem key={"Портфолио"} disablePadding>
            <a href="#OurProjects">
              <ListItemButton>
                <ListItemText primary={"Портфолио"} />
              </ListItemButton>
            </a>
          </ListItem>

          <ListItem key={address}>
            <ListItemIcon>
              {" "}
              <img src={icon1} alt="" />
            </ListItemIcon>
            <ListItemText primary={address} />
          </ListItem>

          <ListItem key={phone}>
            <ListItemIcon>
              {" "}
              <img src={icon2} alt="" />
            </ListItemIcon>
            <ListItemText primary={phone} />
          </ListItem>
          <ListItem key={email}>
            <ListItemIcon>
              {" "}
              <img src={icon3} alt="" />
            </ListItemIcon>
            <ListItemText primary={email} />
          </ListItem>

          <ListItem key={"Button"}>
            <StyledButton
              className="flex flex-row items-center justify-center space-x-2 w-64"
              onClick={openModal}
            >
              <span className="text-white text-xl">ЗАКАЗАТЬ</span>
              <img src={vectorRight} alt="" />
            </StyledButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    );
  };

  return (
    <div>
      <React.Fragment key={"burgerIcon"}>
        <Button onClick={toggleDrawer("top", true)}>
          <img src={burgerIcon} />{" "}
        </Button>
        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
      </React.Fragment>
      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        style={{
          content: {
            width: `${window.innerWidth >= 800 ? "50" : "80"}%`,
            height: "80%",
            margin: "auto auto",
            borderRadius: "20px",
            zIndex: 10000,
          },
        }}
      >
        <StyledDiv3 className="text-center text-2xl flex flex-col items-center space-y-8 p-1">
          <Xbutton onClick={closeModal2}>
            <img src={X} alt="" />
          </Xbutton>
          <div className="flex flex-col items-center py-2 space-y-12">
            <img src={successIcon} alt="" />
            <SuccessDiv className="flex flex-col items-center space-y-2">
              <span>Спасибо за вашу заявку!</span>
              <span>Наш менеджер свяжется с вами в ближайшее время.</span>
              <span>Ожидайте звонка или письма.</span>
            </SuccessDiv>
            <span className="underline text-orange-400" onClick={closeModal2}>
              Отправить заявку повторно
            </span>
          </div>
        </StyledDiv3>
      </Modal>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "400px",
            height: "50%",
            margin: "auto auto",
            borderRadius: "20px",
          },
        }}
      >
        <div className="text-center text-2xl flex flex-col items-center space-y-8 p-1">
          <Xbutton onClick={closeModal}>
            <img src={X} alt="" />
          </Xbutton>
          <ModalMainText>Бесплатный звонок</ModalMainText>
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
          <StyledButton className="text-xl" onClick={handleRequestCold}>
            Перезвонить
          </StyledButton>
          <ModalThirdText className="px-4">
            Нажимая кнопку “Перезвонить”, вы соглашаетесь с обработкой
            персональных данных
          </ModalThirdText>
          <ModalFourthText className="text-sm">
            Работает на технологии{" "}
            <span className="text-orange-400">Телефон</span>
          </ModalFourthText>
        </div>
      </Modal>
    </div>
  );
}
