import { atom, selectorFamily } from 'recoil';
import { PAGE_COUNT } from '../constants'

export const pageState = atom({
  key: 'pageState',
  default: 1,
});

export const userState = atom({
  key: 'userState',
  default: [],
});

export const getUserById = selectorFamily({
  key: 'getUserById',
  get: (id) => ({ get }) => {
    const state = get(userState);
    if(!state){
      return null;
    }
    const selected = state.find( item => {
      return item.login.uuid === id;
    })
    return selected;
  },
});

export const getUsersByPage = selectorFamily({
  key:'getUsersByPage',
  get: page => ({get}) => {
    const state = get(userState);
    if(state.length < PAGE_COUNT ) return state;
    const startIndex = PAGE_COUNT * (page -1);
    const endIndex = startIndex + PAGE_COUNT;
    const result = state.slice(startIndex, endIndex);
    return result;


  }
})
