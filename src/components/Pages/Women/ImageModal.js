import React, { useState } from 'react';

const ImageModal = ({ shoeImgArray }) => {
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    return (
        <div>
            <input type="checkbox" id="sneakerz-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-transparent shadow-none">
                    <label htmlFor="sneakerz-modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-secondary text-lg font-extrabold">✕</label>
                    <img src={shoeImgArray[selectedImgIndex]} className="mt-8 rounded-xl" alt="" />
                    <div className='grid grid-cols-4 gap-x-4 lg:w-[450px] mt-10 mx-auto'>
                        {
                            shoeImgArray.map((shoeImg, index) =>
                                <div key={index}>
                                    <label className="relative cursor-pointer">
                                        <input
                                            onClick={() => setSelectedImgIndex(index)}
                                            type="radio"
                                            defaultValue="img"
                                            className="peer sr-only" name="img" />
                                        <div className="flex border hover:border-secondary cursor-pointer rounded-xl overflow-hidden bg-white  ring ring-transparent transition-all active:scale-95 peer-checked:ring-secondary peer-checked:bg-slate-100 peer-checked:opacity-50">
                                            <div>
                                                <div>
                                                    <img src={shoeImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageModal;