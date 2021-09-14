# OnTrac

OnTrac is a privately held logistics company that contracts regional shipping services in the Wester United States.

### Getting Started
- `npm install`
- `npm run-script build`
- `npm start`
- Check your app running [locally](http://localhost:3005/GetRegistryData)


### Information About Carrier
This is a regional carrier specializing in the west coast of the USA. It implements the following functions for the platform:
- Register *(Credential Verification)*
- Get Rates
- Create Label
- Void Label *(because the carrier doesn't bill until the package is scanned, we can implement the void label endpoint to automatically return successful voiding on a label)*
- Track

Their api documentation can be found [here](./docs/api.pdf)
