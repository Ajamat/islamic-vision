import type { FC } from 'react';
import Img1 from "..//..//Assets/photo-1605976528013-638e49b6599f.avif"
import Ima2 from "..//..//Assets/premium_photo-1678483063222-b9cb.jpg"
import Img3 from "..//..//Assets/photo-1553755088-ef1973c7b4a1.avif"
import Img4 from "..//..//Assets/photo-1537181534458-45dcee76ae90.avif"
import Img5 from "..//..//Assets/photo-1540567736792-f78f6242e4e0.avif"
import Img6 from "..//..//Assets/photo-1590075865003-e48277faa558.avif"
import Imgage7 from '..//..//Assets/register.avif'


interface IslamicGalleryProps { }

const IslamicGallery: FC<IslamicGalleryProps> = () => {
    return (
        <>
            <div className='w-full h-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full p-2'>
                    <div className='w-full h-80 bg-white border rounded-md'>
                        <img className='w-full h-64' src={Img1} alt="" />
                        <div className='flex justify-between p-2'>
                            <div>
                                <p>Allah is with us</p>
                                <p>Quran Reminders</p>
                            </div>
                            <div>
                                <button className='py-1 mt-1 text-white px-2 bg-blue-400 rounded-sm text-sm'>Share</button>
                            </div>
                        </div>

                    </div>
                    <div className='w-full h-80 bg-white border rounded-md'>
                        <img className='w-full h-64' src={Ima2} alt="" />
                        <div className='flex justify-between p-2'>
                            <div>
                                <p>Trust Allah</p>
                                <p>Words of Wisdom</p>
                            </div>
                            <div>
                                <button className='py-1 mt-1 text-white px-2 bg-blue-400 rounded-sm text-sm'>Share</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-80 bg-white border rounded-md'>
                        <img className='w-full h-64' src={Img3} alt="" />
                        <div className='flex justify-between p-2'>
                            <div>
                                <p>Believe that Allah will</p>
                                <p>make everything okay.</p>
                            </div>
                            <div>
                                <button className='py-1 mt-1 text-white px-2 bg-blue-400 rounded-sm text-sm'>Share</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-80 bg-white border rounded-md'>
                        <img className='w-full h-64' src={Img4} alt="" />
                        <div className='flex justify-between p-2'>
                            <div>
                                <p>Seek help through</p>
                                <p>Patience and Prayer</p>
                            </div>
                            <div>
                                <button className='py-1 mt-1 text-white px-2 bg-blue-400 rounded-sm text-sm'>Share</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-80 bg-white border rounded-md'>
                        <img className='w-full h-64' src={Img5} alt="" />
                        <div className='flex justify-between p-2'>
                            <div>
                                <p>Allah is sufficient</p>
                                <p>Words of Wisdom</p>
                            </div>
                            <div>
                                <button className='py-1 mt-1 text-white px-2 bg-blue-400 rounded-sm text-sm'>Share</button>
                            </div>
                        </div>

                    </div>
                    <div className='w-full h-80 bg-white border rounded-md'>
                        <img className='w-full h-64' src={Img6} alt="" />
                        <div className='flex justify-between p-2'>
                            <div>
                                <p>Alhamdulillah</p>
                                <p>Words of Wisdom</p>
                            </div>
                            <div>
                                <button className='py-1 mt-1 text-white px-2 bg-blue-400 rounded-sm text-sm'>Share</button>
                            </div>
                        </div>

                    </div>
                    {/* <div className="w-full rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={Imgage7} alt="Sunset in the mountains"/>
                            <div className="px-2 py-2">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                               
                            </div>
                           
                    </div> */}

                </div>
            </div>
        </>
    );
}

export default IslamicGallery;
