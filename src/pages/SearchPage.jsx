import { useState } from 'react';
import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query';
import { usePocketData } from '@/api/usePocketData';
import Header from '@/components/Header';
import HotelInfoCategory from '@/components/HotelInfoCategory';
import SearchHotel from '@/components/SearchHotel';
import SearchLeisure from '@/components/SearchLeisure';
import SearchTraffic from '@/components/SearchTraffic';
import Spinner from '@/components/Spinner';

function SearchPage() {
  const info = ['숙소', '레저/티켓', '교통/항공'];
  const [selectCategory, setSelectCategory] = useState('숙소');

  const { getListData } = usePocketData('hotel');
  const {
    data: hotelData,
    isLoading,
    isError,
  } = useQuery(['hotelSearch'], () => getListData());

  const { getListData: getLeisureListData } = usePocketData('leisure');
  const {
    data: leisureData,
  } = useQuery(['LeisurSearch'], () => getLeisureListData());


  const handleChangeCategory = (category) => {
    setSelectCategory(category);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div className='text-accent'>서버 에러 발생</div>;
  }

  return (
    <>
     <Helmet>
        <title>검색</title>
      </Helmet>
      <Header className='text-xl font-semibold' back='back' cart='cart' title='검색'/>
      <section className='px-4 pb-0'>
        <h1 className='sr-only'>검색페이지</h1>
      </section>
      <HotelInfoCategory
          info={info}
          className='font-semibold text-[1.1rem]'
          selectCategory={selectCategory}
          handleChangeCategory={handleChangeCategory}
        />
        {selectCategory === '숙소' && <SearchHotel data={hotelData}/>}
        {selectCategory === '레저/티켓' && <SearchLeisure data={leisureData}/>}
        {selectCategory === '교통/항공' && <SearchTraffic/>}
        
    </>
  )
}
export default SearchPage