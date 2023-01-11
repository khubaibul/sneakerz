import React, { useContext, useState } from 'react';
import img1 from "../../../assets/image-product-1.jpg";
import img2 from "../../../assets/image-product-2.jpg";
import img3 from "../../../assets/image-product-3.jpg";
import img4 from "../../../assets/image-product-4.jpg";
import addToCart from "../../../assets/icon-cart.svg";
import { contextAPI } from '../../UseContext/useContex';

const Women = () => {
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);
    const { shoeQuantity, setShoeQuantity } = useContext(contextAPI);

    const shoeImgArray = [img1, img2, img3, img4];
    return (
        <div className='mt-20 h-screen lg:grid grid-cols-2 gap-x-40'>
            <div>
                <div>
                    <img className='lg:w-[600px] rounded-xl' src={shoeImgArray[selectedImgIndex]} alt="" />
                </div>
                <div className='grid grid-cols-4 gap-x-4 lg:w-[530px] mt-10'>
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







            <div className='flex flex-col justify-start gap-y-12 mt-10'>

                <div>
                    <p className='text-[#ce7e53] font-bold tracking-wider mb-2'>SNEAKER COMPANY</p>
                    <h1 className='text-5xl font-semibold'>Fall Limited <br />Sneakers</h1>
                </div>

                <div>
                    <p className='text-lg font-medium text-gray-400'>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, the'll withstand everything the weather can offer.
                    </p>
                </div>

                <div>
                    <div className='lg:mb-5'>
                        <div className='flex gap-x-6 items-center'>
                            <h2 className='text-3xl font-bold'>$125.00</h2>
                            <h4 className='bg-orange-200 px-4 py-1 rounded font-bold text-secondary'>50%</h4>
                        </div>
                        <div>
                            <p className='text-gray-400 font-semibold line-through my-2'>$250.00</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <div className="flex flex-row h-12 w-[40%] rounded-lg relative bg-transparent mt-1">
                            <button
                                onClick={() => setShoeQuantity(shoeQuantity - 1)}
                                disabled={shoeQuantity === 0}
                                data-action="decrement" className=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                <span className="m-auto text-2xl font-bold">−</span>
                            </button>
                            <input type="text" className="focus:outline-none text-center w-full bg-gray-200 font-bold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={shoeQuantity}></input>
                            <button
                                onClick={() => setShoeQuantity(shoeQuantity + 1)}
                                data-action="increment" className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                <span className="m-auto text-2xl font-bold">+</span>
                            </button>
                        </div>
                        <div className='w-full'>
                            <button className='flex justify-center gap-x-2 items-center bg-[#E07338] w-full h-12 rounded-lg text-white font-bold hover:shadow-orange-400 hover:shadow-lg'>
                                <img src={addToCart} alt="" />
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Women;