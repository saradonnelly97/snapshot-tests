import { render, screen } from '@testing-library/react';
import GitHubCard from './GitHubCard.js';
import renderer from 'react-test-renderer'


test('renders correctly', () => {
  const tree = renderer.create(<GitHubCard />).toJSON()
  expect(tree).toMatchSnapshot()
});