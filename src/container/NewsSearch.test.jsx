import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import userEvent from '@testing-library/user-event';
import newApiJson from '../newsApi.json';
import { rest } from 'msw';
import { setupServer } from 'msw/node';


const server = setupServer(
  rest.get(
    `https://newsapi.org/v2/everything`,
    (req, res, ctx) => {

      return res(ctx.json(newApiJson));
    }
  )
);

describe('NewsSearch Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of articles dependent on search params', async () => {

    render(<NewsSearch />);
    await screen.findByText('Loading...');

    const ulEl = await screen.findByRole('list', { name: 'article list' });
    expect(ulEl).not.toBeEmptyDOMElement();

    const inputEl = await screen.findByLabelText('Search New Articles');
    userEvent.type(inputEl, 'Biden');

    const submitButton = await screen.findByRole('button', {
      name: 'search-articles',
    });
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen.getAllByText('Biden', { exact: false });
      expect(articles).toHaveLength(31);
    });
  });
});
