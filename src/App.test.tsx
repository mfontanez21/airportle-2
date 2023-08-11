import { describe, expect, test } from 'vitest';
import App from './App';
import { useStore } from './store';
import { render, screen } from './test/test-utils';

describe('App', () => {
  test('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Airportle 2.0/i)).toBeInTheDocument();
  });

  it('shows empty state', (done) => {
    useStore.setState({ rows: [] });
    render(<App />);
  
    // Introduce a slight delay before making assertions
    setTimeout(() => {
      expect(screen.queryByText('Game Over')).toBeNull();
      expect(document.querySelectorAll('main div')).toHaveLength(3);
      expect(document.querySelector('main')?.textContent).toEqual('');
  
      done(); // Signal that the test is complete
    }, 100); // Adjust the delay as needed
  });

  it('shows one row of guesses', () => {
    useStore.setState({ rows: [{guess:'BOS'}] });
    render(<App />);
    
    expect(document.querySelector('main')?.textContent).toEqual('BOS');
  });

  it('shows game over state', () => {
    useStore.setState({ rows: Array(6).fill("BOS") });
    render(<App />);
    
    // expect(document.querySelector('main')?.textContent).toEqual('BOS');
    expect(screen.getByText('Game Over!')).toBeInTheDocument();
  });
});
