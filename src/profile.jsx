import { GetUserProfile } from "./apiService/user-management";

export function Profile() {
  let { data: profileData, isLoading } = GetUserProfile();

  return (
    <>
      <h2>Profile</h2>
      {isLoading ? <p>Loading...</p> : <p>{profileData?.data?.message}</p>}
    </>
  );
}
