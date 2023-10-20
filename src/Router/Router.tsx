import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '..//Auth/Login/Login';
import Register from '..//Auth/Register/Register';
import Home from '../Home/Home';
import Main from '../Pages/Main/Main';
import PrayerTime from '../Pages/PrayerTime/PrayerTime';
import AlQuran from '../Pages/AlQuran/AlQuran';
import Duas from '../Pages/Duas/Duas';
import IslamicCalender from '../Pages/Islamicalender/IslamicCalender';
import IslamicGallery from '../Pages/IslamicGallery/IslamicGallery';
import PrayerBook from '../Pages/Prayerbook/PrayerBook';
import IslamicPlaces from '../Pages/IslamicPlaces/IslamicPlaces';
import Knowledge from '../Pages/Knowledge/Knowledge';
import ImageGalleryForm from '../Pages/IslamicGallery/ImagesGalleryForm';
import DuasForm from '../Pages/Duas/DuasForm';

interface RouterProps { }

const Router: FC<RouterProps> = () => {
    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/home' element={<Home />}>
                        <Route path='home' element={<Main />} />
                        <Route path='prayertime' element={<PrayerTime />} />
                        <Route path='islamiccalender' element={<IslamicCalender />} />
                        <Route path='alquran' element={<AlQuran />} />
                        <Route path='duas' element={<Duas />} />
                        <Route path='duasform' element={<DuasForm/>}/>
                        <Route path='duasform/:id' element={<DuasForm/>}/>
                        <Route path='islamicgallery' element={<IslamicGallery />} />
                        <Route path='imagegalleryform' element={<ImageGalleryForm />} />
                        {/* <Route path='imagegalleryform/:id' element={<ImageGalleryForm />} /> */}
                        <Route path='prayerbook' element={<PrayerBook />} />
                        <Route path='islamicplaces' element={<IslamicPlaces />} />
                        <Route path='knowledge' element={<Knowledge />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;
