import React, { useState } from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alice Smith",
      role: "Project Manager",
      rating: 5,
      comment:
        "John is an excellent developer. Delivered on time and with high quality code.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Bob Jones",
      role: "Designer",
      rating: 4,
      comment:
        "Great communication and clean UI work. Very professional approach.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Charlie Brown",
      role: "Startup Founder",
      rating: 5,
      comment:
        "Fantastic work! Will definitely collaborate again in future projects.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const [active, setActive] = useState(1);

  const prev = () =>
    setActive((active - 1 + reviews.length) % reviews.length);
  const next = () => setActive((active + 1) % reviews.length);

  return (
    <section className="reviews-section">
      <h2>Testimonials</h2>

      <div className="reviews-slider">
        <button className="review-nav" onClick={prev}>‹</button>

        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`review-card ${
              index === active ? "active" : ""
            }`}
          >
            <span className="review-quote">“</span>

            <img
              src={review.image}
              alt={review.name}
              className="review-avatar"
            />

            <p className="review-comment">{review.comment}</p>

            <div className="review-stars mb-2">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`bi bi-star-fill ${
                    i < review.rating ? "filled" : ""
                  }`}
                ></i>
              ))}
            </div>

            <h5 className="review-name">{review.name}</h5>
            <div className="review-role">{review.role}</div>
          </div>
        ))}

        <button className="review-nav" onClick={next}>›</button>
      </div>

      <div className="review-dots">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`review-dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
