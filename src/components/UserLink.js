import { Link } from 'react-router-dom';

export default function UserLink({ name, picture, login }) {
  const { title = '', first = '', last = '' } = name;
  const fullName = `${title} ${first} ${last}`;
  const id = login?.uuid;

  if(!id) return null;

  return (
    <Link
      to={`/user/${id}`}
      key={fullName}
      className='flex py-1 px-2 border hover:bg-indigo-600 w-full items-center hover:text-white'
    >
      {picture?.thumbnail && fullName && (
        <img
          className='mr-2 self-start border-4 shadow-xl border-gray-200 rounded-full'
          src={`${picture.thumbnail}`}
          alt={`${fullName}`}
        />
      )}
      {fullName}
    </Link>
  );
}
