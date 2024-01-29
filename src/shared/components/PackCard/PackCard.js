import React from "react";
import "./packcard.scss";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
const PackCard = ({
    name, //the name of item
    image, // main image
    status, //info that is showed next to name
    estValue,
    isGlobal,// Define its Scope If it has global access then it has price on it otherwise it will be in My-Packs and have buttons wwith it (packs listing global view)
    allSold, // It defines either all items are sold or have some to be sold (packs listing global view)
    price, // pack price for the global packs listing view
    left, //How many cards are left (packs listing global view)
}) => {
    const packCardFooterSetter=()=>{
        if(isGlobal){
            return(
                <div className="d-flex tv-mt-10 align-items-center">
                    <h5 className="packcard__name mb-0 tv-mr-14">USD ${price}</h5>
                    <div>
                        {allSold ? <span className="pack-sold tv-mr-8">SOLD OUT</span> : ""} 
                        {left ? <span className="pack-left">{left} Left</span> : ""}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="d-flex tv-mt-16">
                <PrimaryButton
                    type="button"
                    size="btn-lg"
                    text="Trade"
                    rounded={false}
                    outlined={true}
                    btnBG="tv-btn-default"
                    spacingClasses="tv-pt-18 tv-pb-18 tv-mr-8"
                    additionalClass="w-100"
                    hasIcon={false}
                    reverse={false}
                />
                <PrimaryButton
                    type="button"
                    size="btn-lg"
                    text="Redeem"
                    rounded={false}
                    outlined={false}
                    btnBG="tv-btn-gradient"
                    spacingClasses="tv-pt-18 tv-pb-18 tv-ml-8"
                    additionalClass="w-100"
                    hasIcon={false}
                    reverse={false}
                />
            </div>  
            )
        }
    }
    return (
        <div className="packcard" >
            <div className="packard__img flex-1">
                <img src={image} alt="Pack" className="" />
            </div>
            <div className="d-flex flex-column">
                <div className="packcard__infoe tv-mt-40">
                    <h5 className="packcard__name">{name ? name : ''}</h5>
                    <div className="packcard__info-box">
                        {status ? status : ''}
                    </div>
                </div>
                {packCardFooterSetter()}
            </div>
        </div>

    );
};

export default PackCard;
