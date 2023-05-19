import { CreateCatDto } from './create-cat.dto';

export class CatDto extends CreateCatDto {
  id: string;
  name: string;
  age: number;
  breed: string;
}
