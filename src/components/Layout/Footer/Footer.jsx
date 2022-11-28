import "./Footer.scss";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" dir="rtl">
      <div className="footer-container container">
        <div className="footer-container__logo">
          <img src={Logo} alt="nike" />
          <h6>نایک استور</h6>
        </div>
        <div className="footer-container__detail">
          <div className="footer-container__detail-number">
            تلفن پشتیبانی : ۶۱۹۳۰۰۰۰ - ۰۲۱
          </div>
          <div className="footer-container__detail-help">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </div>
        </div>
        <div className="footer-container__wrap">
          <div class="footer-container__wrap-item">
            <h6>نایک استور</h6>
            <Link to="/" class="footer-container__wrap-item__link">
              وبلاگ
            </Link>
            <Link to="/" class="footer-container__wrap-item__link">
              امور مشتریان
            </Link>
            <Link to="/" class="footer-container__wrap-item__link">
              تماس با ما
            </Link>
            <Link to="/" class="footer-container__wrap-item__link">
              گزارش تخلف
            </Link>
          </div>
          <div class="footer-container__wrap-item">
            <h6>راهنمای خرید</h6>
            <Link to="/" class="footer-container__wrap-item__link">
              نحوه ثبت سفارش
            </Link>
            <Link to="/" class="footer-container__wrap-item__link">
              رویه ارسال سفارش
            </Link>
            <Link to="/" class="footer-container__wrap-item__link">
              شیوه های پرداخت
            </Link>
          </div>
          <div class="footer-container__wrap-item">
            <h6>خدمات مشتریان</h6>
            <Link to="/" class="footer-container__wrap-item__link">
              پاسخ به پرسش های متداول
            </Link>
            <Link to="/" class="footer-container__wrap-item__link">
              شرایط استفاده
            </Link>
            <Link to="/" class="footer-container__wrap-item__link">
              اصالت کالا
            </Link>
            <Link to="/" class="footer-container__wrap-item__link">
              پنل پیامک
            </Link>
          </div>
          <div class="footer-container__wrap-item">
            <h6>پشتیبانی</h6>
            <Link to="/" class="footer-container__wrap-item__link">
              حریم خصوصی
            </Link>
            <Link to="/" class="footer-container__wrap-item__link">
              قوانین و مقررات
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
