import "./Shops.css";
import {useState, useEffect, useRef} from 'react';
import { NavLink } from "react-router-dom";

function Shops() {

    const [shop, setShop] = useState([])
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [ res, setRes ] = useState()
    const [foundShops, setFoundShops] = useState({})

   
    useEffect(() => {
        fetch("http://odilbek.teshayev.xyz/shops")
        .then(res => res.json())
        .then(data => setShop(data))
        .catch(err => console.log(err))
    },[shop]);

    const nameRef = useRef()
    const numberRef = useRef()
    const categoryRef = useRef()

    // for edit

    const editName = useRef()
    const editNumber = useRef()
    const editCategory = useRef()

    const handelSubmit = (e) => {
        e.preventDefault()

        const name = nameRef.current.value;
        const number = numberRef.current.value;
        const category = categoryRef.current.value;

        fetch("http://odilbek.teshayev.xyz/shops",{
          method:'POST',
          headers:{
              'Content-Type':'application/json',
          },
          body: JSON.stringify({
            name,
            number,
            category
          }),
        })
        .then(res => setRes(res))
        .then(data => console.log(data))
        .catch(err => console.log(err))
        nameRef.current.value = null
        numberRef.current.value = null
        categoryRef.current.value = null
    }

    const editModela = (e) => {
        setModal(!modal)

        const foundId = e.currentTarget.dataset.setId
        const findShops = shop.find(e => e.id == foundId )
        setFoundShops(findShops);
        
    }

    // for edit

    const editModal = (e) => {
        e.preventDefault()
        const { editName, editNumber, editCategory} = e.currentTarget.elements

        if (!editName.value) {
            editName.value = foundShops.name
        }
        if (!editNumber.value) {
            editNumber.value = foundShops.number
            console.log(foundShops.number);
        }
        if (!editCategory.value) {
            editCategory.value = foundShops.category
        }

    

        fetch("http://odilbek.teshayev.xyz/shops", {
          method:'PUT',
          headers:{
              'Content-Type':'application/json',
          },
          body: JSON.stringify({
            id:foundShops.id,
            name:editName.value,
            number:editNumber.value,
            category:editCategory.value
          }),
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        editName.value = null
        editNumber.value = null
        editCategory.value = null
    }

    const deleteShops = (id) => {
        fetch("http://odilbek.teshayev.xyz/shops", {
          method:"DELETE",
          headers:{
              'Content-Type':'application/json',
          },
          body: JSON.stringify({id})
        }).catch(err => console.log(err))
    }
    

    return(
        <>
        <div className="container">
            {/* <hr className="hr" /> */}
            <h1 className="h1">Shops</h1>
                <form className="form" action="" onSubmit={handelSubmit}>
                  <h2 className="form__headers">Created new Shop</h2>
                   <div className="form__box">
                     <input ref={nameRef} className="input" type="text" placeholder="Shop name" />
                     <input ref={numberRef} className="input" type="text" placeholder="Shop number" />
                     <input ref={categoryRef} className="input" type="text" placeholder="Shop category" />
                    </div>
                    <button className="form__btn" type="submit">Submit</button>
                </form>

                <ul className="shops__list">
                    {
                        shop.map(item => {
                            return (
                                    <li key={item.id} className="shops__item">
                                        <NavLink className={'shops__link'} to={`/shops/${item.id}`}>
                                            <img className="item__img" src={`https://picsum.photos/id/${item.id + 1}/150/150`} alt="" />
                                            <h4 className="item__header">Name:  {item.name}</h4>
                                            <div className="item__title">Number : {item.number}</div>
                                            <div className="item__id">Category: {item.category}</div>
                                        </NavLink>
                                            <div className="box">
                                            <button data-set-id={item.id}  onClick={editModela} className="btn1"><i class='bx bxs-edit'></i></button>
                                            <button  onClick={() => deleteShops(item.id)} className="btn2"><i class='bx bxs-message-square-x'></i></button>
                                            </div>
                                    </li>   
                            )
                        })
                    }
                </ul>
                <dialog className="dialog__modal" open={modal}>
                    <h2 className="modal__head">Edit modal</h2>
                    <form className="modal__form"  onSubmit={(e) => editModal(e)}>
                        <input   name = 'editName' className="modal__input" type="text" placeholder={foundShops.name}/><br />
                        <input   name = 'editNumber' className="modal__input"  type="text" placeholder={foundShops.number}/><br/>
                        <input   name = 'editCategory' className="modal__input"  type="text" placeholder={foundShops.category} /><br/>
                        <button onClick={() =>  setModal(false)} type="submit" className="modal__btn">Submit</button>
                    </form>
                    <button className="x_btn" onClick={() =>  setModal(false)}>X</button>
                </dialog>
                {modal2 && 
                 <div  className="delete dialog__modal ">
                    <h6 className="modal__head">Delete modal</h6>

                    <div className="delete__box">
                       <button onClick={deleteShops} className="delete__btn1">YES</button>
                       <button onClick={() =>  setModal2(false)} className="delete__btn1">NO</button>
                    </div>
                </div> 
                }
        </div>
        </>
    )
}

export default Shops ;