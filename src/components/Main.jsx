import React, { useEffect, useRef, useState } from 'react';
import basmalah from '../img/basmalah2.png';
import Form from './Form';
import LandingPage from './LandingPage';

const Main = () => {
    const [waktuHari, setWaktuHari] = useState('00');
    const [waktuJam, setWaktuJam] = useState('00');
    const [waktuMenit, setWaktuMenit] = useState('00');
    const [waktuDetik, setWaktuDetik] = useState('00');

    let interval = useRef();

    const starTimer = () => {
        const countDownDate = new Date("May 16, 2022 08:00:00").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
            const jam = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const detik = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setWaktuHari(hari);
                setWaktuJam(jam);
                setWaktuMenit(menit);
                setWaktuDetik(detik);
            }

        }, 1000);
        
    };

    useEffect(() => {
        starTimer();
        return () => {
            clearInterval(interval);
        };
    });


    return (
    <div className='bg-slate-200'>
        <LandingPage />
        <div className='containerd rounded-b-xl shadow-2xl p-0' id='main'>
            <div className='text-center p-5 bg-coba4 bg-no-repeat bg-center'>
                <h3 className='text-xl font-tape mt-32'>Undangan Pernikahan</h3>
                <h1 className='font-water text-5xl my-5'>Luul</h1>
                <h1 className='font-water text-5xl my-5'>&</h1>
                <h1 className='font-water text-5xl mb-40'>Billy</h1>
            </div>
        </div>

        <div className='containerd rounded-xl mt-5 text-center relative ' id='acara'>
            <img src={basmalah} alt="basmalah" className='w-2/3 mx-auto my-5 text-black' />
            <h1 className='font-peg text-4xl'>Assalamu'alaikum Warahmatullahi Wabarakatuh</h1>
            <p className='font-tape'>Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami yang insya Allah akan dilaksanakan pada :</p>
            <div className='flex justify-evenly my-5'>
                <div className='jam'>
                    <div className='m-auto'>
                        <h3 className='font-tape text-2xl'>{waktuHari}</h3>
                        <p className='font-tape'>Hari</p>
                    </div>
                </div>
                <div className='jam'>
                    <div className='m-auto'>
                        <h3 className='font-tape text-2xl'>{waktuJam}</h3>
                        <p className='font-tape'>Jam</p>
                    </div>
                </div>
                <div className='jam'>
                    <div className='m-auto'>
                        <h3 className='font-tape text-2xl'>{waktuMenit}</h3>
                        <p className='font-tape'>Menit</p>
                    </div>
                </div>
                <div className='jam'>
                    <div className='m-auto'>
                        <h3 className='font-tape text-2xl'>{waktuDetik}</h3>
                        <p className='font-tape'>Detik</p>
                    </div>
                </div>
            </div>
            <h3 className='font-semibold font-tape text-2xl mt-5'>RANGKAIAN ACARA : </h3>
            <div className='sm:flex justify-evenly'>
                <div className='w-4/5 sm:w-3/5 mx-auto bg-slate-200 shadow-2xl rounded-xl p-3 my-3 font-tape'>
                    <h2 className='text-3xl mt-5'>AKAD NIKAH</h2>
                    <h4 className='text-xl'>Senin, 16 Mei 2022</h4>
                    <p className='mb-4'>07.30 WIB</p>
                    <a href="https://goo.gl/maps/PQhUjLN1nuP18xun8" target="_blank" rel='noreferrer' className='bg-emerald-500 p-2 rounded-full my-5 text-white hover:bg-emerald-700 block w-2/4 mx-auto'>Lihat Lokasi</a>
                </div>
                <div className='w-4/5 sm:w-3/5 mx-auto bg-slate-200 shadow-2xl rounded-xl p-3 my-3 font-tape'>
                    <h2 className='text-3xl mt-5'>RESEPSI</h2>
                    <h4 className='text-xl'>Senin, 16 Mei 2022</h4>
                    <p className='mb-4'>09.00 WIB</p>
                    <a href="https://goo.gl/maps/PQhUjLN1nuP18xun8" target="_blank" rel='noreferrer' className='bg-emerald-500 p-2 rounded-full my-5 text-white hover:bg-emerald-700 block w-2/4 mx-auto'>Lihat Lokasi</a>
                </div>
            </div>
            <p className='font-tape w-11/12 text-center mb-5'>❝ Kami memohon Do'a restu dari Bapak/Ibu/Saudara/i agar proses pernikahan kami berjalan lancar dan dirahmati oleh Allah SWT. ❞</p>
        </div>

        <div className='containerd mt-5 rounded-xl' id='ucapan'>
        <Form />
        </div>

        <div className="containerd mt-5 rounded-xl text-center pb-20" id='penutup'>
            <p className='font-tape'>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir <span className='font-semibold'>QS. Ar-Rum Ayat 21</span></p>
            <h2 className='font-peg text-5xl font-semibold m-5'>Kami Yang Berbahagia</h2>
            <h1 className='font-water text-5xl m-10'>Luul & Billy</h1>
            <p className='font-tape font-semibold'>Keluarga Besar</p>
            <ul className='font-tape'>
                <li>Bapak Wardono / Ibu Sri Suryani</li>
                <li>Bapak Tomi Sutomo (Alm) / Ibu Entin Suhartini</li>
            </ul>
        </div>

    </div>
    );
}

export default Main;