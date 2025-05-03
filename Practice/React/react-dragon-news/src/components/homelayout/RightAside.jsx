import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './Qzone';
import AdSpace from './AdSpace';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin />
            <FindUs />
            <QZone />
            <AdSpace />
        </div>
    );
};

export default RightAside;