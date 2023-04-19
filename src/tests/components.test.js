import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import Homepage from '../components/Homepage';
import store from '../redux/store/store';

afterEach(cleanup);
describe('tests for components', () => {
  test('Snapshot test for Homepage', () => {
    const homepage = render(<Provider store={store}><Homepage /></Provider>);
    expect(homepage).toMatchSnapshot();
  });
});
