import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import ratingStar from '../assets/rating_star.png'
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()

    return (
        <Col md={3} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'} className='mt-3'>
                <Image width={150} height={150} src={device.img}/>
                <div className='d-flex justify-content-between align-items-center mt-1'>
                    <div className='text-black-50'>Brand Name...</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={20} height={20} src={ratingStar}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;