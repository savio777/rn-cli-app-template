import api from '.';

type Params = {
  username: string;
};

export default async (params: Params): Promise<IUser> => {
  const response = await api.get(`/users/${params.username}`);
  return response.data;
};
