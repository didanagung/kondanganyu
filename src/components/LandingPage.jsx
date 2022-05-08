import React from 'react';

const LandingPage = () => {
    const cobaPopup = document.getElementById('popup');
    function getUrlVars(param=null) {
        if(param !== null)
        {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars[param];
        } 
        else 
        {
            return null;
        }
    }

    const namaUndangan =  decodeURI(getUrlVars("to"));

  return (
    <div className="w-full h-screen fixed z-10 bg-slate-600 opacity-95 flex" id='popup' >
        <div className='max-w-lg m-auto opacity-100 text-white font-tape text-center'>
            <p className='text-xl my-5'>Undangan Pernikahan</p>
            <h1 className='text-5xl font-water'>Luul dan Billy</h1>
            <p className='text-xl my-5'>Kepada Bapak/Ibu/Saudara/Saudari</p>
            <h2 className='text-4xl text-amber-500 mb-5'>{namaUndangan}</h2>
            <p>*Mohon maaf apabila kesalahan dalam menulis nama/gelar</p>
            <button className='bg-emerald-500 p-2 rounded-full my-5 hover:bg-emerald-700 block mx-auto' onClick={() => {
                cobaPopup.classList.add("hidden");
            }}>Buka Undangan</button>
        </div>
    </div>
  )
}

export default LandingPage