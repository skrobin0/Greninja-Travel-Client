import React from 'react';
import './PhotoGallery.css';
import img1 from '../../Images/photo1.jpg'
import img2 from '../../Images/photo2.jpg'
import img3 from '../../Images/photo6.jpg'
import img4 from '../../Images/photo4.jpg'
import img5 from '../../Images/photo5.jpg'
import img6 from '../../Images/photo3.jpg'
import img7 from '../../Images/photo7.jpg'
import img8 from '../../Images/photo8.jpg'
import { Col, Row } from 'react-bootstrap';
import Menubar from '../Shared/Menubar/Menubar';
import Footer from '../Shared/Footer/Footer';

const PhotoGallery = () => {
    return (
        <div>
          <Menubar></Menubar>
            <h1 className="text-center m-auto text-secondary pt-5">
        <i className="fas fa-2x text-secondary fa-camera"></i> Photo Click from{" "}
        <span className="text-success">Our Tourist</span> ___
      </h1>
      <Row className="p-5 m-auto g-0 photo-grid">
        <Col sm={5}>
          <img className="img-thumbnail" alt=".." src={img1} />
        </Col>
        <Col sm={4}>
          <img className="img-thumbnail " alt=".." src={img6} />
        </Col>
        <Col sm={3}>
          <img className="img-thumbnail " alt=".." src={img3} />
        </Col>
        <Col sm={3}>
          <img className="img-thumbnail " alt=".." src={img4} />
        </Col>
        <Col sm={4}>
          <img className="img-thumbnail " alt=".." src={img5} />
        </Col>
        <Col sm={5}>
          <img className="img-thumbnail " alt=".." src={img8} />
        </Col>
        <Col sm={6}>
          <img className="img-thumbnail " alt=".." src={img7} />
        </Col>
        <Col sm={6}>
          <img className="img-thumbnail" alt=".." src={img2} />
        </Col>
      </Row>
      <Footer></Footer>
        </div>
    );
};

export default PhotoGallery;