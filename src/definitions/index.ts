import { CarrierAppMetadata } from '@shipengine/connect-carrier-api';

import { Ontrac } from './ontrac';

export const Metadata: CarrierAppMetadata = {
  // DO NOT CHANGE THIS ID AFTER PUBLISHING
  Id: "80020bad-0e15-42c8-92ff-eed71c834bd3",
  Name: "OnTrac",
  Carriers: [Ontrac],
};
