import { useState, type FC } from 'react';
import { NavLink } from 'react-router-dom';


interface LeftNavProps {}

const LeftNav: FC<LeftNavProps> = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const showButton = () => {
        setSidebarOpen(!sidebarOpen)
    }
    return (

        <>
         <aside   >
                <div className="h-full overflow-y-auto bg-primary scrollbar-none">

                    <div className={`h-[100%] flex flex-col justify-start absolute sm:static z-40 bg-teal-700 rounded-sm overflow-hidden ${sidebarOpen ? 'w-16' :'w-48'}`}>
                        <p className='text-white flex justify-center items-center text-center cursor-pointer text-lg' onClick={showButton}>Islamic</p>
                        <ul className=" pb-[50px]">

                            <li className='border-b relative'>
                                <NavLink to='home' className={`px-4 flex items-center   h-10 text-lg text-white hover:text-[#FEEB7F] rounded-sm font-medium`}>
                                 <span className=' truncate' > Home</span>
                                </NavLink>
                            </li>
                            <li className='border-b relative'>
                                <NavLink to='prayertime' className={`px-4 flex items-center  h-10 text-lg text-white hover:text-[#FEEB7F] rounded-sm font-medium`}>
                                    <span className=' truncate' >Prayer Time</span>
                                </NavLink>
                            </li>
                            <li className='border-b relative'>
                                <NavLink to='islamiccalender' className='px-4 flex items-center  h-10 text-lg text-white hover:text-[#FEEB7F] rounded-sm font-medium '>
                                    <span className=' truncate' >Islamic Calender</span>
                                </NavLink>
                            </li>
                            <li className='border-b relative'>
                                <NavLink to='alquran' className={`px-4 flex items-center  h-10 text-lg text-white hover:text-[#FEEB7F] rounded-sm font-medium`}>
                                    <span className=' truncate' >Al Quran</span>
                                </NavLink>
                            </li>
                            <li className='border-b relative'>
                                <NavLink to='duas' className={`px-4 flex items-center  h-10 text-lg text-white hover:text-[#FEEB7F] rounded-sm font-medium`}>
                                    <span className=' truncate' >Duas</span>
                                </NavLink>
                            </li>
                            <li className='border-b relative'>
                                <NavLink to='islamicgallery' className={`px-4 flex items-center  h-10 text-lg text-white hover:text-[#FEEB7F] rounded-sm font-medium`}>
                                    <span className=' truncate' >Islamic Gallery</span>
                                </NavLink>
                            </li>
                            <li className='border-b relative'>
                                <NavLink to='prayerbook' className={`px-4 flex items-center  h-10 text-lg text-white hover:text-[#FEEB7F] rounded-sm font-medium`}>
                                    <span className=' truncate' >Prayerbook</span>
                                </NavLink>
                            </li>
                            <li className='border-b relative'>
                                <NavLink to='islamicplaces' className={`px-4 flex items-center  h-10 text-lg text-white hover:text-[#FEEB7F] rounded-sm font-medium`}>
                                    <span className=' truncate' >Islamic Places</span>
                                </NavLink>
                            </li>
                            
                            <li className='border-b relative'>
                                <NavLink to='knowledge' className={`px-4 flex items-center  h-10 text-lg text-white hover:text-[#FEEB7F] rounded-sm font-medium`}>
                                    <span className=' truncate' >Knowledge</span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </aside >
        
        </>
    );
}

export default LeftNav;
