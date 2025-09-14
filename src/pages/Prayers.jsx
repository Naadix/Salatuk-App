import React, { useEffect, useState } from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import axios from 'axios'
const Prayers = () => {
  const wilayas = [
    { number: 1, name_ar: "أدرار", name_en: "Adrar" },
    { number: 2, name_ar: "الشلف", name_en: "Chlef" },
    { number: 3, name_ar: "الأغواط", name_en: "Laghouat" },
    { number: 4, name_ar: "أم البواقي", name_en: "Oum El Bouaghi" },
    { number: 5, name_ar: "باتنة", name_en: "Batna" },
    { number: 6, name_ar: "بجاية", name_en: "Bejaia" },
    { number: 7, name_ar: "بسكرة", name_en: "Biskra" },
    { number: 8, name_ar: "بشار", name_en: "Bechar" },
    { number: 9, name_ar: "البليدة", name_en: "Blida" },
    { number: 10, name_ar: "البويرة", name_en: "Bouira" },
    { number: 11, name_ar: "تمنراست", name_en: "Tamanrasset" },
    { number: 12, name_ar: "تبسة", name_en: "Tebessa" },
    { number: 13, name_ar: "تلمسان", name_en: "Tlemcen" },
    { number: 14, name_ar: "تيارت", name_en: "Tiaret" },
    { number: 15, name_ar: "تيزي وزو", name_en: "Tizi Ouzou" },
    { number: 16, name_ar: "الجزائر العاصمة", name_en: "Algiers" },
    { number: 17, name_ar: "الجلفة", name_en: "Djelfa" },
    { number: 18, name_ar: "جيجل", name_en: "Jijel" },
    { number: 19, name_ar: "سطيف", name_en: "Setif" },
    { number: 20, name_ar: "سعيدة", name_en: "Saida" },
    { number: 21, name_ar: "سكيكدة", name_en: "Skikda" },
    { number: 22, name_ar: "سيدي بلعباس", name_en: "Sidi Bel Abbes" },
    { number: 23, name_ar: "عنابة", name_en: "Annaba" },
    { number: 24, name_ar: "قالمة", name_en: "Guelma" },
    { number: 25, name_ar: "قسنطينة", name_en: "Constantine" },
    { number: 26, name_ar: "المدية", name_en: "Medea" },
    { number: 27, name_ar: "مستغانم", name_en: "Mostaganem" },
    { number: 28, name_ar: "المسيلة", name_en: "M'Sila" },
    { number: 29, name_ar: "معسكر", name_en: "Mascara" },
    { number: 30, name_ar: "ورقلة", name_en: "Ouargla" },
    { number: 31, name_ar: "وهران", name_en: "Oran" },
    { number: 32, name_ar: "البيض", name_en: "El Bayadh" },
    { number: 33, name_ar: "إليزي", name_en: "Illizi" },
    { number: 34, name_ar: "برج بوعريريج", name_en: "Bordj Bou Arreridj" },
    { number: 35, name_ar: "بومرداس", name_en: "Boumerdes" },
    { number: 36, name_ar: "الطارف", name_en: "El Tarf" },
    { number: 37, name_ar: "تندوف", name_en: "Tindouf" },
    { number: 38, name_ar: "تيسمسيلت", name_en: "Tissemsilt" },
    { number: 39, name_ar: "الوادي", name_en: "El Oued" },
    { number: 40, name_ar: "خنشلة", name_en: "Khenchela" },
    { number: 41, name_ar: "سوق أهراس", name_en: "Souk Ahras" },
    { number: 42, name_ar: "تيبازة", name_en: "Tipaza" },
    { number: 43, name_ar: "ميلة", name_en: "Mila" },
    { number: 44, name_ar: "عين الدفلى", name_en: "Ain Defla" },
    { number: 45, name_ar: "النعامة", name_en: "Naama" },
    { number: 46, name_ar: "عين تموشنت", name_en: "Ain Temouchent" },
    { number: 47, name_ar: "غرداية", name_en: "Ghardaia" },
    { number: 48, name_ar: "غليزان", name_en: "Relizane" },
    { number: 49, name_ar: "تيميمون", name_en: "Timimoun" },
    { number: 50, name_ar: "برج باجي مختار", name_en: "Bordj Badji Mokhtar" },
    { number: 51, name_ar: "أولاد جلال", name_en: "Ouled Djellal" },
    { number: 52, name_ar: "بني عباس", name_en: "Beni Abbes" },
    { number: 53, name_ar: "عين صالح", name_en: "In Salah" },
    { number: 54, name_ar: "عين قزام", name_en: "In Guezzam" },
    { number: 55, name_ar: "تقرت", name_en: "Touggourt" },
    { number: 56, name_ar: "جانت", name_en: "Djanet" },
    { number: 57, name_ar: "المغير", name_en: "El M'Ghair" },
    { number: 58, name_ar: "المنيعة", name_en: "El Menia" },
  ];
  const prayer_ar = {
    Fajr: "الفجر",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Maghrib: "المغرب",
    Isha: "العشاء",
  };

  const [date, setDate] = useState(new Date());
  const [wilaya, setWilaya] = useState('غرداية');
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${wilaya}&country=Algeria&method=19`;
  const [prayerTime, setPrayerTime] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [remainingTime, setRemainingTime] = useState('');

  // fetch prayerTime from API 
  useEffect(() => {
    const controller = new AbortController();
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000)
    const getPrayerTime = async () => {
      try {
        const res = await axios.get(url, { signal: controller.signal });
        const data = res.data;
        setPrayerTime(data.data.timings);
      } catch (error) {
        console.log('Error is :' + error)
      }
    }
    getPrayerTime()

    return () => {
      clearInterval(interval);
      controller.abort();
    }
  }, [wilaya])

  const dateString = date.toLocaleDateString('ar-DZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const timeString = date.toLocaleTimeString('en-DZ', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  const handleWilayaChange = (value) => {
    const wilayaSelected = wilayas.find((w) => w.name_en === value)
    setWilaya(wilayaSelected.name_ar);
  }

  // show remainingTime of next prayer
  useEffect(() => {
    if (!prayerTime) return;
    const updateRemainingTime = () => {
      const now = new Date();
      const prayersOrder = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
      let found = false;
      for (let prayer of prayersOrder) {
        const [hour, minute] = prayerTime[prayer].split(':').map(Number)
        const prayerDate = new Date(now);
        prayerDate.setHours(hour, minute, 0, 0);
        if (prayerDate > now) {

          setNextPrayer(prayer)
          const diff = prayerDate - now;
          const hrs = Math.floor(diff / 1000 / 60 / 60);
          const mins = Math.floor((diff / 1000 / 60) % 60);
          const secs = Math.floor((diff / 1000) % 60);

          setRemainingTime(`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
          found = true;
          break;
        }
      }
      if (!found) {
        setNextPrayer('Fajr');
        const [hour, minute] = prayerTime['Fajr'].split(':').map(Number);
        const tomorrowFajr = new Date(now);
        tomorrowFajr.setDate(now.getDate() + 1);
        tomorrowFajr.setHours(hour, minute, 0, 0);
        const diff = tomorrowFajr - now;
        const hrs = Math.floor(diff / 1000 / 60 / 60);
        const mins = Math.floor((diff / 1000 / 60) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        setRemainingTime(`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
      }
    }
    updateRemainingTime();
    const id = setInterval(updateRemainingTime, 1000)
    return () => clearInterval(id)
  }, [prayerTime])

  return (
    <section className='mt-36 flex flex-col justify-center items-center gap-4'>
      <div className=' flex md:flex-row flex-col  md:justify-between justify-center items-center w-full md:gap-0 gap-5'>
        <div className='flex flex-col-reverse justify-center gap-5'>
          <div className='flex justify-center items-center gap-2 text-gray-400 font-medium text-base md:text-lg'>
            <span>{dateString}</span>
            <span>| {timeString}</span>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <h2 className='bg-gradient-to-bl from-blue-700 to-emerald-400 text-transparent bg-clip-text font-semibold text-xl md:text-3xl'>{wilaya}</h2>
            <Select defaultValue='Ghardaia' onValueChange={handleWilayaChange}>
              <SelectTrigger className="w-[180px] font-medium text-black/90">
                <SelectValue placeholder=" الولاية " />
              </SelectTrigger>
              <SelectContent>
                {wilayas.map((wilaya) => (
                  <SelectItem key={wilaya.number} value={wilaya.name_en}> {wilaya.name_ar} </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='flex flex-row md:flex-col justify-center gap-3'>
          <h2 className='bg-gradient-to-tr from-blue-700 to-emerald-400 text-transparent bg-clip-text font-semibold text-xl md:text-3xl '>متبقي لصلاة {nextPrayer ? prayer_ar[nextPrayer] : '--'}</h2>
          <span className='text-gray-400 font-semibold text-base md:text-2xl'>{remainingTime}</span>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-6 my-5'>
        <div className='flex flex-col gap-3 w-[280px] h-[280px] p-3 shadow-lg rounded-lg bg-white cursor-pointer'>
          <div className='w-full  h-[160px] rounded-md'>
            <img src={image1} alt="الفجر" className='w-full h-full  object-cover rounded-md' />
          </div>
          <div className='flex flex-col justify-center gap-3'>
            <h3 className='text-base md:text-xl font-bold bg-gradient-to-r from-blue-700 to-emerald-400 bg-clip-text text-transparent'>الفجر</h3>
            <span className='text-black/60 font-bold text-xl'>{prayerTime?.Fajr}</span>
          </div>
        </div>
        <div className='flex flex-col gap-3 w-[280px] h-[280px] p-3 shadow-lg rounded-lg bg-white cursor-pointer'>
          <div className='w-full h-[160px] rounded-md'>
            <img src={image2} alt="الظهر" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='flex flex-col justify-center gap-3'>
            <h3 className='text-base md:text-xl font-bold bg-gradient-to-r from-blue-700 to-emerald-400 bg-clip-text text-transparent'>الظهر</h3>
            <span className='text-black/60 font-bold text-xl'>{prayerTime?.Dhuhr}</span>
          </div>
        </div>
        <div className='flex flex-col gap-3 w-[280px] h-[280px] p-3 shadow-lg rounded-lg bg-white cursor-pointer'>
          <div className='w-full h-[160px] rounded-md'>
            <img src={image3} alt="العصر" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='flex flex-col justify-center gap-3'>
            <h3 className='text-base md:text-xl font-bold bg-gradient-to-r from-blue-700 to-emerald-400 bg-clip-text text-transparent'>العصر</h3>
            <span className='text-black/60 font-bold text-xl'>{prayerTime?.Asr}</span>
          </div>
        </div>
        <div className='flex flex-col gap-3 w-[280px] h-[280px] p-3 shadow-lg rounded-lg bg-white cursor-pointer'>
          <div className='w-full h-[160px] rounded-md'>
            <img src={image4} alt="المغرب" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='flex flex-col justify-center gap-3'>
            <h3 className='text-base md:text-xl font-bold bg-gradient-to-r from-blue-700 to-emerald-400 bg-clip-text text-transparent'>المغرب</h3>
            <span className='text-black/60 font-bold text-xl'>{prayerTime?.Maghrib}</span>
          </div>
        </div>
        <div className='flex flex-col gap-3 w-[280px] h-[280px] p-3 shadow-lg rounded-lg bg-white cursor-pointer'>
          <div className='w-full  h-[160px] rounded-md'>
            <img src={image5} alt="العشاء" className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='flex flex-col justify-center gap-3'>
            <h3 className='text-base md:text-xl font-bold bg-gradient-to-r from-blue-700 to-emerald-400 bg-clip-text text-transparent'>العشاء</h3>
            <span className='text-black/60 font-bold text-xl'>{prayerTime?.Isha}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prayers