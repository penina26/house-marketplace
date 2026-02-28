import { useNavigate, useLocation } from 'react-router-dom'
import OfferIcon from '../assets/svg/localOfferIcon.svg?react'
import ExploreIcon from '../assets/svg/exploreIcon.svg?react'
import PersonOutlineIcon from '../assets/svg/personOutlineIcon.svg?react'

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if (route == location.pathname) {
            return true
        }
    }


    return (
        <footer className='navbar'>
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem">
                        <ExploreIcon
                            fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
                            width='36px' height='36px'
                            onClick={() => navigate('/')} />
                        <p
                            className={
                                pathMatchRoute('/')
                                    ? 'navbarListItemNameActive'
                                    : 'navbarListItemName'
                            }
                        >
                            Explore
                        </p>
                    </li>
                    <li className="navbarListItem">
                        <OfferIcon
                            fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
                            width='36px' height='36px'
                            onClick={() => navigate('/offers')} />
                        <p
                            className={
                                pathMatchRoute('/offers')
                                    ? 'navbarListItemNameActive'
                                    : 'navbarListItemName'
                            }
                        >
                            Offer
                        </p>
                    </li>
                    <li className="navbarListItem">
                        <PersonOutlineIcon
                            fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
                            width='36px' height='36px'
                            onClick={() => navigate('/profile')} />
                        <p
                            className={
                                pathMatchRoute('/profile')
                                    ? 'navbarListItemNameActive'
                                    : 'navbarListItemName'
                            }
                        >
                            Profile
                        </p>
                    </li>
                </ul>
            </nav>

        </footer>
    )
}

export default Navbar
