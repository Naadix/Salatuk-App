import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

const Adhkar = () => {
  const url = 'https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json';
  const [selectAdhkar, setSelectAdhkar] = useState('sabah');
  const [adhkarsabah, setAdhkarSabah] = useState(null);
  const [adhkarmasaa, setAdhkarMasaa] = useState(null);
  const [adhkarnawm, setAdhkarNawm] = useState(null);
  const [tassabih, setTassabih] = useState(null)

  useEffect(() => {
    const controller = new AbortController();
    const getAdhkar = async () => {
      try {
        const res = await axios.get(url, { signal: controller.signal });
        const data = res.data;
        const dataArr = Object.values(data);
        console.log(dataArr)
        setAdhkarSabah(dataArr[0]);
        setAdhkarMasaa(dataArr[1]);
        setTassabih(dataArr[3]);
        setAdhkarNawm(dataArr[4]);
      } catch (error) {
        console.log('error is ' + error);
      }
    }
    getAdhkar();
    return () => controller.abort();
  }, []);


  return (
    <section className='mt-24 mb-5 flex flex-col justify-center items-center gap-6'>
      <div className='flex flex-wrap justify-center items-center gap-4 md:gap-12'>
        <button className='relative py-3 px-5 md:py-5 md:px-8 w-[130px] text-base md:w-[190px] font-semibold md:text-2xl z-10 overflow-x-hidden  text-white bg-blue-600 rounded-lg after:absolute after:content-[""] after:top-0 after:left-0 after:w-0 after:h-full after:-z-10 after:bg-blue-700 after:rounded-lg after:hover:w-full after:transition-all after:duration-500 ' onClick={() => setSelectAdhkar('sabah')}>أذكار الصباح</button>
        <button className='relative py-3 px-5 md:py-5 md:px-8 w-[130px] text-base md:w-[190px] font-semibold md:text-2xl z-10 overflow-x-hidden  text-white bg-blue-600 rounded-lg after:absolute after:content-[""] after:top-0 after:left-0 after:w-0 after:h-full after:-z-10 after:bg-blue-700 after:rounded-lg after:hover:w-full after:transition-all after:duration-500 ' onClick={() => setSelectAdhkar('masaa')}>أذكار المساء</button>
        <button className='relative py-3 px-5 md:py-5 md:px-8 w-[130px] text-base md:w-[190px] font-semibold md:text-2xl z-10 overflow-x-hidden  text-white bg-blue-600 rounded-lg after:absolute after:content-[""] after:top-0 after:left-0 after:w-0 after:h-full after:-z-10 after:bg-blue-700 after:rounded-lg after:hover:w-full after:transition-all after:duration-500 ' onClick={() => setSelectAdhkar('nawm')}>أذكار النوم</button>
        <button className='relative py-3 px-5 md:py-5 md:px-8 w-[130px] text-base md:w-[190px] font-semibold md:text-2xl z-10 overflow-x-hidden  text-white bg-blue-600 rounded-lg after:absolute after:content-[""] after:top-0 after:left-0 after:w-0 after:h-full after:-z-10 after:bg-blue-700 after:rounded-lg after:hover:w-full after:transition-all after:duration-500 ' onClick={() => setSelectAdhkar('tassabih')}>تسابيح</button>
      </div>
      <div>
        {selectAdhkar === 'sabah' && (
          adhkarsabah ?
            <div className='flex flex-col gap-3 justify-center items-center '>
              {
                adhkarsabah.slice(1).map((a, index) => (
                  a.content !== 'stop' &&
                  <div key={index} className='  bg-white w-full rounded-lg py-3 md:py-6 px-3 flex flex-col justify-center gap-4 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='bg-sky-600 text-white p-4 font-bold text-sm md:text-lg rounded-md'>
                        {a.category}
                      </div>
                      <div className=' botoom text-white shadow-xl px-1 bg-sky-600 rounded-full w-16 h-16 text-center flex justify-center items-center text-xs md:text-sm font-bold' > عدد المرات {a.count}</div>
                    </div>
                    <div className='text-center'>
                      <h3 className=' text-base md:text-2xl font-semibold text-black'>{a.content}</h3>
                    </div>
                    {a.description !== '' &&
                      <div className='bg-sky-600 p-2 md:p-4 text-center rounded-lg text-sm md:text-xl font-semibold text-white'>
                        {a.description}
                      </div>
                    }
                  </div>
                ))
              }
            </div>
            : '--'
        )}
        {selectAdhkar === 'masaa' && (
          adhkarmasaa ?
            <div className='flex flex-col gap-3 justify-center items-center '>
              {
                adhkarmasaa.map((a, index) => (
                  a.content !== 'stop' &&
                  <div key={index} className='  bg-white w-full rounded-lg py-3 md:py-6 px-3 flex flex-col justify-center gap-4 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='bg-sky-600 text-white p-4 font-bold text-sm md:text-lg rounded-md'>
                        {a.category}
                      </div>
                      <div className=' botoom text-white shadow-xl px-1 bg-sky-600 rounded-full w-16 h-16 text-center flex justify-center items-center text-xs md:text-sm font-bold'> عدد المرات {a.count}</div>
                    </div>
                    <div className='text-center'>
                      <h3 className=' text-base md:text-2xl font-semibold text-black'>{a.content}</h3>
                    </div>
                    {a.description !== '' &&
                      <div className='bg-sky-600 p-4 text-center rounded-lg text-sm md:text-xl font-semibold text-white'>
                        {a.description}
                      </div>
                    }
                  </div>
                ))
              }
            </div>
            : '--'
        )}
        {selectAdhkar === 'nawm' && (
          adhkarnawm ?
            <div className='flex flex-col gap-3 justify-center items-center '>
              {
                adhkarnawm.map((a, index) => (
                  a.content !== 'stop' &&
                  <div key={index} className='  bg-white w-full rounded-lg py-3 md:py-6 px-3 flex flex-col justify-center gap-4 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='bg-sky-600 text-white p-4 font-bold text-sm md:text-lg rounded-md'>
                        {a.category}
                      </div>
                      <div className=' botoom text-white shadow-xl bg-sky-600 rounded-full  px-1 w-16 h-16 text-center flex justify-center items-center text-xs md:text-sm font-bold'> عدد المرات {a.count}</div>
                    </div>
                    <div className='text-center'>
                      <h3 className=' text-base md:text-2xl font-semibold text-black'>{a.content}</h3>
                    </div>
                    {a.description !== '' &&
                      <div className='bg-sky-600 p-4 text-center rounded-lg text-sm md:text-xl font-semibold text-white'>
                        {a.description}
                      </div>
                    }
                  </div>
                ))
              }
            </div>
            : '--'
        )}
        {selectAdhkar === 'tassabih' && (
          tassabih ?
            <div className='flex flex-col gap-3 justify-center items-center '>
              {
                tassabih.map((a, index) => (
                  a.content !== 'stop' &&
                  <div key={index} className='  bg-white w-full rounded-lg py-3 md:py-6 px-3 flex flex-col justify-center gap-4 shadow-lg cursor-pointer hover:scale-105 transition-all duration-300'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='bg-sky-600 text-white p-4 font-bold text-sm md:text-lg rounded-md'>
                        {a.category}
                      </div>
                      <div className=' botoom text-white shadow-xl bg-sky-600 rounded-full  px-1 w-16 h-16 text-center flex justify-center items-center text-xs md:text-sm font-bold'> عدد المرات {a.count}</div>
                    </div>
                    <div className='text-center'>
                      <h3 className=' text-base md:text-2xl font-semibold text-black'>{a.content}</h3>
                    </div>
                    {a.description !== '' &&
                      <div className='bg-sky-600 p-4 text-center rounded-lg text-sm md:text-xl font-semibold text-white'>
                        {a.description}
                      </div>
                    }
                  </div>
                ))
              }
            </div>
            : '--'
        )}
      </div>
    </section>
  )
}

export default Adhkar