import footer1 from '../img/footer1.png'
import footer2 from '../img/footer2.png'
import footer3 from '../img/footer3.png'
import footer4 from '../img/footer4.png'
import footer5 from '../img/footer5.png'
import smfooter2 from '../img/smfooter2.png'
import smfooter3 from '../img/smfooter3.png'
import smfooter4 from '../img/smfooter4.png'
import smfooter5 from '../img/smfooter5.png'
import smfooter1 from '../img/smfooter1.png'

export default function OurProjects() {
    return <>
        <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.73)',
            color: '#fff'
        }}
            className="py-28"
        >
            <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between' id="cases">
                <div className='flex justify-center'>
                    <img src={footer1} alt="" className='p-4 w-5/12 lg:w-full hidden lg:block' />
                    <img src={smfooter1} alt="" className=' lg:hidden' />
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <div className='flex justify-center'>
                        <img src={footer2} alt="" className='p-4 hidden lg:block' />
                        <img src={smfooter2} alt="" className='p-4 lg:hidden' />
                    </div>
                    <img src={footer3} alt="" className='p-4 hidden lg:block' />
                    <img src={smfooter3} alt="" className='p-4 lg:hidden' />
                    <img src={footer4} alt="" className='p-4 hidden lg:block' />
                    <img src={smfooter4} alt="" className='p-4 lg:hidden' />
                    <img src={footer5} alt="" className='p-4 hidden lg:block' />
                    <img src={smfooter5} alt="" className='p-4 lg:hidden' />
                </div>
            </div>
        </div>
    </>
}