import type { FC } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import {IoIosAddCircleOutline} from 'react-icons/io'

interface TopNavProps { }

const TopNav: FC<TopNavProps> = () => {
    const { pathname } = useLocation();
    const pageTitle = pathname?.split('/')?.[2]?.charAt(0)?.toUpperCase() + pathname?.split('/')?.[2]?.slice(1)
    const nevigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    return (

        <>
            <div className='w-full h-[8vh] bg-white flex justify-between px-3 items-center'>
                <p className=''>{pageTitle}</p>
                <div className='flex gap-1'>
                    {
                        pathname === '/home/islamicgallery' &&
                        <div className='flex items-center' onClick={() => nevigate('imagegalleryform')}>
                           <IoIosAddCircleOutline/>
                        </div>
                    }
                    {
                        pathname === '/home/duas' &&
                        <div className='flex items-center' onClick={() => nevigate('duasform')}>
                            <IoIosAddCircleOutline/>
                        </div>
                    }
                </div>
                {/* kjlkjkl */}
                    <span className='' onClick={handleLogout}><BiLogOut/></span>
            </div>



        </>
    );
}

export default TopNav;
