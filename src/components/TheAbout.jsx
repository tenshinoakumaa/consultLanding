import { styled } from "styled-components"

import aboutImg from '../img/AboutImg.png'
import icon5 from '../icons/5icon.svg'
import footer1 from '../img/footer1.png'
import footer2 from '../img/footer2.png'
import footer3 from '../img/footer3.png'
import footer4 from '../img/footer4.png'
import footer5 from '../img/footer5.png'
import aboutFon from '../img/aboutFon.png'

const Container = styled.div`
background: url(${aboutFon});
`
const FirstSpan = styled.span`
font-family: 'TildaSansRegular';
font-size: 40px;
font-style: italic;
font-weight: 800;
line-height: 25px;
letter-spacing: 0em;
color: #1E2151;
`

const SecondSpan = styled.span`
font-family: 'TildaSansRegular';
font-size: 20px;
font-weight: 500;
line-height: 25px;
letter-spacing: 0em;
color: #1E2151;
`

const ThirdSpan = styled.span`
font-family: 'TildaSansRegular';
font-size: 20px;
font-style: italic;
font-weight: 200;
line-height: 25px;
letter-spacing: 0em;`

const StyledButton = styled.button`
background: #1E2151;
`

const StyledImgDiv = styled.div`
  position: relative;
`

const StyledImg = styled.img`
  position: absolute;
  left: 0;
  top: -30px;
`

export default function TheAbout() {
    return <>
        <Container className="py-28">
            <div className="text-white italic text-6xl text-center max-w-6xl mx-auto">
                "Индивидуальный подход к каждому клиенту."
            </div>
        </Container>
    </>
}