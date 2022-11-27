import "./Popular.scss";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { productImage } from "./../../../data/dataImage";
import One from "../../../assets/nike-adapt-bb.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Popular = () => {
  const [activeSlide, setActiveSlide] = useState("");

  console.log(activeSlide);

  return (
    <section className="popular" dir="rtl">
      <div className="popular-container container">
        <div className="popular-container__scroll">
          <Swiper
            navigation={true}
            modules={[Pagination, Navigation]}
            loopFillGroupWithBlank={true}
            slidesPerView={3}
            spaceBetween={40}
            loop={true}
            slidesPerGroup={1}
            className="popular-container__scroll-box"
          >
            {productImage.map((slide, i) => (
              <SwiperSlide
                key={i}
                onClick={() => console.log(setActiveSlide(slide))}
                className="popular-container__scroll-box__slide"
              >
                <img src={slide.img} alt={slide.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="popular-container__box">
          <div className="popular-container__box-item">
            <div className="popular-container__box-item__image">
              {activeSlide === "" ? (
                <img src={One} alt={"نایک"} />
              ) : (
                <img src={activeSlide.img} alt={activeSlide.name} />
              )}
            </div>
            <div className="popular-container__box-item__detail">
              <h5 className="popular-container__box-item__detail-name">
                {activeSlide === "" ? "کفش نایک مدل آداپت" : activeSlide.name}
              </h5>
              <p className="popular-container__box-item__detail-desc">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
