import React, { useContext, useState } from 'react';

import StatsContainer from '../components/StatsContainer';
import StatsItem from '../components/StatsItem';
import HomeLoader from '../components/HomeLoader';
import Table from '../components/Table';
import { DrawerContext } from '../contexts/drawer';
import useLocalStorage from '../hooks/useLocalStorage';
import { formatRegionSummary, formatStatsSummary } from '../utils/summary';
import { HEADERS, SUMMARY_API } from '../utils/contants';

import useFetch from '../hooks/useFetch';

const Home: React.FC = () => {
  const [showFavorites, setShowFavorites] = useLocalStorage(
    'showFavorites',
    false
  );
  const { dispatch }: any = useContext(DrawerContext);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [searchTerm, setSearchTerm] = useState('');

  const { status, data: summaryData, error } = useFetch<any>(SUMMARY_API);
  const showSlider = (regionDetail: any) => {
    dispatch({
      type: 'SET_REGION_DETAIL',
      payload: {
        regionDetail,
      },
    });
    dispatch({
      type: 'OPEN_SLIDER',
      payload: {
        slider: true,
      },
    });
  };

  const addFavorite = (name: string) => {
    if (favorites.indexOf(name) === -1) {
      let newFavorites = favorites.concat(name);
      setFavorites(newFavorites);
    } else {
      setFavorites(favorites.filter((i: any) => i !== name));
    }
  };

  let statsSummary: any;
  let regionSummary: any;
  if (summaryData?.status === 200) {
    statsSummary = formatStatsSummary(summaryData);
    regionSummary = formatRegionSummary(
      summaryData,
      favorites,
      showFavorites,
      searchTerm
    );
  }

  if (['init', 'fetching'].includes(status)) {
    return (
      <div className="w-full my-10 lg:mt-60px px-4 md:px-35px">
        <h3 className="text-16px leading-6 font-medium text-gray-900 flex justify-between">
          World Covid-19 Stats &nbsp;
        </h3>
        <HomeLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full my-10 lg:mt-60px px-4 md:px-35px">
        <h3 className="text-16px leading-6 font-medium text-gray-900 flex justify-between">
          World Covid-19 Stats &nbsp;
        </h3>
        <p data-testid="error">Error Occurred</p>
      </div>
    );
  }

  return (
    <div className="w-full my-10 lg:mt-60px px-4 md:px-35px">
      <h3 className="text-16px leading-6 font-medium text-gray-900 flex justify-between">
        World Covid-19 Stats &nbsp;
        <span className="text-indigo-500" role="status">
          Last Updated &nbsp;
          {new Date(summaryData?.data.generated_on * 1000).toDateString()}
        </span>
      </h3>

      <StatsContainer variant="4by2">
        {HEADERS.map((item) => (
          <StatsItem
            statsSummary={statsSummary}
            property={item}
            key={item}
          ></StatsItem>
        ))}
      </StatsContainer>

      <div className="mt-20">
        <div className="">
          <div className="flex justify-between min-w-full">
            <div>
              <label htmlFor="email" className="sr-only">
                Search
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  id="email"
                  className="border border-orange-400 rounded px-1 py-2 block font-light text-sm sm:leading-5 focus:outline-none hover:border-orange-600 w-full placeholder-orange-600"
                  placeholder="Search by region..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-1 px-2 border border-orange-500 hover:border-transparent rounded focus:outline-none"
              onClick={() => setShowFavorites(!showFavorites)}
            >
              {showFavorites ? 'Hide' : 'Show'} Favorites
            </button>
          </div>
          <div className="flex flex-col mt-2">
            <div className="min-w-full overflow-x-auto shadow-float overflow-hidden sm:rounded-lg">
              <Table
                regionSummary={regionSummary}
                headerItems={HEADERS}
                addFavorite={addFavorite}
                showSlider={showSlider}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
