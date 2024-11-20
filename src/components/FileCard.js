// Componente FileCard modificado
const FileCard = ({ title, description, imgUrl }) => (
    <Col md={4} sm={6} className="file-card">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </Col>
  );
  