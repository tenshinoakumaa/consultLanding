import { styled } from 'styled-components'

import icon1 from '../icons/reviewIcon2.svg'
import icon2 from '../icons/reviewIcon1.svg'
import { useEffect, useRef, useState } from 'react'

const MainText = styled.span`
font-family: 'TildaSansRegular';
font-size: 40px;
font-weight: 500;
line-height: 48px;
letter-spacing: 0em;
text-align: center;
`
const SecondText = styled.span`
font-family: 'TildaSansRegular';
font-size: 20px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
`
const ThirdText = styled.span`
font-family: 'TildaSansRegular';
font-size: 30px;
font-weight: 500;
line-height: 36px;
letter-spacing: 0em;
text-align: left;
color: #F99950;
`
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


export default function Services() {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    return <>
        <div
            className='px-4'
            style={
                {
                    backgroundColor: '#000000ba',
                    color: '#fff'
                }
            }>

            <div className='text-center py-20 text-7xl max-w-6xl mx-auto' id="services">
                Наши услуги
            </div>

            <Swiper

                slidesPerView={innerWidth >= 1024 ? 4 : 1}
                pagination={{
                    clickable: true,
                }}

                style={{
                    padding: '0rem',
                }}
                modules={[Pagination]}
                className="mySwiper max-w-6xl mx-auto space-x-4"
            >

                <SwiperSlide className='px-16 flex flex-col'>
                    <div className=' flex px-16 flex-col items-center justify-between space-y-4 py-4 text-left bg-white'>
                        <div className='text-center font-bold'>
                            Стратегическое <br />
                            консультирование
                        </div>
                        <ul className='space-y-4 px-'>
                            <li>
                                Разработка стратегических планов развития бизнеса.
                            </li>
                            <li>
                                Помощь в определении целей и приоритетов компании.
                            </li>
                            <li>
                                Анализ конкурентной среды и разработка конкурентных стратегий.
                            </li>
                        </ul>

                        <div className='text-red-600'>
                            50000тг
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-16 flex flex-col'>
                    <div className=' flex px-16 flex-col items-center justify-between space-y-4 py-4 text-left bg-white'>
                        <div className='text-center  font-bold' >
                            Стратегическое <br />
                            консультирование
                        </div>
                        <ul className='space-y-4 px-'>
                            <li>
                                Разработка стратегических планов развития бизнеса.
                            </li>
                            <li>
                                Помощь в определении целей и приоритетов компании.
                            </li>
                            <li>
                                Анализ конкурентной среды и разработка конкурентных стратегий.
                            </li>
                        </ul>

                        <div className='text-red-600'>
                            50000тг
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-16 flex flex-col'>
                    <div className=' flex px-16 flex-col items-center justify-between space-y-4 py-4 text-left bg-white'>
                        <div className='text-center  font-bold'>
                            Стратегическое <br />
                            консультирование
                        </div>
                        <ul className='space-y-4 px-'>
                            <li>
                                Разработка стратегических планов развития бизнеса.
                            </li>
                            <li>
                                Помощь в определении целей и приоритетов компании.
                            </li>
                            <li>
                                Анализ конкурентной среды и разработка конкурентных стратегий.
                            </li>
                        </ul>

                        <div className='text-red-600'>
                            50000тг
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-16 flex flex-col'>
                    <div className=' flex px-16 flex-col items-center justify-between space-y-4 py-4 text-left bg-white'>
                        <div className='text-center  font-bold'>
                            Стратегическое <br />
                            консультирование
                        </div>
                        <ul className='space-y-4 px-'>
                            <li>
                                Разработка стратегических планов развития бизнеса.
                            </li>
                            <li>
                                Помощь в определении целей и приоритетов компании.
                            </li>
                            <li>
                                Анализ конкурентной среды и разработка конкурентных стратегий.
                            </li>
                        </ul>

                        <div className='text-red-600'>
                            50000тг
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-16 flex flex-col'>
                    <div className=' flex px-16 flex-col items-center justify-between space-y-4 py-4 text-left bg-white'>
                        <div className='text-center  font-bold'>
                            Стратегическое <br />
                            консультирование
                        </div>
                        <ul className='space-y-4 px-'>
                            <li>
                                Разработка стратегических планов развития бизнеса.
                            </li>
                            <li>
                                Помощь в определении целей и приоритетов компании.
                            </li>
                            <li>
                                Анализ конкурентной среды и разработка конкурентных стратегий.
                            </li>
                        </ul>

                        <div className='text-red-600'>
                            50000тг
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    </>
}