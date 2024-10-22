import api from 'src/api';

type Params = {
  user?: string;
  per_page?: number;
  page?: number;
};

export default async (params: Params): Promise<IRepo[]> => {
  const response = await api.get('/users/savio777/repos', {params});
  return response.data;
};
