import {NavLink} from "react-router-dom"
import "./Footer.css";
import Malika from "../../Assets/Malika.png";


export default function Footer() {
    return (
        <section className="footer__section">
        <div className="container">
            <footer className="footer">
                <NavLink className={'footer__link'} to={'/'}>
                <img src={Malika} width={200} alt="" />
                </NavLink>
                <div className="list">
                    <div className="item"><NavLink className={'navLink'} to={'/'}><a className="header__link" href="#">Home</a></NavLink> </div>
                    <div className="item"><NavLink className={'navLink'} to={'/product'}><a className="header__link" href="#">Products</a></NavLink> </div>
                </div>
                <div className="footer__imgs">
                <i class='bx bxl-instagram'></i>
                <i class='bx bxl-facebook-circle'></i>
                <i class='bx bxl-telegram'></i>
                </div>
            </footer>
        </div>
        </section>
    )
}