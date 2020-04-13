import React from 'react';
import WeAreAuki from '../../components/weareauki/WeAreAuki';
import GenericInfoCaller from '../../components/genericinfo/GenericInfoCaller';
import WhyAuki from '../../components/whyauki/WhyAuki';
import '../../components/weareauki/weareauki.scss';
import '../../components/genericinfo/genericinfo.scss';
import '../../components/whyauki/whyauki.scss';
import '../../pages/homepage.scss';
import '../../components/hireteamtalent/hiret.scss';
const HomePage = () => {
    return (
        <div>
            <WeAreAuki />
            <div className="auki__container">
            <GenericInfoCaller />
            <WhyAuki />
            </div>
        </div>
    );
};
export default HomePage;