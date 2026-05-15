import React from 'react'

const Buttons = ({ words, classname, icon }) => {
    let nameClass = classname;
    return (
        <button className={nameClass}>
            {icon}
            {words}
        </button>
    )
}

export default Buttons;