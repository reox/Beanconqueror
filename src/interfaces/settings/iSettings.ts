/** Interfaces */
/** Enums */
import {BREW_VIEW_ENUM} from '../../enums/settings/brewView';
import {IConfig} from '../objectConfig/iObjectConfig';
import {IDefaultLastCoffeeParameters} from './iDefaultLastCoffeeParameters';
import {STARTUP_VIEW_ENUM} from '../../enums/settings/startupView';
import {IBrewOrder} from './iBrewOrder';
import {IBrewPageFilter} from '../brew/iBrewPageFilter';

export interface ISettings {
 // Properties
  brew_view: BREW_VIEW_ENUM;
  startup_view: STARTUP_VIEW_ENUM;
  brew_temperature_time: boolean;
  brew_time: boolean;
  grind_size: boolean;
  grind_weight: boolean;
  method_of_preparation: boolean;
  mill: boolean;
  mill_speed: boolean;
  mill_timer: boolean;
  pressure_profile: boolean;
  brew_quantity: boolean;
  bean_type: boolean;
  brew_temperature: boolean;
  note: boolean;
  coffee_type: boolean;
  coffee_concentration: boolean;
  coffee_first_drip_time: boolean;
  coffee_blooming_time: boolean;
  set_last_coffee_brew: boolean;
  attachments: boolean;
  rating: boolean;
  set_custom_brew_time: boolean;
  language: string;
  default_last_coffee_parameters: IDefaultLastCoffeeParameters;
  brew_order: IBrewOrder;
  analytics: boolean;

  show_archived_beans: boolean;
  show_archived_brews: boolean;
  show_archived_mills: boolean;
  show_archived_preparations: boolean;

  brew_filter: {
    OPEN: IBrewPageFilter,
    ARCHIVED: IBrewPageFilter
  };


  welcome_page_showed: boolean;

  config: IConfig;
}
