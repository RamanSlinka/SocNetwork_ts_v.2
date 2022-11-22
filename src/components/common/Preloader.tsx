import React from 'react';
import {Spin} from "antd";

const Preloader = () => {
    return (
        <div>
            <Spin tip="Loading..."/>
        </div>
    );
};

export default Preloader;