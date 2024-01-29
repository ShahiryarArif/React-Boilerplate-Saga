import React from 'react';
import PrimaryButton from 'shared/components/Buttons/PrimaryButton/PrimaryButton';
import "./packDetail.scss";
const PackDetail = ({description}) => {
    return (
        <div className="pack-detail-wrapper">
            <h4>Pack Details</h4>
            <div className="pack-detail-wrapper-info-box">
                <p className="pack-detail-wrapper-detail tv-mb-30">{description}</p>
            </div>
            <div className="pack-detail-btns tv-mt-24">
                <PrimaryButton
                    type="button"
                    size="btn-lg"
                    text="Trading History"
                    rounded={false}
                    additionalClass={" me-3 "}
                    outlined={false}
                    btnBG="tv-btn-underlined"
                    spacingClasses=""
                    hasIcon={false}
                    reverse={false}
                />
                <PrimaryButton
                    type="button"
                    size="btn-lg"
                    text="Block Chain View"
                    rounded={false}
                    /*    additionalClass={"me-sm-5 me-3 "} */

                    outlined={false}
                    btnBG="tv-btn-underlined"
                    spacingClasses=""
                    hasIcon={false}
                    reverse={false}
                />
            </div>
        </div>
    )
};

export default PackDetail

