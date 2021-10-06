import React from 'react';

interface Props {
    text: string;
}
const Header = ({text}:Props) => {
    return (
        <h2 className="mt-5 align-self-center text-center">
            {text}
        </h2>
    );
}

export default Header;
