import React from 'react';
import Footer from '../components/Footer';

export default function Main(props){
    const { children } = props;

    return(
        <>
        {children}
        <Footer/>
        </>
    )
}