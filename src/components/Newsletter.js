import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import QR from "../assets/img/QR.png";
import './Projects.css';

export const Newsletter = ({}) => {
  return (
    <Col lg={12} id="newsletter"> {/* Aquí agregas el id */}
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>¡Descubre nuestras increíbles apps móviles!<br />Conéctate y disfruta de la mejor experiencia digital</h3>
          </Col>
          <Col md={6} xl={7} className="d-flex justify-content-center align-items-center">
            <img src={QR} alt="QR" className="QR" />
          </Col>
        </Row>
      </div>
    </Col>
  );
};

