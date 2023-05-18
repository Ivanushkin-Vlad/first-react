import './Header_style/Header.css';
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return (
        <div className='header-container' data-aos="fade-down"
             data-aos-duration="1000" >
            <header>
                <div className="image-logo">
                    <img src={props.dB.image} alt="logo" />
                </div>
                <div className='nav-link-search'>
                    {
                        props.dB.links.map((item) => (<NavLink key={item.id} to={`${item.path}${item.name}`}>{item.name}</NavLink>))
                    }
                </div>
                <div className='btn'>
                    <button>{props.dB.btn}</button>
                </div>
            </header>
        </div>
    )

}
export default Header;