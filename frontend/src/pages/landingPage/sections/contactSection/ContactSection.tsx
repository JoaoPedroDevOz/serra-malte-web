// ContactSection.jsx
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import "./ContactSection.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: (
        <>
          Rua da Cerveja, 123
          <br />
          São Paulo - SP, 01234-567
        </>
      ),
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 98765-4321",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@serraemalte.com.br",
    },
  ];

  const businessHours = [
    { day: "Segunda a Sexta:", hours: "10h - 20h" },
    { day: "Sábado:", hours: "10h - 22h" },
    { day: "Domingo:", hours: "12h - 18h" },
  ];

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Aqui você pode adicionar a lógica de envio do formulário
    alert("Mensagem enviada com sucesso!");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Column - Contact Info */}
          <div className="contact-info">
            <h2 className="contact-title">Entre em Contato</h2>
            <p className="contact-subtitle">
              Tem alguma dúvida ou quer fazer um pedido? Entre em contato
              conosco!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon-wrapper">
                    <info.icon className="contact-icon" />
                  </div>
                  <div>
                    <div className="contact-item-title">{info.title}</div>
                    <div className="contact-item-content">{info.content}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="business-hours">
              <h3 className="business-hours-title">Horário de Funcionamento</h3>
              <div className="business-hours-list">
                {businessHours.map((item, index) => (
                  <div key={index} className="business-hour-item">
                    <span className="business-hour-day">{item.day}</span>
                    <span className="business-hour-time">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="form-title">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="nome" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone" className="form-label">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="(11) 98765-4321"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem" className="form-label">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
