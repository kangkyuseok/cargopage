import React, { useState, useEffect } from 'react';
import './custom.css';

function App() {
  useEffect(() => {
    const button = document.getElementById("emailInquiryButton");
    button.addEventListener("click", function() {
      const targetId = "emailcontactus";
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
    
    // Cleanup
    return () => {
      if (button) {
        button.removeEventListener("click", function() {/* your function here */});
      }
    }
  }, []);

  const [formData, setFormData] = useState({
    category: 'general',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버로 formData 전송 로직
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3 item-container22 p-0">
            <div className="img-wrapper22">
              <a href="#!">
                <img className="img-fluid2" src="img/ks2300.png" alt="" />
              </a>
            </div>
            <div className="text-wrapper22 white-bg22">
              <h2 style={{ fontSize: '30px', fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>보유장비</h2>
              <p>KS2300 , KS2307T</p>
              <a href="/pages/about.html" className="equipment-btn">보유장비</a>
            </div>
          </div>
          <div className="col-6 col-md-3 item-container22 p-0">
            <div className="img-wrapper22">
              <a href="#!">
                <img className="img-fluid2" src="img/boardimg/사업소개.png" alt="" />
              </a>
            </div>
            <div className="text-wrapper22 white-bg22">
              <h2 style={{ fontSize: '30px', fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>시공사례</h2>
              <p>시공사례 입니다.</p>
              <a href="/pages/about.html" className="equipment-btn">시공사례</a>
            </div>
          </div>
          <div className="col-6 col-md-3 item-container22 p-0">
            <div className="img-wrapper22">
              <a href="#!">
                <img className="img-fluid2" src="img/boardimg/시공사례.png" alt="" />
              </a>
            </div>
            <div className="text-wrapper22 white-bg22">
              <h2 style={{ fontSize: '30px', fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>전화문의</h2>
              <p>010-5330-3399</p>
              <a href="/pages/about.html" className="equipment-btn">전화연결</a>
            </div>
          </div>
          <div className="col-6 col-md-3 item-container22 p-0">
            <div className="img-wrapper22">
              <a href="#!">
                <img className="img-fluid2" src="img/boardimg/견적문의.png" alt="" />
              </a>
            </div>
            <div className="text-wrapper22 white-bg22">
              <h2 style={{ fontSize: '30px', fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>견적문의</h2>
              <p id="emailInquiryButton" className="equipment-btn">이메일 문의</p>
              <a href="/pages/about.html" className="equipment-btn">카카오연결</a>
            </div>
          </div>
          {/* ... 다른 col-6 col-md-3 item-container22 p-0 */}
        </div>
      </div>

      <section className="py-5">
        <div>
          <div>
            <h2 className="text-center">
              카고크레인 시공사례
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-4 p-1">
              <figure>
                <img width="400" height="300" src="img/main2/1.jpg" alt="" className="img-fluid" />
              </figure>
            </div>
            <div className="col-4 col-md-4 p-1">
              <figure>
                <img width="400" height="300" src="img/main2/2.jpg" alt="" className="img-fluid" />
              </figure>
            </div>
            <div className="col-4 col-md-4 p-1">
              <figure>
                <img width="400" height="300" src="img/main2/3.jpg" alt="" className="img-fluid" />
              </figure>
            </div>
            <div className="col-4 col-md-4 p-1">
              <figure>
                <img width="400" height="300" src="img/main2/4.jpg" alt="" className="img-fluid" />
              </figure>
            </div>
            <div className="col-4 col-md-4 p-1">
              <figure>
                <img width="400" height="300" src="img/main2/5.jpg" alt="" className="img-fluid" />
              </figure>
            </div>
            <div className="col-4 col-md-4 p-1">
              <figure>
                <img width="400" height="300" src="img/main2/a.jpg" alt="" className="img-fluid" />
              </figure>
            </div>
            {/* ... 다른 col-4 col-md-4 p-1 */}
          </div>
        </div>
      </section>
      <div className="contact-form" id="emailcontactus">
      <form onSubmit={handleSubmit}>
        <select name="category" onChange={handleInputChange}>
          <option value="general">이메일 문의</option>
          
        </select>
        <input type="text" name="name" placeholder="이름" required onChange={handleInputChange} />
        <input type="email" name="email" placeholder="이메일" required onChange={handleInputChange} />
        <input type="text" name="phone" placeholder="전화번호" onChange={handleInputChange} />
        <textarea name="message" placeholder="내용" rows="4" required onChange={handleInputChange}></textarea>
        <button type="submit">문의 보내기</button>
      </form>
    </div>
      <section className="container">
        <div className="row">
          <h1 className="text-center">주소</h1>
          <div className="col-md-12">
            <iframe className="container" id="mapContainer" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0791921795144!2d126.76251297630132!3d37.506050327593464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7d40b81d7985%3A0x3ea52f020c2e51dd!2z6rK96riw64-EIOu2gOyynOyLnCDshJ3sspzroZwgMjE2!5e0!3m2!1sko!2skr!4v1692883621129!5m2!1sko!2skr" width="600" height="450" style={{ border: '0' }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex align-items-center border p-2">
            <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
            <span>주소 : 경기도 부천시 석천로216</span>
          </div>
          <div className="col-md-4 d-flex align-items-center border p-2">
            <a href="tel:010-5330-3399" className="d-flex align-items-center text-dark text-decoration-none">
              <i className="fa fa-phone mr-2" aria-hidden="true"></i>
              <span>문의전화 : 010-5330-3399</span>
            </a>
          </div>
          <div className="col-md-4 d-flex align-items-center border p-2">
            <a href="https://map.naver.com/..." className="btn btn-primary w-100">
              <span>네이버 지도 바로가기</span>
              <i className="fa fa-angle-right ml-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
       
      </section>
      
    </div>
  
  );
}

export default App;
