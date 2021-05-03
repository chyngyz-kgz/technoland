import React from 'react';
import './Partners.css';
import NavBar from '../NavBar/NavBar';

import undpLogo from '../../assets/images/undp.png';
import unicefLogo from '../../assets/images/unicef.png'

const Partners = () => {
    return (
        <>
            <NavBar />
            <div className="partners__container">
                <span className="partners__title">НАШИ ПАРТНЕРЫ</span>
                <div className="partner__section">
                    <div className="partner__info">
                        <span className="partner__info__title">ПРОГРАММА РАЗВИТИЯ ОРГАНИЗАЦИИ ОБЪЕДИНЕННЫХ НАЦИЙ</span>
                        <span className="partner__info__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span>
                    </div>
                    <div className="partner__logo__container">
                        <img className="partner__logo" src={undpLogo} alt="UNDP" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__logo__container">
                        <img className="partner__logo" src={unicefLogo} alt="UNDP" />
                    </div>
                    <div className="partner__info">
                        <span className="partner__info__title">ЮНИСЕФ</span>
                        <span className="partner__info__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span>
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info">
                        <span className="partner__info__title">SIFO</span>
                        <span className="partner__info__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span>
                    </div>
                    <div className="partner__logo__container">
                        <span className
                            ="partner__logo__title">Seoul Interntional <br /> Friendship Organization</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partners;