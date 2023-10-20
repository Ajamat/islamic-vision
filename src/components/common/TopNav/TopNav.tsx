import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
            <div className='w-full h-[8vh] bg-white fixed leading-[8vh] flex justify-between'>
                <p className=''>{pageTitle}</p>
                <div className='flex gap-1'>
                    {
                        pathname === '/home/islamicgallery' &&
                        <div onClick={() => nevigate('imagegalleryform')}>
                            Add
                        </div>
                    }
                    {
                        pathname === '/home/duas' &&
                        <div onClick={() => nevigate('duasform')}>
                            Add
                        </div>
                    }
                    <button className='pr-52' onClick={handleLogout}>Logout</button>
                </div>
            </div>



        </>
    );
}

export default TopNav;
