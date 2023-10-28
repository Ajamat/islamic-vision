import type { FC } from 'react';

interface IslamicPlacesProps {}

const IslamicPlaces: FC<IslamicPlacesProps> = () => {
    return (
        <>
      <div className='w-full h-screen'>
        <div className='w-full h-full flex gap-1 items-center justify-center'>
        <div className='w-36 h-14 px-10 bg-slate-300 flex items-center' >
            <a href="https://www.madinashareef.com/" target='_self' className=''>Madina</a>

        </div>
        <div className='w-36 h-14 px-10 bg-slate-300 flex items-center' >
            <a href="https://www.visitsaudi.com/en/see-do/destinations/makkah" target='_self' className=''>Makkah</a>

        </div>
        <div className='w-36 h-14 px-10 bg-slate-300 flex items-center' >
            <a href="https://www.visitsaudi.com/en/see-do/destinations/makkah" target='_self' className=''>Makkah</a>

        </div>
        <div className='w-36 h-14 px-10 bg-slate-300 flex items-center' >
            <a href="https://www.visitsaudi.com/en/see-do/destinations/makkah" target='_self' className=''>Makkah</a>

        </div>

        </div>

      </div>
        </>
    );
}

export default IslamicPlaces;
