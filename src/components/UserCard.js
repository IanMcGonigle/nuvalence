export default function UserCard(props) {
  const {
    cell = '',
    dob = {},
    email = '',
    gender = '',
    location = {},
    name = {},
    nat = '',
    phone = '',
    picture = {},
  } = props;
  const { first = '', last = '' } = name;
  return (
    <div className='p-4 flex flex-col sm:flex-row border shadow sm:max-w-lg mx-auto max-w-xs text-xs sm:text-base'>
      {picture?.large && first && (
        <>
          <img
            className='mx-auto my-2 sm:self-start border-solid border-8 shadow-lg border-gray-100 rounded-full'
            src={`${picture?.large}`}
            alt={`${first}'s avatar`}
          />
        </>
      )}
      <dl className='flex-1 ml-6'>
        {first && (
          <>
            <dt className='float-left mr-2'>First name:</dt>
            <dd className='font-bold'>{first}</dd>
          </>
        )}
        {last && (
          <>
            <dt className='float-left mr-2'>Last name:</dt>
            <dd className='font-bold'>{last}</dd>
          </>
        )}
        {phone && (
          <>
            <dt className='float-left mr-2'>Phone number:</dt>
            <dd className='font-bold'>
              <a
                className='text-indigo-600 hover:text-indigo-700'
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            </dd>
          </>
        )}
        {cell && (
          <>
            <dt className='float-left mr-2'>Mobile number:</dt>
            <dd className='font-bold'>
              <a
                className='text-indigo-600 hover:text-indigo-700'
                href={`tel:${cell}`}
              >
                {cell}
              </a>
            </dd>
          </>
        )}
        {dob?.age && (
          <>
            <dt className='float-left mr-2'>Age:</dt>
            <dd className='font-bold'>{dob?.age}</dd>
          </>
        )}
        {email && (
          <>
            <dt className='float-left mr-2'>Email:</dt>
            <dd className='font-bold'>
              <a
                className='text-indigo-600 hover:text-indigo-700'
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </dd>
          </>
        )}
        {gender && (
          <>
            <dt className='float-left mr-2'>Gender:</dt>
            <dd className='font-bold'>{gender}</dd>
          </>
        )}
        {location?.city && (
          <>
            <dt className='float-left mr-2'>Location:</dt>
            <dd className='font-bold'>{`${location?.country}, ${location?.state}, ${location?.city}`}</dd>
          </>
        )}
        {nat && (
          <>
            <dt className='float-left mr-2'>Nationality:</dt>
            <dd className='font-bold'>{nat}</dd>
          </>
        )}
      </dl>
    </div>
  );
}
