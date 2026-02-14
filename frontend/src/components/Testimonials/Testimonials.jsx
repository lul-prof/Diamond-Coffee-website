import React from "react";
import "./Testimonials.css";
import { assets, testimonials } from "../../assets/assets";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-container">
        <h2>         
          Testimonials & Reviews
        </h2>
      </div>

      <div className="testimonial-images">
        <div className="testimonial-image">
          
            <div className="testimonial-image-text">
                <h2>Exceptional Service. Unmatched Experience.</h2>

                <p>
                    At Diamond Coffee Company, we place our clients at the heart of
                    everything we do. We are committed to delivering top-notch customer
                    service through clear communication, timely responses, and
                    personalized solutions tailored to each clients unique needs. From
                    initial inquiry to final shipment, our team ensures a seamless and
                    transparent experience built on trust, reliability, and
                    professionalism. By combining industry expertise with attentive
                    support, we cultivate long-term partnerships grounded in excellence
                    and mutual success.
                </p>
            </div>
            <img src={assets.TestimonialImage3} alt="" />
            <div className="testimonial-image2">
              <img src={assets.TestimonialImage2} alt="" />

              <div className="testimonial-btn">
                <button>write Review</button>
              </div>
            </div>
            
            
          
        </div>
      </div>

      <marquee behavior="alternate">
        <div className="testimonials-details-detail">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              {/* 
                    <div className="testimonial-name">
                        <p>{testimonial.name}</p>
                    </div>
                */}

              <div className="testimonial-description">
                <h4>"{testimonial.testimonial}"</h4>
                <div className="testimonial-name">
                  <p>~{testimonial.name}</p>
                </div>
                <div className="testimonial-image">
                  <img src={testimonial.image} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </marquee>
    </>
  );
};

export default Testimonials;
