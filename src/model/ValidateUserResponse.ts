import { UserResponse } from './UserResponse';

export interface ValidateUserResponse {
  success: boolean;
  user?: UserResponse;
  error?: string;
}
