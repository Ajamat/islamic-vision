import type { FC } from 'react';
import LeftNavbar from '../components//common/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import TopNav from '..//components/common/TopNav/TopNav';
interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (

        <>
         <div className='w-screen h-screen bg-slate-300 flex'>
                
                <LeftNavbar />

                <div className='w-full  pb-16 sm:pb-0 h-full transition-all duration-1000 shadow-inner bg-gray-200 overflow-y-auto'>
                    <TopNav/>
                    <div className='mt-[8vh] pl-[80px] sm:pl-0'>
                        <Outlet /> 
                    </div>
                   
                </div>
            </div>
        
        </>
    );
}

export default Home;
