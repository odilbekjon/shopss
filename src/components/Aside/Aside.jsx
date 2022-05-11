import "./Aside.css";
import Img1 from "../../Assets/IMAGE1.png"
import Img2 from "../../Assets/IMAGE2.png"
import Img3 from "../../Assets/IMAGE3.png"
import Img4 from "../../Assets/IMAGE4.png"
import Img5 from "../../Assets/lap1.jpg"
import Img6 from "../../Assets/lap2.jpeg"
import Img7 from "../../Assets/lap3.jpg"
import Img8 from "../../Assets/lap4.jpg"
import Img9 from "../../Assets/lap5.jpg"
import Img10 from "../../Assets/tel1.jpg"
import Img11 from "../../Assets/tel2.jpg"
import Img12 from "../../Assets/tel3.jpg"
import Img13 from "../../Assets/tel4.jpg"
import Img14 from "../../Assets/tel5.jpg"

export default function Aside(){
    return(
        <div className="container">
            <aside className="aside">
            <h1 className="aside__head">We make your brand success</h1>
              <ul className="aside__list">
                  <li className="aside__item">
                    <img className="aside__img" src={Img1} alt="" width={200} height={200} />
                    <h4 className="aside__title">Home  One-Bold</h4>
                  </li>
                  <li className="aside__item item2">
                    <img className="aside__img" src={Img2} alt="" width={200} height={200} />
                    <h4 className="aside__title">Company Two — Joyful</h4>
                  </li>
                  <li className="aside__item">
                    <img className="aside__img" src={Img3} alt="" width={200} height={200} />
                    <h4 className="aside__title">Home Three — Clean</h4>
                  </li>
                  <li className="aside__item item2">
                    <img className="aside__img" src={Img4} alt="" width={200} height={200} />
                    <h4 className="aside__title">Company One — Bold</h4>
                  </li>
              </ul>
              <h2 className="header2">Buy products new</h2>
              <div className="products">
                <div className="product">
                   <div className="imgs">
                    <img className="imgC" src={Img5} width={200} height={140} alt="" /><br />
                    <div className="">
                     <h5 className="comp">Acer cor-8</h5>
                     <p className="cost">600$</p>
                    </div>
                   </div>
                    <div className="imgs">
                      <img className="imgC" src={Img6} width={200} height={140} alt="" />
                      <div className="">
                       <h5 className="comp">Asus cor-7</h5>
                       <p className="cost">500$</p>
                      </div>
                    </div>
                </div>
                <div className="product2">
                   <div className="imgs">
                    <img className="imgC" src={Img7} width={200} height={140} alt="" /><br />
                    <div className="">
                     <h5 className="comp">Acer cor-8</h5>
                     <p className="cost">600$</p>
                    </div>
                   </div>
                    <div className="imgs">
                      <img className="imgC" src={Img8} width={200} height={140} alt="" />
                      <div className="">
                       <h5 className="comp">Asus cor-7</h5>
                       <p className="cost">500$</p>
                      </div>
                    </div>
                </div>
                <div className="product3">
                   <div className="imgs">
                    <img className="imgC" src={Img9} width={200} height={140} alt="" /><br />
                    <div className="">
                     <h5 className="comp">Acer cor-8</h5>
                     <p className="cost">600$</p>
                    </div>
                   </div>
                    <div className="imgs">
                      <img className="imgC" src={Img12} width={200} height={140} alt="" />
                      <div className="">
                       <h5 className="comp">Asus cor-7</h5>
                       <p className="cost">500$</p>
                      </div>
                    </div>
                </div>
              </div>


              <div className="products">
                <div className="product">
                   <div className="imgs">
                    <img className="imgC" src={Img10} width={200} height={140} alt="" /><br />
                    <div className="">
                     <h5 className="comp">Note galaxy-8</h5>
                     <p className="cost">600$</p>
                    </div>
                   </div>
                    <div className="imgs">
                      <img className="imgC" src={Img11} width={200} height={140} alt="" />
                      <div className="">
                       <h5 className="comp">Note galaxy-7</h5>
                       <p className="cost">500$</p>
                      </div>
                    </div>
                </div>
                <div className="product2">
                   <div className="imgs">
                    <img className="imgC" src={Img12} width={200} height={140} alt="" /><br />
                    <div className="">
                     <h5 className="comp">Note galaxy-8</h5>
                     <p className="cost">600$</p>
                    </div>
                   </div>
                    <div className="imgs">
                      <img className="imgC" src={Img8} width={200} height={140} alt="" />
                      <div className="">
                       <h5 className="comp"> Galaxy-7</h5>
                       <p className="cost">500$</p>
                      </div>
                    </div>
                </div>
                <div className="product3">
                   <div className="imgs">
                    <img className="imgC" src={Img13} width={200} height={140} alt="" /><br />
                    <div className="">
                     <h5 className="comp"> Galaxy-8</h5>
                     <p className="cost">600$</p>
                    </div>
                   </div>
                    <div className="imgs">
                      <img className="imgC" src={Img14} width={200} height={140} alt="" />
                      <div className="">
                       <h5 className="comp"> Galaxy-7</h5>
                       <p className="cost">500$</p>
                      </div>
                    </div>
                </div>
              </div>
            </aside>
        </div>
    )
}