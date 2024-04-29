import { useState } from 'react';
import expert1 from '../img/expert1.png';

export default function OurExperts() {
    const [selectedExpert, setSelectedExpert] = useState(0);
    const experts = [
        { name: 'Иван Петров', width: selectedExpert === 0 ? '400px' : '250px' },
        { name: 'Петр Иванов', width: selectedExpert === 1 ? '400px' : '250px' },
        { name: 'Георгий Алексеев', width: selectedExpert === 2 ? '400px' : '250px' }
    ];

    const handleExpertClick = (index) => {
        setSelectedExpert(index);
    };

    return (
        <div className="bg-white pb-28">
            <div className="text-center text-6xl text-red-600 italic font-bold py-28" id="experts">
                Наши эксперты
            </div>
            <div className='lg:hidden flex flex-col items-center space-y-8'>
                {experts.map((expert, index) => (
                    <div key={index} onClick={() => handleExpertClick(index)} >
                        <div className='flex flex-col justify-end' style={{
                            background: `url(${expert1})`,
                            height: '624px',
                            width: '273px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: '50px'
                        }}>
                            <div style={{
                                opacity: '0.5',
                                background: '#000',
                                borderRadiusBottom: '50px',
                                width: '273px',
                                height: '100px',
                                borderRadius: '0 0 50px 50px',
                            }} className='text-white text-4xl pt-2 px-8'>
                                {expert.name}
                                <br />
                                Профессия
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='max-w-6xl mx-auto justify-between lg:flex flex-row hidden px-4'>
                {experts.map((expert, index) => (
                    <div key={index} onClick={() => handleExpertClick(index)}>
                        <div className='flex flex-col justify-end' style={{
                            background: `url(${expert1})`,
                            height: '624px',
                            width: expert.width,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: '50px'
                        }}>
                            <div style={{
                                opacity: '0.5',
                                background: '#000',
                                borderRadiusBottom: '50px',
                                width: expert.width,
                                height: '100px',
                                borderRadius: '0 0 50px 50px',
                            }} className='text-white text-4xl pb-4 px-8'>
                                {selectedExpert == index ? (expert.name + " \n Профессия") : ''}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
