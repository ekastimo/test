import React from "react"
import PropTypes from 'prop-types';

export const Card=(props)=>{
    return <div>
        {JSON.stringify(props.data)}
    </div>
}

Card.propTypes = {
    data: PropTypes.object
};
