import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      src: "img/nivel 1.jpg",
      title: "Lavagem Nivel 1",
      description: "Lavagem nível 1 é concentrada para aqueles carros..."
    },
    {
      src: "img/nivel 2.jpg",
      title: "Lavagem Nivel 2",
      description: "Lavagem nível 2 podemos dizer que a lavagem nível dois é o primeiro passo..."
    },
    // Adicione os outros serviços aqui...
  ];

  return (
    <main>
      <section id="services">
        <h2>Nossos Serviços</h2>
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.src} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Services;
