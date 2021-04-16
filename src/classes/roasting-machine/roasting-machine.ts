/** Interfaces */

/** Classes */
import {Config} from '../objectConfig/objectConfig';
import {IRoastingMachine} from '../../interfaces/roasting-machine/iRoastingMachine';

export class RoastingMachine implements IRoastingMachine {
  public name: string;
  public note: string;
  public config: Config;
  public finished: boolean;
  public attachments: Array<string>;


  constructor() {
    this.name = '';
    this.note = '';
    this.config = new Config();
    this.attachments = [];
    this.finished = false;
    this.attachments.push('https://maxbean.de/wp-content/uploads/2020/11/10-primavera_front.png');
  }
  public initializeByObject(roastingMachineObj: IRoastingMachine): void {
    Object.assign(this, roastingMachineObj);
  }





}
