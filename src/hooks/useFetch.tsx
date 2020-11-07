import { useEffect, useReducer, useRef } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface State<T> {
  status: 'init' | 'fetching' | 'error' | 'fetched';
  data?: T;
  error?: string;
}
interface Cache<T> {
  [url: string]: T;
}
// discriminated union type
type Action<T> =
  | { type: 'request' }
  | { type: 'success'; payload: T }
  | { type: 'failure'; payload: string };
export default function useFetch<T = unknown>(
  url?: string,
  options?: AxiosRequestConfig
): State<T> {
  const cache = useRef<Cache<T>>({});
  let cancelRequest = useRef<Boolean>(false);
  const initialState: State<T> = {
    status: 'init',
    error: undefined,
    data: undefined,
  };
  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'request':
        return { ...initialState, status: 'fetching' };
      case 'success':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'failure':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      dispatch({ type: 'request' });
      if (cache.current[url]) {
        dispatch({ type: 'success', payload: cache.current[url] });
      } else {
        try {
          const response = await axios(url, options);
          cache.current[url] = response.data;

          if (cancelRequest.current) return;

          dispatch({ type: 'success', payload: response.data });
        } catch (error) {
          if (cancelRequest.current) return;

          dispatch({ type: 'failure', payload: error.message });
        }
      }
    };
    fetchData();
    return () => {
      cancelRequest.current = true;
    };
  }, [url, options]);
  return state;
}
