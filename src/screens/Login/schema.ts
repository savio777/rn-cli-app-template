import {InferType, object, string} from 'yup';

const schema = object({
  username: string().required('Campo Obrigatório'),
});

export type ILoginSchema = InferType<typeof schema>;

export default schema;
