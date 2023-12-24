import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box '>
        <p className='font-medium sm:text-xl text-center'>{text}</p>

        <Link className='neo-brutalism-white neo-btn' to={link}>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Peeyush 👋</span><br />
            A Software Engineer from India
        </h1>
    ),
    2: (
        <InfoBox
            text="I craft immersive digital experiences that captivate users from the first click. With pixel-perfect frontend designs and powerful backend functionalities, I create web applications that leave a lasting impression. Let's build something incredible together. 🚀✨"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="Check out some of my work right here "
            link="/projects"
            btnText="Visit my portfolio"
        />

    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away  "
            link="/contact"
            btnText="Let's Talk"
        />

    )
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo