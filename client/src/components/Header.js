import React from 'react';
import Typical from 'react-typical'


export const Header = () => {
    return (
        <h2>
            <Typical 
                loop={Infinity}
                wrapper="a"
                steps={[
                    "Expense", 2000,
                    "Tracker", 2000
                ]}
            />
        </h2>
    )
}


