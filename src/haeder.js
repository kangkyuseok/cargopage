import React from 'react';
import './custom.css';

function Header() {
  return (
    
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="container">
          <a className="navbar-brand" href="/"><img src="/img/logo.png" style={{width: "180px", height: "60px"}} alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">홈</a></li>
              <li className="nav-item"><a className="nav-link" href="/pages/about.html">보유장비</a></li>
              <li className="nav-item"><a className="nav-link" href="/pages/gallery.html">시공사례</a></li>
              <li className="nav-item">
                <a className="nav-link" href="https://open.kakao.com/o/gcoliNAf">
                  <i className="fab fa-kakao"></i> 카카오톡 연결
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tel:01023779159">전화연결</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="py-5 bg-image-full bg-image-cargo">
        <div className="header-content" style={{color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          <h1>부천, 인천<br />카고크레인 전문업체</h1>
          <p>(최고의 전문성, 신속한일처리, 합리적인가격,완벽한마무리로
            <br />고객님께 신뢰를 드립니다)
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;
