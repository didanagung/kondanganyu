import React, { useEffect, useRef, useState } from 'react';
import logo from '../img/1.jpg'
import basmalah from '../img/basmalah.png'

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
    <div>
        <div className='containerd rounded-b-xl shadow-2xl' id='main'>
            <div className='relative'>
                <img src={logo} alt="logo" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0'><path fill="#cbd5e1" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,234.7C672,224,768,160,864,117.3C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className='bg-slate-300 text-center p-5'>
                <h3 className='text-xl font-tape'>Undangan Pernikahan</h3>
                <h2 className='text-lg font-tape'> Senin 16 Mei 2022</h2>
                <p className='font-water text-5xl my-5'>Luul</p>
                <p className='font-water text-5xl my-5'>&</p>
                <p className='font-water text-5xl mb-5'>Billy</p>
            </div>
        </div>

        <div className='containerd rounded-xl mt-5 text-center' id='acara'>
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
            <div className='md:flex justify-evenly'>
                <div className='w-4/5 mx-auto md:w-2/5 bg-slate-200 shadow-2xl rounded-xl p-3 my-3 font-tape'>
                    <h2 className='text-3xl'>AKAD NIKAH</h2>
                    <h4 className='text-xl'>Senin, 16 Mei 2022</h4>
                    <p className='mb-4'>08.00 WIB</p>
                    <a href="/#" className='bg-emerald-500 p-2 rounded-full mt-4 text-white hover:bg-emerald-700'>Lihat Lokasi</a>
                </div>
                <div className='w-4/5 mx-auto md:w-2/5 bg-slate-200 shadow-2xl rounded-xl p-3 my-3 font-tape'>
                    <h2 className='text-3xl'>RESEPSI</h2>
                    <h4 className='text-xl'>Senin, 16 Mei 2022</h4>
                    <p className='mb-4'>10.00 WIB</p>
                    <a href="/#" className='bg-emerald-500 p-2 rounded-full mt-4 text-white hover:bg-emerald-700'>Lihat Lokasi</a>
                </div>
            </div>
            <p className='font-tape w-11/12 text-center mb-5'>❝ Kami memohon Do'a restu dari Bapak/Ibu/Saudara/i agar proses pernikahan kami berjalan lancar dan dirahmati oleh Allah SWT. ❞</p>
        </div>

        <div className='containerd mt-5 rounded-xl'>
            <h1 className='text-center font-peg text-5xl font-semibold m-5'>Kirim Ucapan</h1>
            <div className="font-tape">
                <label htmlFor="nama">Nama Anda : 
                    <input type="text" id='nama' className='mb-2 w-full rounded' />
                </label>
                <label htmlFor="ucapan">Ucapan : 
                    <textarea name="" id="ucapan" cols="60" rows="4" className='w-full rounded'></textarea>
                </label>
                <button className='bg-emerald-500 p-2 rounded-full mt-4 text-white hover:bg-emerald-700 block mx-auto'>Kirim</button>
            </div>
        </div>

        <div className="containerd mt-5 rounded-xl text-center">
            <h2 className='font-peg text-5xl font-semibold m-5'>Kami Yang Berbahagia</h2>
            <h1 className='font-water text-5xl m-10'>Luul & Billy</h1>
            <ul className='font-tape'>
                <li>Bapak Wardono / Ibu Sri Suryani</li>
                <li>Bapak Tomi Sutomo (Alm) / Ibu Entin Suhartini</li>
            </ul>
        </div>
        
    </div>
    );
}

export default Main;