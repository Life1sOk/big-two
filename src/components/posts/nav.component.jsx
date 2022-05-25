import './nav.style.scss';

const Navigation = () => {
    return(
        <div className='nav-container'>
            <img alt='logo' src='https://kleo4you.com/wa-data/public/site/themes/dsvpro/img/mylogo.png?v1644589111?v1.2.41'/>
            <div className='search-box-container'>
                <input type="searchbox" placeholder='Search'></input>
                <div className='contacts'>Number</div>
            </div>
            <div className='wrap-log-in'>
                <span>Sign In</span>
                <span>Basket</span>
            </div>
        </div>
    );
}

export default Navigation;