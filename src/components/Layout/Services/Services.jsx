import "./Services.scss";
import Left from "../../../assets/left.png";
import Right from "../../../assets/nike-adapt-bb.png";
import ReactCompareImage from "react-compare-image";
import {
  RiMapPin2Fill,
  RiCalendarCheckLine,
  RiCalendarEventLine,
} from "react-icons/ri";

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
        <div className="services-store">
          <div className="services-store__item">
            <div className="services-store__item-icon">
              <RiMapPin2Fill size={34} />
            </div>
            <h4 className="services-store__item-title">
              یک مکان را انتخاب کنید
            </h4>
            <p className="services-store__item-desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="services-store__item">
            <div className="services-store__item-icon">
              <RiMapPin2Fill size={34} />
            </div>
            <h4 className="services-store__item-title">
              یک مکان را انتخاب کنید
            </h4>
            <p className="services-store__item-desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="services-store__item">
            <div className="services-store__item-icon">
              <RiMapPin2Fill size={34} />
            </div>
            <h4 className="services-store__item-title">
              یک مکان را انتخاب کنید
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
