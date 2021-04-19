import { useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import { API_URL, PAGE_COUNT } from '../constants/';
import { pageState, userState, getUsersByPage } from '../state';
import Pagination from '../components/Pagination';
import UserLink from '../components/UserLink';
import Container from '../components/Container';

export default function ListingPage() {
  const page = useRecoilValue(pageState);
  const [userData, setUserData] = useRecoilState(userState);
  const url = `${API_URL}?page=${page}&results=${PAGE_COUNT}&seed-abc`;
  const userByPage = useRecoilValue(getUsersByPage(page));

  useEffect(() => {
    if(userByPage.length < PAGE_COUNT){
      axios
        .get(url)
        .then((response) => {
          setUserData([...userData, ...response.data?.results]);
        })
        .catch((err) => {
          setUserData(userData);
        });
    }
  }, [url, userData, setUserData, userByPage]);
  return (
    <div>
      <Pagination />
      <Container className="px-4">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-2 md:gap-4'>
          {userByPage.map((item) => (
            <UserLink key={item.login.uuid}{...item} />
          ))}
        </div>
      </Container>
      <Pagination />
    </div>
  );
}
