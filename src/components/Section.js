import React from "react";

const services = [
  { id: 1, name: "Graphic Desgin",  link: "/graphic-design" },
  { id: 2, name: "Branding",  link: "/branding" },
  { id: 3, name: "Textiles",  link: "/textile" },
  { id: 4, name: "Web Development",  link: "/web-development" },
  { id: 5, name: "Photography",  link: "/photography" },
  // ... other services
];

const Section = () => {
  return (
    <section>
      <div className="service-section">
        <h4>Our Services</h4>
        <div className="service-container">
          {services.map((service) => (
            <a key={service.id} href={service.link} className="service-item">
              <p>{service.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;