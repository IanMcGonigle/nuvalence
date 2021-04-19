import { useRecoilValue } from 'recoil';
import { useHistory, useParams, Link } from 'react-router-dom';
import { getUserById } from '../state';
import UserCard from '../components/UserCard';

export default function DetailPage() {
  const { id } = useParams();
  const history = useHistory();
  const userData = useRecoilValue(getUserById(id));

  if (!Boolean(userData)) {
    history.push('/');
    return null;
  }
  return (
    <div className="p-4">
      <UserCard {...userData} />
      <Link className="block bg-indigo-600 hover:bg-indigo-500  text-white p-2 text-xl rounded text-center my-6 mx-auto w-24" to="/">Back</Link>
    </div>
  );
}
