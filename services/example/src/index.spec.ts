import { describe, expect, it, jest } from '@jest/globals';
import { app } from './server';
describe('Testing Index', () => {
  it('Should return status 200', () => {
    jest.mock('express', () => {
      app.get('/', (req, res) => {
        res.status(200).json([
          { id: 1, name: 'John' },
          { id: 2, name: 'Jane' }
        ]);
        expect(res.statusCode).toBe(200);
      });
    });
  });
});
