import React from 'react'
import Layout from '../Layout/Layout';
import "./underMaintenance.scss";
import Avatar from "../../../assets/images/maintenance-avatar.png";
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import { LongRightArrow } from 'assets/SVGs/SVGs';

const UnderMaintenance = () => {
    return (
        <Layout>
            <div className="uner-maintenance-wrapper">
            <div className="tv-container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="img-wrap">
                            <img src={Avatar} alt="Avatar" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8 d-flex align-items-center justify-content-center">
                            <div className="text-wrapper">
                                <h3 className="tv-mb-20">Under Maintenace</h3>
                                <p className="tv-mb-26">The page you're looking for is currently under maintenace and we will be back soon.</p>
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

export default UnderMaintenance;