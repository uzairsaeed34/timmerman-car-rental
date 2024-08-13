import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mb-4">
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          The car rental experience was truly exceptional. From the moment I
          made my reservation to the final drop-off, everything was seamless and
          hassle-free. The vehicle was in immaculate condition and performed
          beyond my expectations. The customer service team was incredibly
          responsive and attentive, making sure all my needs were met. I highly
          recommend this service to anyone looking for a reliable and luxurious
          ride.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I was thoroughly impressed with the professionalism and quality of
          service provided by Car-rental. The booking process was
          straightforward, and I appreciated the variety of cars available to
          choose from. The vehicle I rented was spotless and drove like a dream.
          What stood out most was the excellent customer support, available at
          any time to assist with any questions or concerns. This is definitely
          my go-to car rental service from now on.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Marry John</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Renting a car from Car-rental was a fantastic experience! The wide
          selection of vehicles allowed me to find exactly what I needed for my
          trip. The staff went above and beyond to ensure that I was comfortable
          with my choice and had all the information I needed. The car itself
          was pristine, well-maintained, and made my journey both safe and
          enjoyable. I can’t wait to rent from them again on my next trip.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Muhammad Ali</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I’ve rented cars from several companies before, but none compare to
          the outstanding service I received from Car-rental. The car was
          delivered on time, in perfect condition, and the rental process was
          incredibly smooth. The team’s dedication to customer satisfaction was
          evident throughout my experience. Whether you need a car for business
          or leisure, Car-rental is the best choice for top-quality vehicles and
          exceptional service.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Fatima</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
