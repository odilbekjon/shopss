import "./Header.css";
import {NavLink} from "react-router-dom"
import Shops from "../Shops/Shops";
import Footer from "../Footer/Footer";
import Aside from "../Aside/Aside";


// img
import Malika from "../../Assets/Malika.png";
import Person from "../../Assets/person.jpeg";

export default function Header() {
    return(
        <>
        <section className="header__section">
            <div className="container header__container">
            <header className="header">
                <NavLink className={'header__link'} to={"/"}><img className="header__logo" src={Malika} width="130" alt="" /></NavLink>
                <ul className="header__list">
                    <li className="header__item"><NavLink className={'navLink'} to={'/'}><a className="header__link" href="#">Home</a></NavLink> </li>
                    <li className="header__item"> <NavLink className={'navLink'}  to={'/product'}><a className="header__link" href="#">Products</a></NavLink> </li>
                </ul>
                <button className="header__btn">Login</button>
            </header>
        </div>
        </section>
        <div className="container">
            <div className="hero">
                <div className="hero__box">
                    <div className="hero__left">
                        <h1 className="hero__head">Malika bozori siz hohlagan barcha <span>texnalogiyalar</span> mamlakati</h1>
                        <p className="hero__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sunt rem non labore recusandae provident, iusto omnis magni vero culpa ab doloremque tempore.</p>
                    </div>
                    <div className="hero__right">
                        <img className="hero__right--img" src={Person} width={620} alt="" />
                    </div>
                </div>
                <button className="hero__btn">Can you buy</button>
            </div>
        </div>
         <Shops/>
         <Aside/>
         <Footer/>
        </>
    )
}