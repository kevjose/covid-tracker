import React from 'react';

type ChangeProps = {
  total_cases: string;
  active_cases: string;
  deaths: string;
  recovered: string;
  critical: string;
  tested: string;
  death_ratio: string;
  recovery_ratio: string;
};

type RegionSummaryProp = {
  total_cases: string;
  active_cases: string;
  deaths: string;
  recovered: string;
  critical: string;
  tested: string;
  death_ratio: string;
  recovery_ratio: string;
  change: ChangeProps;
};

type TableItemProps = {
  regionSummary: RegionSummaryProp | any;
  headerItems: any;
  addFavorite: Function;
  showSlider: Function;
};
export const Table: React.FC<TableItemProps> = ({
  regionSummary,
  headerItems,
  addFavorite,
  showSlider,
}) => (
  <div className="min-w-full overflow-x-auto shadow-float overflow-hidden sm:rounded-lg">
    <table className="min-w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 bg-indigo-100 text-left text-12px leading-4 font-medium text-indigo-700 capitalize">
            Region
          </th>
          {headerItems.map((statHeader: any) => {
            return (
              <th
                key={statHeader}
                className="px-6 py-3 bg-indigo-100 text-left text-12px leading-4 font-medium text-indigo-700 capitalize"
              >
                {statHeader.split('_').join(' ')}
              </th>
            );
          })}

          <th className="px-6 py-3 bg-indigo-100 text-left text-12px leading-4 font-medium text-indigo-700 capitalize"></th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {regionSummary.map((item: any) => (
          <tr
            className="bg-white border-b border-gray-200 cursor-pointer"
            key={item.name}
            role="row"
          >
            <td
              onClick={() => addFavorite(item.name)}
              className="px-6 py-4 whitespace-no-wrap text-14px leading-5 text-gray-400 cursor-default"
            >
              <span className="text-gray-900 font-medium">{item.name}</span>
              {item.favorite ? (
                <span className="text-orange-400">&nbsp; &#9733;</span>
              ) : (
                <span>&nbsp; &#9733;</span>
              )}
            </td>
            {headerItems.map((statType: any) => {
              return (
                <td
                  key={statType}
                  className="px-6 py-4 whitespace-no-wrap text-14px leading-5 text-gray-500"
                  onClick={() => showSlider(item)}
                >
                  <span className="text-gray-900 font-medium">
                    {item[statType]} &nbsp;{' '}
                    {!isNaN(+item.change[statType]) &&
                    Math.sign(+item.change[statType]) === -1 ? (
                      <span className="text-green font-bold">
                        &darr; {item.change[statType]}%
                      </span>
                    ) : (
                      <span className="text-red-600 font-bold">
                        {!isNaN(+item.change[statType]) && (
                          <>&uarr; {item.change[statType]}%</>
                        )}
                      </span>
                    )}
                  </span>
                </td>
              );
            })}

            <td
              onClick={() => showSlider(item)}
              className="px-6 py-4 text-right whitespace-no-wrap text-14px leading-5 text-gray-500 cursor-pointer"
            >
              &rarr;
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
