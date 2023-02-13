import { ThingInterface } from 'src/modules/things/interface/thing.interface';

export interface PersonInterface extends ThingInterface {
  middleName?: string;
  lastName: string;
  secondLastName?: string;
}
