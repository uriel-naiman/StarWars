import React from 'react';
import BodyContainer from './BodyContainer';
import Header from './Header';

const OuterContainer = () => {
    return (
        <div className="d-flex flex-column">
           <Header text="Choose your favorite Star Wars Movie"/> 
           <BodyContainer />
        </div>
    )
}

export default OuterContainer;

