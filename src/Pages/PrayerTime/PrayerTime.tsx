import type { FC } from 'react';

interface PrayerTimeProps {}

const PrayerTime: FC<PrayerTimeProps> = () => {
    return (
        <>
        <div className='w-full h-full flex justify-center items-center mt-20'>
            <div className='w-[900px] h-[200px]  bg-white rounded-md lg:flex-col'>
                <div className='flex justify-between   mt-2 px-3'>
                    <div>
                        <h1>Prayer Times in India</h1>
                    </div>
                    <div>
                        10 October,2023
                    </div>
                </div>
                <div className='flex h-[200px] gap-3 justify-center items-center'>
                    <div className='w-32 h-20 bg-slate-100 rounded-md flex justify-center items-center flex-col'>
                        <p>Fajr</p>
                        <p>04:45 AM</p>

                    </div>
                    <div className='w-32 h-20 bg-slate-100 rounded-md flex justify-center items-center flex-col'>
                        <p>Sunrise</p>
                        <p>05:45 AM</p>
                    </div>
                    <div className='w-32 h-20 bg-slate-100 rounded-md flex justify-center items-center flex-col'>
                        <p>Dhuhr</p>
                        <p>01:00 PM</p>
                    </div>
                    <div className='w-32 h-20 bg-slate-100 rounded-md flex justify-center items-center flex-col'>
                        <p>Asr</p>
                        <p>04:00 PM</p>
                    </div>
                    <div className='w-32 h-20 bg-slate-100 rounded-md flex justify-center items-center flex-col'>
                        <p>Maghrib</p>
                        <p>05:37 PM</p>
                    </div>
                    <div className='w-32 h-20 bg-slate-100 rounded-md flex justify-center items-center flex-col'>
                        <p>Isha</p>
                        <p>07:30 PM</p>
                    </div>
                   
                </div>

            </div>
        </div>
        
        </>
    );
}

export default PrayerTime;
