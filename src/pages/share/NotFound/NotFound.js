import React from 'react';
import { Card } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Card className="bg-dark text-light mt-4 rounded-0">
        <Card.Img
          className="w-100 img-fluid"
          src="https://i.ibb.co/sgCPD2d/NotFound.webp"
          alt="Card image"
        />
        <Card.ImgOverlay className="mt-lg-5">
          <Card.Title className="mt-lg-3 text-info"> NOT FOUND ANY RESULT </Card.Title>
          <Card.Text className="mt-lg-4 card-text text-danger">
          You have pressed wrong url path name
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
};

export default NotFound;