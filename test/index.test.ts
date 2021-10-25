import { request } from './utils';

describe('App test', () => {
  test('Should request base route with success', async () => {
    const result = await request.get('/');

    expect(result.status).toBe(200);
    expect(result.text).toBe("It's working");
  });

  test('Should response organization with 200', async () => {
    const result = await request.get('/');

    expect(result.status).toBe(200);
    expect(result.text).toBe("It's working");
  });
});
