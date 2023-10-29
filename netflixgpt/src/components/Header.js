import React from 'react'
import NetflixLogo from '../assets/Netflix_Logo_PMS.png'

const Header = () => {
    return (
        <div>
            <div className='w-full absolute px-8 py-2 bg-gradient-to-b from-black to-transparent z-10'>
                <img className='w-56' src={NetflixLogo} alt='netflix-logo ' />
            </div>
        </div>

    )
}

export default Header