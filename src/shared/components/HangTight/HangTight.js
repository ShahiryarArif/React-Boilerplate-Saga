import React from 'react';
import Layout from '../Layout/Layout';
import "./hangTight.scss";
import Avatar from "../../../assets/images/hang-tight-img.png";
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import { LongRightArrow} from 'assets/SVGs/SVGs';
const HangTight = () => {
    return (
        <Layout>
            <div className="hang-tight-wrapper">
                <div className="tv-container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="img-wrap">
                                <img src={Avatar} alt="Avatar" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8 d-flex align-items-center justify-content-center">
                            <div className="text-wrapper">
                                <h3 className="tv-mb-20">Hang Tight!</h3>
                                <p className="tv-mb-26">You’re being redirected to another page,it may takes upto 10 seconds.</p>
                                <PrimaryButton
                                    type="button"
                                    size="btn-lg"
                                    text="Go Back"
                                    rounded={false}
                                    outlined={false}
                                    btnBG="tv-btn-gradient"
                                    spacingClasses=""
                                    additionalClass=""
                                    hasIcon={true}
                                    reverse={true}
                                    icon={<LongRightArrow color="#ffffff" />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default HangTight;
