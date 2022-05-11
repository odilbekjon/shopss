import "./Main.css";
import {NavLink, useParams} from "react-router-dom";
import {useState, useEffect, useRef} from "react"

// img
import Malika from "../../Assets/Malika.png";
import Img from "../../Assets/tel5.jpg"


export default function Shop() {

    const [ products, setProducts ] = useState()
    const [ res, setRes ] = useState()

    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        fetch(`http://odilbek.teshayev.xyz/products?shopId=${id}`)
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err))
    },[products])


    const nameRef = useRef()
    const priceRef = useRef()
    const shopIDRef = useRef()
    const urlRef = useRef()

    const handelSubmit = (e) => {
        e.preventDefault()

        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const shopID = shopIDRef.current.value;
        const url = urlRef.current.value;

        fetch("http://odilbek.teshayev.xyz/newProduct",{
          method:'POST',
          headers:{
              'Content-Type':'application/json',
          },
          body: JSON.stringify({
            name,
            price,
            shopID,
            url
          }),
        })
        .then(res => setRes(res))
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return(
        <>
        <section className="header__section">
            <div className="container header__container">
            <header className="header">
                <NavLink className={'hader__link'} to={'/'}>
                <img className="header__logo" src={Malika} width="130" alt="" />
                </NavLink>
                <ul className="header__list">
                    <li className="header__item"><NavLink className={'navLink'} to={'/'}><a className="header__link" href="#">Home</a></NavLink> </li>
                    <li className="header__item"> <NavLink className={'navLink'}  to={'/product'}><a className="header__link" href="#">Products</a></NavLink> </li>
                </ul>
                <button className="header__btn">Login</button>
            </header>
        </div>
        </section>
        <div className="container">
            <main className="main">
                <h1 className="main__head">New produce advertisement</h1>
                <form className="form form2" action="" onSubmit={handelSubmit}>
                  <h2 className="form__headers">Created new product</h2>
                   <div className="form__box">
                     <input ref={nameRef} className="input" type="text" placeholder="Product name" />
                     <input ref={priceRef} className="input" type="text" placeholder="Product price" />
                     <input ref={shopIDRef} className="input" type="text" placeholder="Product id" />
                     <input ref={urlRef} className="inputs odil" type="text" placeholder="Product img" />
                    </div>
                    <button className="form__btn" type="submit">Submit</button>
                </form>
                <ul className="main__list">
                    {
                        products?.map(i => {
                            return(
                                <li key={i.id} className="main__item">
                                    <img src={Img} width={200} alt="" />
                                    <h4 className="main__title">{i.name}</h4>
                                    <p className="main__text">Price: {i.price}</p>
                                    <span className="main__span">{i.shopID}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
        </div>
        </>
    )
}