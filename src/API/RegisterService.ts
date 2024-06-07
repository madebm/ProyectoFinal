import { Country } from '../model/Country';
import { CreateUserResponse } from '../model/CreateUserResponse';
import { UserRequest } from '../model/UserRequest';
import { ValidateUserRequest } from '../model/ValidateUserRequest';
import { ValidateUserResponse } from '../model/ValidateUserResponse';
import { publicService } from './APIService';

export const getCountriesService = async () => {
  const { data } = await publicService.get<Country>('getCountries');
  return data;
};

export const postCreateUserService = async (user: UserRequest) => {
  const { data } = await publicService.post<CreateUserResponse>('createUser', user);
  return data;
};
export const postValidateUserService = async (user: ValidateUserRequest) => {
  const { data } = await publicService.post<ValidateUserResponse>('validateUser', user);
  return data;
};
