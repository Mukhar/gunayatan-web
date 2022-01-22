import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonCustom(props) {
    return <div className='customButton'>
        <Link to={props.link}>
            {props.content}
        </Link>
    </div>;
}
