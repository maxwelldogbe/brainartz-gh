// import Textile from "./Textile";
// import Branding from "./Branding";
// import Photography from "./Photography";
// import Software from "./Software";
// import Graphic from "./Graphic";
// function Service() {
//    return (
//       <>
//       <Textile />
//       <Graphic />
//       <Branding />
//       <Software />
//       <Photography />

//       </>
//    );
// }

// export default Service;

import React from "react";

const services = [
  { id: 1, name: "Service 1", image: "service1.jpg", link: "/service/1" },
  { id: 2, name: "Web Development", image: "/images/Free Photo _ Desk with a laptop, a cup of coffee and a calendar.jpeg", link: "/services" },
  { id: 1, name: "Service 1", image: "service1.jpg", link: "/service/1" },
  { id: 2, name: "Service 2", image: "service2.jpg", link: "/service/2" },
  // ... other services
];

const ServiceSection = () => {
  return (
    <section>
      <div className="service-section">
        <h2>Our Services</h2>
        <div className="service-container">
          {services.map((service) => (
            <a key={service.id} href={service.link} className="service-item">
              <img src={service.image} alt={service.name} />
              <p>{service.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
