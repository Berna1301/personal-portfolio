// WhatsAppChat.js
import React, { useState } from "react";
import "./WhatsAppButton.css";

function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+526183017524"; // Reemplaza con tu número de WhatsApp (con código de país)

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="whatsapp-chat-container">
      <button className="whatsapp-button" onClick={toggleChat}>
        <img src="https://img.icons8.com/color/48/whatsapp.png" alt="WhatsApp" />
      </button>

      {isOpen && (
        <div className={`chat-popup ${isOpen ? "open" : "closed"}`}>
          <div className="chat-header">
            <h4>Chatea con nosotros en WhatsApp</h4>
            <button onClick={toggleChat} className="close-button">✕</button>
          </div>
          <div className="chat-body">
            <p>¡Hola! ¿En qué podemos ayudarte hoy?</p>
          </div>
          <div className="chat-footer">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="send-button"
            >
              Enviar mensaje
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default WhatsAppChat;
