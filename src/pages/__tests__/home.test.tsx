import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import Home from '../home';
import { DrawerProvider } from '../../contexts/drawer';
import { SUMMARY_API } from '../../utils/contants';

const server = setupServer(
  rest.get(SUMMARY_API, (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        type: 'stack',
        data: {
          summary: {
            total_cases: 49630443,
            active_cases: 13266744,
            deaths: 1248988,
            recovered: 35114711,
            critical: 89170,
            tested: 802395441,
            death_ratio: 0.0251657636825849,
            recovery_ratio: 0.7075236261743624,
          },
          change: {
            total_cases: 639761,
            active_cases: 319834,
            deaths: 9758,
            recovered: 310169,
            critical: 746,
            tested: 6286548,
            death_ratio: -0.00012945470200505238,
            recovery_ratio: -0.0029082473806945064,
          },
          generated_on: 1604696403,
          regions: {
            usa: {
              name: 'USA',
              iso3166a2: 'US',
              iso3166a3: 'USA',
              iso3166numeric: '',
              total_cases: 10015076,
              active_cases: 3399075,
              deaths: 241827,
              recovered: 6374174,
              critical: 18181,
              tested: 154459461,
              death_ratio: 0.024146297042578608,
              recovery_ratio: 0.6364578761059826,
              change: {
                total_cases: 140448,
                active_cases: 88820,
                deaths: 1281,
                recovered: 50347,
                death_ratio: -0.00021370922803735926,
                recovery_ratio: -0.003953793072846268,
              },
            },
            india: {
              name: 'India',
              iso3166a2: 'IN',
              iso3166a3: 'IND',
              iso3166numeric: '',
              total_cases: 8460773,
              active_cases: 516734,
              deaths: 125605,
              recovered: 7818434,
              critical: 8944,
              tested: 115429095,
              death_ratio: 0.014845570256996612,
              recovery_ratio: 0.9240803411224956,
              change: {
                total_cases: 49739,
                active_cases: -4508,
                deaths: 576,
                recovered: 53671,
                death_ratio: -0.000019308424982321035,
                recovery_ratio: 0.0009164352341113347,
              },
            },
          },
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders Home', () => {
  render(
    <DrawerProvider>
      <Home />
    </DrawerProvider>
  );
  const headerElement = screen.getByText('World Covid-19 Stats');
  expect(headerElement).toBeInTheDocument();
});

test('shows loading screen', async () => {
  render(<Home />);
  expect(screen.getByText('Loading stats.')).toBeInTheDocument();
});

test('shows error on api  error', async () => {
  server.use(
    rest.get(SUMMARY_API, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<Home />);
  await screen.findByTestId('error');
  expect(screen.getByText('Error Occurred')).toBeInTheDocument();
});

test('shows search bar on data load complete', async () => {
  render(<Home />);
  await screen.findByLabelText('Search');
  expect(screen.getByText('India')).toBeInTheDocument();
});
