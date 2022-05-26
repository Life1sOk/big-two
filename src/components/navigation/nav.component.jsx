import { Link } from 'react-router-dom';

import './nav.style.scss';

const Navigation = () => {
    return(
        <div className='nav-container'>
            <Link to='/'>
                <img alt='logo' src='https://kleo4you.com/wa-data/public/site/themes/dsvpro/img/mylogo.png?v1644589111?v1.2.41'/>
            </Link>
            <div className='search-box-container'>
                <input type="searchbox" placeholder='Search'></input>
                <div className='contacts'>Number</div>
            </div>
            <div className='wrap-log-in'>
                <Link to='/auth'>
                    <span>Sign In</span>
                </Link>
                <span>Basket</span>
            </div>
        </div>
    );
}

export default Navigation;