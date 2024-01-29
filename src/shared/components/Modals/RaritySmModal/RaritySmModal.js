import { Cheveron } from 'assets/SVGs/SVGs';
import { React } from 'react';
import { Modal } from 'react-bootstrap';

import "./raritySmModal.scss";

const RaritySmModal = ({ toggleRarityHandler }) => {
    return (
        <Modal show={toggleRarityHandler} onHide={toggleRarityHandler} animation={true} aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header className="border-0" closeButton />

            <Modal.Body>
                <div className="rarity-modal-wrapper-sm">

                    <div className="d-flex justify-content-between align-items-center tv-mb-12 me-0">
                        <label className="form-checkbox d-flex align-items-center">
                            <input value="All" for="raritybox" type="checkbox" />
                           <p> All</p>
                        </label>
                        <Cheveron color="#566477"/>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="Common" name="raritybox" type="checkbox" />
                                <p>Common</p>
                            </div>
                        <span className="rarity common"></span>
                        </label>
                    </div>
                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="uncommon" name="raritybox" type="checkbox" />
                                <p>Uncommon</p>
                            </div>
                        <span className="rarity uncommon"></span>
                        </label>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="rare" name="raritybox" type="checkbox" />
                                <p>Rare</p>
                            </div>
                        <span className="rarity rare"></span>
                        </label>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="special" name="raritybox" type="checkbox" />
                                <p>Special</p>
                            </div>
                        <span className="rarity special"></span>
                        </label>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="legendary" name="raritybox" type="checkbox" />
                                <p>Legendary</p>
                            </div>
                        <span className="rarity legendary"></span>
                        </label>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="mythical" name="raritybox" type="checkbox" />
                                <p>Mythical</p>
                            </div>
                        <span className="rarity mythical"></span>
                        </label>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="golden" name="raritybox" type="checkbox" />
                                <p>Golden</p>
                            </div>
                        <span className="rarity golden"></span>
                        </label>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="golden" name="raritybox" type="checkbox" />
                              <p>  2D</p>
                            </div>
                            <h5 className="">2D</h5>
                        </label>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="golden" name="raritybox" type="checkbox" />
                               <p> 3D</p>
                            </div>
                            <h5 className="">3D</h5>
                        </label>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="golden" name="raritybox" type="checkbox" />
                               <p> 2D Animated</p>
                            </div>
                            <h5 className="">2DA</h5>
                        </label>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="golden" name="raritybox" type="checkbox" />
                                <p>3D Animated</p>
                            </div>
                            <h5 className="">3DA</h5>
                        </label>
                    </div>

                    <div className=" tv-mb-12 me-0">
                        <label className="form-checkbox d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input value="golden" name="raritybox" type="checkbox" />
                                <p>Available in VR</p>
                            </div>
                        <h5 className="">VR</h5>
                        </label>
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    )
}

export default RaritySmModal;
