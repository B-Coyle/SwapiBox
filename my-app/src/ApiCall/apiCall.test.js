import React from 'react';
import {shallow} from 'enzyme';
import { fetchMovie, fetchPeople, fetchHomeworld, fetchResidents } from '../ApiCall/apiCalls.js';
import { isMainThread } from 'worker_threads';

describe('apiCalls', () => {
  let mockFilmResponse;
  let mockFilm;
  let mockFetchFilm = jest.fn()


  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFilm)
    }));


    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFilmResponse)
      })
    })
  })

  it('should be called with correct params', async () => {
    const expected = [
      'https://swapi.co/api/films',
    ]
    await fetchMovie();
    mockFetchFilm(mockFilm);

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return a parsed response if status is ok', async () => {

    const result = await fetchMovie();
    expect(result).toEqual(mockFilm);
  });


  it('should return an error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
    await expect(fetchMovie()).rejects.toEqual(Error('Error loading movies'))
  })
});


describe('fetchPeople', () => {
  let mockPeople
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPeople)
    }));
  })

  it('should call fetch with the correct arguments', async () => {
    const expected = 'https://swapi.co/api/people/';
    await fetchPeople();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });
  it('should return a parsed version of the result', async () => {
    const expectedData = await fetchPeople();
    expect(expectedData).toEqual(mockPeople);
  })

  it('should throw an error if the fetch was not successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
    await expect(fetchPeople()).rejects.toEqual(Error('Error loading people'))
  })
})

describe('fetchPlanets', () => {
  let mockPlanets 

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPlanets)
    }));
  })

  it('should call fetch with the correct arguments', async () => {
    const expectedUrl = 'https://swapi.co/api/planets';
    await fetchHomeworld();
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
  })

  it('should return a parsed version of the result', async () => {
    const expectedData = await fetchHomeworld();
    expect(expectedData).toEqual(mockPlanets);
  })

  it('should throw an error if the fetch isn\'t successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
    await expect(fetchHomeworld()).rejects.toEqual(Error('Can not fetch planets data.'))
  })
})

