import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/big_star.png'

const DevicePage = () => {
    const device = {id: 1, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'};
    const description = [
        {id: 1, name: 'test', description: 'qwertyyyyyyyyyy'},
        {id: 2, name: 'test', description: 'qwertyyyyyyyyyy'},
        {id: 3, name: 'test', description: 'qwertyyyyyyyyyy'},
        {id: 4, name: 'test', description: 'qwertyyyyyyyyyy'},
        {id: 5, name: 'test', description: 'qwertyyyyyyyyyy'},
        {id: 6, name: 'test', description: 'qwertyyyyyyyyyy'},
    ]

        return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image height={300} width={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 style={{textAlign: 'center'}}>{device.name}</h2>
                        <div
                            className='d-flex justify-content-center align-items-center'
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', textAlign: 'center', fontSize: 50}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey'}}
                    >
                        <h3>{device.price} $</h3>
                        <Button variant={'outline-dark'}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column mt-3'>
                <h3>Device info</h3>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10}}>
                        {info.name}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;