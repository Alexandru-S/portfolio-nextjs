import { render, screen } from '@testing-library/react';
import Page from '../app/page';

beforeEach(() => {
  fetchMock.resetMocks();
});

test('fetches and displays repos', async () => {
  const mockRepos = [
    {
      id: 1,
      name: 'Repo 1',
      language: 'TypeScript',
      clone_url: 'https://example.com/repo1',
      updated_at: '2024-01-01T12:00:00Z',
    },
    {
      id: 2,
      name: 'Repo 2',
      language: 'JavaScript',
      clone_url: 'https://example.com/repo2',
      updated_at: '2024-01-02T12:00:00Z',
    },
  ];

  fetchMock.mockResponseOnce(JSON.stringify(mockRepos));
  render(<Page />);

  const repoElements = await screen.findAllByText(/Repo/i);
  expect(repoElements).toHaveLength(4);
});
