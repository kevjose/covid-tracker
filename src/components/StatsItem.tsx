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

type SummaryProp = {
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

type StatsItemProps = {
  statsSummary: SummaryProp | any;
  property: string;
};
export const StatsItem: React.FC<StatsItemProps> = ({
  statsSummary,
  property,
}) => (
  <div className="overflow-hidden shadow-stats rounded-lg cursor-default bg-orange-200">
    <div className="px-2 py-5 sm:p-6">
      <div className="flex items-center">
        <div className="ml-2 w-0 flex-1">
          <dl>
            <dt className="text-12px leading-5 font-medium text-orange-600 truncate capitalize">
              {property.split('_').join(' ')}
            </dt>
            <dd className="flex items-baseline">
              <div className="text-2xl leading-8 font-semibold text-gray-900">
                {statsSummary[property]}
              </div>

              <div className="ml-2 flex items-baseline text-12px leading-5 font-semibold text-green">
                {!isNaN(+statsSummary.change[property]) &&
                Math.sign(+statsSummary.change[property]) === -1 ? (
                  <span className="text-green font-bold">
                    &darr; {statsSummary.change[property]}%
                  </span>
                ) : (
                  <span className="text-red-600 font-bold">
                    {!isNaN(+statsSummary.change[property]) && (
                      <>&uarr;{statsSummary.change[property]}%</>
                    )}
                  </span>
                )}

                <span className="sr-only">
                  {!isNaN(+statsSummary.change[property]) &&
                  Math.sign(+statsSummary.change[property]) === -1 ? (
                    'decreased by'
                  ) : (
                    <span className="text-red-600 font-bold">
                      {!isNaN(+statsSummary.change[property]) && 'increased by'}
                    </span>
                  )}
                </span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

export default StatsItem;
