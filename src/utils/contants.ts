export const HEADERS = [
  'total_cases',
  'active_cases',
  'deaths',
  'recovered',
  'critical',
  'tested',
  'death_ratio',
  'recovery_ratio',
];

export const SUMMARY_API =
  'https://api.quarantine.country/api/v1/summary/latest';

export const REGION_DETAIL_API_STUB =
  'https://api.quarantine.country/api/v1/spots/month?region=';



export const COLOR_MAP = {
  'total_cases':{
    fillColor:"#a0aec0"
  },
  'active_cases':{
    fillColor:"#ed8936"
  },
  'deaths':{
    fillColor:"#f56565"
  },
  'recovered':{
    fillColor:"#38a169"
  },
  'critical':{
    fillColor:"#ed64a6"
  },
  'tested':{
    fillColor:"#a0aec0"
  },
  'death_ratio':{
    fillColor:"#b7791f"
  },
  'recovery_ratio':{
    fillColor:"#9f7aea"
  },
};