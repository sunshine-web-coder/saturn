import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows";
import { Link } from "react-router-dom";

export default function Slides() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide_box slide_box1">
          <div className="in_slide_box">
            <div className="left">
              <h1>
                <img
                  className="w-72 mb-2"
                  src="https://i.ibb.co/YNVLn81/logo-uber.jpg"
                  alt=""
                />
                Get 6 months free trial of Uber One Membership
              </h1>
              <p>
                Set PayPal as your payment method and start saving with $0 Uber
                Eats Delivery Fees, 5% credit on Uber Rides, and more.
              </p>
              <Link>Get Offer</Link>
              <p>
                <sup>*</sup>
                <span>
                  Offer and Uber One Terms Apply. Excl. current Uber One
                  members.
                </span>
              </p>
            </div>
            <div className="right">
              <div className="in_right"></div>
            </div>
          </div>
        </div>
        <div className="slide_box slide_box2">
          <div className="in_slide_box">
            <div className="left">
              <h1>
                <img
                  className="w-72 mb-2"
                  src="https://i.ibb.co/h2R5sj0/jb-hi-fi-logo1.jpg"
                  alt=""
                />
                For the tech-savvy <br /> Dads
              </h1>
              <p>
                Level up Dad’s tech collection with JB Hi-Fi. <br /> Trust the
                way you pay with Pay in 4. <br />{" "}
                <span className="font-medium text-xs">Terms apply.</span>
              </p>
              <Link>Shop now</Link>
            </div>
            <div className="right">
              <div className="in_right"></div>
            </div>
          </div>
        </div>
        <div className="slide_box slide_box3">
          <div className="in_slide_box">
            <div className="left">
              <h1>
                <img
                  className="w-72 mb-2"
                  src="https://i.ibb.co/SmCpJpG/mitre10-logo1.jpg"
                  alt=""
                />
                For the mighty Dads
              </h1>
              <p>
                Give Dad a helping hand with the right tools from Mitre 10{" "}
                <br /> for his next DIY project. Trust the way you pay with Pay
                in 4. <br />{" "}
                <span className="font-medium text-xs">Terms apply.</span>
              </p>
              <Link>Shop now</Link>
            </div>
            <div className="right">
              <div className="in_right"></div>
            </div>
          </div>
        </div>
        <div className="slide_box slide_box4">
          <div className="in_slide_box">
            <div className="left">
              <h1>
                <img
                  className="w-72 mb-2"
                  src="https://i.ibb.co/RbHW4Hp/logo-zing.jpg"
                  alt=""
                />
                For the superhero
                <br /> Dads
              </h1>
              <p>
                Add to Dad’s bounty collection with merch from ZiNG featuring
                his favourite pop culture characters and more. Trust the way you
                pay with Pay in 4.
                <br /> <span className="font-medium text-xs">Terms apply.</span>
              </p>
              <Link>Shop now</Link>
            </div>
            <div className="right">
              <div className="in_right"></div>
            </div>
          </div>
        </div>
        <div className="slide_box slide_box5">
          <div className="in_slide_box">
            <div className="left">
              <h1>
                <img
                  className="w-72 mb-2"
                  src="https://i.ibb.co/VQ3JMj1/hellofresh-logo.png"
                  alt=""
                />
                Say hello to up to $220
                <br /> in healthy savings.
              </h1>
              <p>
                Save up to $220<sup>*</sup> off your first seven boxes with
                HelloFresh when you use PayPal and the promo code: PAYPAL220
                <br /> <span className="font-medium text-xs">Terms apply.</span>
              </p>
              <Link>Shop now</Link>
              <p>
                <sup>*</sup>
                <span>
                  Valid for new customers and deactivated accounts, see T&Cs for
                  more info.
                </span>
              </p>
            </div>
            <div className="right">
              <div className="in_right"></div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
