// import React from 'react';
import propTypes from 'prop-types';
import './styles.css'

// Card 
const Card = ({ heading, description }) => {
    Card.propTypes = {
        heading: propTypes.string.isRequired,
        description: propTypes.string.isRequired
    }

    return (
        <>
            <div className="relative card w-fit h-full flex justify-center">
                <div className="background"></div>
                <div className="contain w-[30vw] h-full bg-gray-200 z-10 text-gray-500 flex-col items-center justify-center overflow-hidden">
                    <div className="pt-20 font-lighter flex justify-center text-5xl ">
                        <h1>{heading}</h1>
                    </div>
                    <div className='description flex flex-wrap w-full px-20 text-2xl items-center h-full ' >{description}</div>
                </div>
            </div>
        </>
    )
}

const Cards = () => {
    return (
        <div className='solutions flex mt-10 h-[100vh] w-[100vw] items-center mx-auto gap-5 justify-center'>


            <Card heading="Tech Solutions" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa natus corrupti molestias maxime placeat esse nulla aperiam consequuntur cum quibusdam iusto, mollitia saepe voluptatum suscipit libero. Nobis, fugit non!    
" />
            <Card heading="Tech Solutions" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa natus corrupti molestias maxime placeat esse nulla aperiam consequuntur cum quibusdam iusto, mollitia saepe voluptatum suscipit libero. Nobis, fugit non!    
" />
            <Card heading="Tech Solutions" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa natus corrupti molestias maxime placeat esse nulla aperiam consequuntur cum quibusdam iusto, mollitia saepe voluptatum suscipit libero. Nobis, fugit non!    
" />
            <Card heading="Tech Solutions" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa natus corrupti molestias maxime placeat esse nulla aperiam consequuntur cum quibusdam iusto, mollitia saepe voluptatum suscipit libero. Nobis, fugit non!    
" />
        </div>

    )
}

export default Cards
