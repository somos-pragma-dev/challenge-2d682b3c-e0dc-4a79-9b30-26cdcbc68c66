import { loadImage } from '../src/utils/performanceUtils';

describe('Performance Utils', () => {
  test('loadImage should load an image', () => {
    loadImage('https://via.placeholder.com/150');
    expect(document.body.childNodes.length).toBeGreaterThan(0);
  });
});