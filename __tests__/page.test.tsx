import { render, screen } from '@testing-library/react';
import Page from '../app/page';
import { mockRepos } from './test.consts';

beforeEach(() => {
  fetchMock.resetMocks();
});

test('fetches and displays repos', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(mockRepos));
  render(<Page />);

  const repoElements = await screen.findAllByText(/Repo/i);
  expect(repoElements).toHaveLength(4);
});
