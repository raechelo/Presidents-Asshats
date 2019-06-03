import { fetchData } from './fetchData';

describe('fetchData', () => {

  let mockUrl;
  let mockPres;

  beforeEach(() => {
    mockUrl = 'someurl.com';
    mockPres = ['Georgie Wash', 'Abie Link'];
    
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPres)
      })
    });
  });

  it('should fetch data with the correct params', () => {
    fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should return a response if status is okay', async () => {
    let result = await fetchData(mockUrl);
    expect(result).toEqual(mockPres);
  });

  it('should return an error if the status is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    await expect(fetchData()).rejects.toEqual(Error())
  });
});