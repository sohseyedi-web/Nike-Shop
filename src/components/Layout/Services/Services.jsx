import "./Services.scss";
import Left from "../../../assets/left.png";
import Right from "../../../assets/nike-adapt-bb.png";
import ReactCompareImage from "react-compare-image";
import {
  TbCashBanknote,
  TbCheck,
  TbPlaneInflight,
} from "react-icons/tb";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-virtual">
          <h4 className="services-virtual__title">
            کلی کفش با رنگ بندی های متنوع
          </h4>
          <div className="services-virtual__image">
            <ReactCompareImage leftImage={Left} rightImage={Right} />
          </div>
        </div>
        <div className="services-store" dir="rtl">
          <div className="services-store__item">
            <div className="services-store__item-icon">
              <TbPlaneInflight size={34} />
            </div>
            <h4 className="services-store__item-title">
              ارسال اکسپرس
            </h4>
            <p className="services-store__item-desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="services-store__item">
            <div className="services-store__item-icon">
              <TbCheck size={34} />
            </div>
            <h4 className="services-store__item-title">
              محصولات اصل
            </h4>
            <p className="services-store__item-desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="services-store__item">
            <div className="services-store__item-icon">
              <TbCashBanknote size={34} />
            </div>
            <h4 className="services-store__item-title">
              خرید به صورت قسطی
            </h4>
            <p className="services-store__item-desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
