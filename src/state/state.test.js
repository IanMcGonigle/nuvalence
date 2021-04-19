import { useEffect } from 'react';
import { renderHook } from "@testing-library/react-hooks";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { userState, getUserById, getUsersByPage } from './index';
import { PAGE_COUNT } from '../constants';
import homerSimpson from '../fixtures/testUserData';

const hundredHomers = Array.from({length: 100}).map( (item, index) => {
  return {...homerSimpson, login:{uuid:index}};
});

describe('State and Selectors', () => {
  test('getUserById', () => {
    const { result } = renderHook(() => {
      const setUserData = useSetRecoilState(userState);
      const byId = useRecoilValue(getUserById(55));
      useEffect(() => {
        setUserData(hundredHomers);
      },[setUserData]);

      return byId;
    },{
      wrapper: RecoilRoot
    });
    expect(result.current.login.uuid).toBe(55);
  })
  test('getUsersByPage', () => {
    const pageNum = 2;
    const { result } = renderHook(() => {
      const setUserData = useSetRecoilState(userState);
      const byPage = useRecoilValue(getUsersByPage(pageNum));
      useEffect(() => {
        setUserData(hundredHomers);
      },[setUserData]);

      return byPage;
    },{
      wrapper: RecoilRoot
    });

    expect(result.current.length).toBe(PAGE_COUNT);

    const first = result.current[0];
    const last = result.current[PAGE_COUNT - 1];

    expect(first.login.uuid).toBe(PAGE_COUNT);
    expect(last.login.uuid).toBe( (PAGE_COUNT * pageNum) - 1);
  })
});