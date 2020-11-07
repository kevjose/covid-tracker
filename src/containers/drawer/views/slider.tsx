import React, { useContext } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import StatsContainer from '../../../components/StatsContainer';
import StatsItem from '../../../components/StatsItem';
import { DrawerContext } from '../../../contexts/drawer';
import useFetch from '../../../hooks/useFetch';
import { HEADERS, REGION_DETAIL_API_STUB } from '../../../utils/contants';

export default function DrawerSlider() {
  const { state, dispatch }: any = useContext(DrawerContext);

  let { regionDetail } = state;
  const { status, data: regionMonthData, error } = useFetch<any>(
    regionDetail
      ? `${REGION_DETAIL_API_STUB}${regionDetail.name
          .toLowerCase()
          .split(' ')
          .join('_')}`
      : ''
  );
  const hideSlider = () => {
    dispatch({
      type: 'OPEN_SLIDER',
      payload: {
        slider: false,
      },
    });
  };

  const data =
    regionMonthData &&
    Object.entries(regionMonthData.data)
      .map(([key, value]) => {
        return { name: key, ...(value as object) };
      })
      .reverse();

  if (!regionDetail) {
    return <p>No Data!</p>;
  }

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto">
      <div className="w-full flex justify-center relative px-30px py-20px border-b border-gray-200">
        <button
          className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900"
          onClick={hideSlider}
          aria-label="close"
        >
          &larr;
        </button>

        <h3 className="text-16px leading-6 font-medium text-gray-900">
          Covid-19 details for - &nbsp;
          <span className="text-indigo-500">{regionDetail?.name}</span>
        </h3>
      </div>

      <StatsContainer variant="2by4">
        {HEADERS.map((item) => (
          <StatsItem
            statsSummary={regionDetail}
            property={item}
            key={item}
          ></StatsItem>
        ))}
      </StatsContainer>

      <div className="">
        {['idle', 'fetching'].includes(status) && <>Loading...</>}

        {error && <>An error occurred</>}

        {data && (
          <ResponsiveContainer width="95%" height={500}>
            <AreaChart data={data} margin={{ top: 0, left: 10, bottom: 100 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#feb2b2" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#feb2b2" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" angle={-45} textAnchor="end" />
              <YAxis hide={true} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="total_cases"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="deaths"
                stroke="#feb2b2"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
