import logo from '../../assets/logo/BrainFlix-logo.svg';
import userImg from '../../assets/images/Mohan-muruge.jpg'
import './_nav.scss'

const nav = () => {
    return (
        <nav className='navbar'>
            <a href='./'><img src={logo} alt="BrainFlix logo" className='navbar__img'/></a>
            <div className='navbar__search'>
                    <input type="text" placeholder='Search' className='navbar__search-input'></input>
                    <img src={userImg} alt="User profile" className='navbar__search-userImg'/>
            </div>
            <button className='navbar__upload button-text'>UPLOAD</button> 
        </nav>
    );
};

export default nav;