import "./Intro.scss";
import Nike from "../../../assets/hero.png";
import {FiGithub  ,FiInstagram , FiTwitter , FiLinkedin  ,FiMail} from 'react-icons/fi'

const Intro = () => {
  return (
    <header className="header">
      <div className="header-container container">
        <h3 className="header-container__title">
          با کفش های نایک
          <br />
          مدل 2.0 بدون مشکل ورزش کن
        </h3>
        <button className="header-container__btn">جستجوی محصولات</button>
        <img className="header-container__img" src={Nike} alt="" />
        <div className="header-container__social">
          <span><FiGithub/></span>
          <span><FiInstagram/></span>
          <span><FiLinkedin/></span>
          <span><FiTwitter/></span>
          <span><FiMail/></span>
        </div>
      </div>
    </header>
  );
};

export default Intro;
