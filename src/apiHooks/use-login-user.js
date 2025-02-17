import { queryOptions, useMutation, useQuery } from "@tanstack/react-query";
import {
    GetUserProfile,
    loginUser,
    signupUser
} from "../apiService/user-management";

export function useLoginUser() {
  return useMutation({
    mutationFn: (payload) => loginUser(payload),
  });
}

export function UserSignup() {
  return useMutation({
    mutationFn: (payload) => signupUser(payload),
  });
}

export function getProfileQuery() {
  return queryOptions({
    queryKey: ["userprofile"],
    queryFn: () => GetUserProfile(),
  });
}

export const UserProfileInfo = () => {
  return useQuery({ getProfileQuery });
};
