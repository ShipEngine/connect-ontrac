import { CarrierApp } from '@shipengine/connect-carrier-api';
import {
  Register,
  GetRates,
  CreateLabel,
  VoidLabels,
  Track
} from './methods';
import { Metadata } from './definitions';

export default new CarrierApp({
  Metadata,
  Register,
  GetRates,
  CreateLabel,
  VoidLabels,
  Track
})
