import React from 'react';
import './Services.css';
import Service from './Service/Service';


const services = [
    {
        "id": 1, 
        "name": "Dhaka to cox s bazer",
        "day": "2",
        "price": "2500",
        "description": "Cox's Bazar, the world's longest natural beach. The coast of Cox's Bazar is about 125 km long. It is also the largest fishery port in the country. Cox's Bazar district is the only coral island in our country. Apart from this, ",
        "img": ""

    },
    {
        "id": 2, 
        "name": "Dhaka to Rangamati",
        "day": "3",
        "price": "3200",
        "description": "Have you planned to travel Dhaka To Rangamati? In this situation, you need a complete guide of travelling Dhaka To Rangamati Bus. You have to follow the guide to get information of bus ticket fare and departure. You can also get contacts of counters from this guide and get a safe journey with it.",
        "img": "https://i.ibb.co/W6v26s2/rangamati.jpg"

    },
    {
        "id": 3, 
        "name": "Dhaka to Saint Martin",
        "day": "3",
        "price": "4200",
        "description": "Saint Martin's Island is the only coral island of Bangladesh and one of the Bangladesh Eco-Tourism Destinations. Among the locals this island is known as Narikel Jinjira (Coconut Island). 3 Nights stay at the pearl of Bangladesh St Martin Island,",
        "img": "https://i.ibb.co/4FRNtdy/Saint-Martin1.jpg"

    },
    {
        "id": 4, 
        "name": "Dhaka to Bandorbon",
        "day": "5",
        "price": "7599",
        "description": "Bandarban hill tracts is the blessing of Himalaya where three highest mountain & hill stream presented the numerous valleys before meet the beach & submarine hill. the terrains is colored by indigenous peoples who surviving with ecological balance.",
        "img": "https://i.ibb.co/Hz9jM4p/car4.jpg"

    },
    {
        "id": 5, 
        "name": " Dhaka to Sylhet",
        "day": "7",
        "price": "9499",
        "description": "Sylhet is one of the oldest city in Bangladesh having a vast historical and cultural background and diversified inhabitants of Garo Khasia Monipuri and Hazong. The district is surrounded by the Jaintia Khasi and Tripura hills.",
        "img": "https://i.ibb.co/JvP5VVt/car5.webp"

    },
    {
        "id": 6, 
        "name": "Dhaka to Khagrachari",
        "day": "8",
        "price": "12000",
        "description": "Khagrachari one of the hill track districts of Bangladesh is located on the south east side of Chittagong division. Khagrachari pourashava is an A category pourashava. This study represents the urban growth pattern and growth trend of the pourashava area. Golabari mahajanpara chinginala",
        "img": "https://i.ibb.co/ysRJjYF/car6.jpg"

    },
    {
        "id": 7, 
        "name": "Dhaka to Borisal",
        "day": "4",
        "price": "7400",
        "description": "Barisal officially called Barishal city south-central Bangladesh. It lies in the delta of the Padma (Ganges Ganga) and Jamuna (Brahmaputra) rivers on the Kirtonkhola an offshoot of the Arial Khan River.",
        "img": "https://i.ibb.co/XtR1zLQ/borisal.jpg"

    },
    {
        "id": 8, 
        "name": "Dhaka to Tangail",
        "day": "7",
        "price": "13299",
        "description": "Tangail is an important hand-loom and cotton-weaving centre and also serves as a trading centre for the rice, jute, and oilseeds that are grown in the surrounding agricultural area. Sugarcane, wheat, and pulses also are important crops. The city is connected by road with Dhaka",
        "img": "https://i.ibb.co/CKvQGn0/tangail.jpg"

    }
]
const Services = () => {
    return (
        <div className='container-fluid'>
            <h1 className='text-info py-4 mx-auto'>Inventory Items</h1>
           <div className='services-container'>
           {
                services.slice(0, 6).map( service => <Service
                key={service.id}
                service={service}></Service>)
            }
           </div>
            
        </div>
    );
};

export default Services;