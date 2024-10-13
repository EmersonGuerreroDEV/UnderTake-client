import { call } from '../config/call';

class LocationRepository {
  static readonly getCity = async () => {
    const res = await call({
      method: 'GET',
      path: '/cities'
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching users');
  };
}

export default LocationRepository;
