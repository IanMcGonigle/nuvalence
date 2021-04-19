import React from 'react';
import {useRecoilState} from 'recoil';
import { pageState } from '../state';

export default function Pagination() {
  const [pageNum, setPageNum] = useRecoilState(pageState);
  return (
    <div className="text-center my-4">
      <button
        className='w-8 h-8 border-2 rounded mx-2 text-xs font-bold hover:bg-indigo-600 hover:text-white'
        title='back a page'
        disabled={ pageNum < 1}
        onClick={() => {
          const newPage = pageNum - 1;
          if(newPage >= 1){
            setPageNum(newPage);
          }
        }}
      >
        {`<<`}
      </button>
      <span className='w-8 text-center'>{`Page: ${pageNum}`}</span>
      <button
        className='w-8 h-8 border-2 rounded mx-2 text-xs font-bold hover:bg-indigo-600 hover:text-white'
        title='forward a page'
        onClick={() => {
          setPageNum( pageNum + 1);
        }}
      >
        {`>>`}
      </button>
    </div>
  );
}
