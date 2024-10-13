import { useQuery } from 'react-query';
import LocationRepository from '~/core/repositories/location-repository';

const UseLocation = () => {
  const locationQuery = useQuery({
    queryKey: 'city',
    queryFn: () => LocationRepository.getCity()
  });

  return { city: locationQuery.data };
};

export default UseLocation;
