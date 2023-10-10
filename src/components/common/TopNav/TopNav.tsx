import type { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface TopNavProps {}

const TopNav: FC<TopNavProps> = () => {
    const { pathname } = useLocation();
    const pageTitle = pathname?.split('/')?.[2]?.charAt(0)?.toUpperCase() + pathname?.split('/')?.[2]?.slice(1)
    return (

        <>
        <div className='w-full h-[8vh] bg-white fixed leading-[8vh]'>
        <p className=''>{pageTitle}</p>
       </div>
        
        </>
    );
}

export default TopNav;
