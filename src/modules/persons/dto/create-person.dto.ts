import { CreateThingDto } from '../../things/dto/create-thing.dto';

export class CreatePersonDto extends CreateThingDto {
  thingId: number;
  middleName?: string;
  lastName: string;
  secondLastName?: string;
}
