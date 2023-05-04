import React from 'react';
import './CustomerTestimonials.css'
import banner from '../../assets/banner.jpg'

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      comment: 'The food was amazing! I had the steak and it was cooked to perfection.',
      date: 'April 15, 2023',
      imageSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Jane Doe',
      comment: 'I loved the atmosphere of the restaurant. It was cozy and romantic.',
      date: 'April 10, 2023',
      imageSrc: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B'
    },
    {
      name: 'Mike Johnson',
      comment: 'The service was outstanding. Our waiter was very attentive and friendly.',
      date: 'April 5, 2023',
      imageSrc: 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'
    },
  ];

  const bannerImage = banner;

  return (
    <section id="testimonials">
      <div className="testimonials-banner text-success rounded-3" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="container-fluid py-5">
          <div className="row justify-content-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <div className="card testimonial-card">
                  <div className="card-body">
                    <img className="testimonial-img" src={testimonial.imageSrc} alt={testimonial.name} />
                    <h5 className="card-title">{testimonial.name}</h5>
                    <p className="card-text">{testimonial.comment}</p>
                    <small  className="text-muted-color">{testimonial.date}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
