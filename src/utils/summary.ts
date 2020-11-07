let nf = new Intl.NumberFormat();

type ChangeProps = {
  total_cases: number;
  active_cases: number;
  deaths: number;
  recovered: number;
  critical: number;
  tested: number;
  death_ratio: number;
  recovery_ratio: number;
};

type SummaryProp = {
  name?: string;
  total_cases: number;
  active_cases: number;
  deaths: number;
  recovered: number;
  critical: number;
  tested: number;
  death_ratio: number;
  recovery_ratio: number;
  change: ChangeProps;
};

type ResponseDataProp = {
  summary: SummaryProp;
  change: ChangeProps;
  regions: [SummaryProp];
};

type ResponseProp = {
  data: ResponseDataProp;
};

export const formatStatsSummary = (responseData: ResponseProp) => {
  let {
    total_cases,
    active_cases,
    deaths,
    recovered,
    critical,
    tested,
    death_ratio,
    recovery_ratio,
  } = responseData.data.summary;
  let change = responseData.data.change;

  return {
    total_cases: nf.format(total_cases),
    active_cases: nf.format(active_cases),
    deaths: nf.format(deaths),
    recovered: nf.format(recovered),
    critical: nf.format(critical),
    tested: nf.format(tested),
    death_ratio: nf.format(death_ratio),
    recovery_ratio: nf.format(recovery_ratio),
    change: {
      total_cases: ((change.total_cases / total_cases) * 100).toFixed(2),
      active_cases: ((change.active_cases / active_cases) * 100).toFixed(2),
      deaths: ((change.deaths / deaths) * 100).toFixed(2),
      recovered: ((change.recovered / recovered) * 100).toFixed(2),
      critical: ((change?.critical / critical) * 100).toFixed(2),
      tested: ((change?.tested / tested) * 100).toFixed(2),
      death_ratio: ((change.death_ratio / death_ratio) * 100).toFixed(2),
      recovery_ratio: ((change.recovery_ratio / recovery_ratio) * 100).toFixed(
        2
      ),
    },
  };
};

export const formatRegionSummary = (
  responseData: ResponseProp,
  favorites: any,
  showFavorites: Boolean,
  searchTerm: string
) =>
  Object.entries(responseData.data.regions)
    .map(([_, value]) => {
      let {
        name,
        total_cases,
        active_cases,
        deaths,
        recovered,
        critical,
        tested,
        death_ratio,
        recovery_ratio,
        change,
      } = value;
      if (showFavorites && favorites?.indexOf(name) === -1) return null;
      if (
        searchTerm &&
        !name?.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
        return null;
      return {
        name,
        favorite: favorites?.indexOf(name) === -1 ? false : true,
        total_cases: nf.format(total_cases),
        active_cases: nf.format(active_cases),
        deaths: nf.format(deaths),
        recovered: nf.format(recovered),
        critical: nf.format(critical),
        tested: nf.format(tested),
        death_ratio: nf.format(death_ratio),
        recovery_ratio: nf.format(recovery_ratio),
        change: {
          total_cases: ((change.total_cases / total_cases) * 100).toFixed(2),
          active_cases: ((change.active_cases / active_cases) * 100).toFixed(2),
          deaths: ((change.deaths / deaths) * 100).toFixed(2),
          recovered: ((change.recovered / recovered) * 100).toFixed(2),
          critical: ((change.critical / critical) * 100).toFixed(2),
          tested: ((change.tested / tested) * 100).toFixed(2),
          death_ratio: ((change.death_ratio / death_ratio) * 100).toFixed(2),
          recovery_ratio: (
            (change.recovery_ratio / recovery_ratio) *
            100
          ).toFixed(2),
        },
      };
    })
    .filter(Boolean);
