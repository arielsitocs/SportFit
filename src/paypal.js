import { core } from '@paypal/checkout-server-sdk';

// Configuración del entorno (sandbox o live)
let environment = new core.SandboxEnvironment('AfVQ_YqhBHaz1LdBFZ3JNZ2jJN1CsDC54WfwRbsXUdIBsb_XHBUsuiqAm47_SvMB5mKc2QSVmeTFcg4e', 'EFIGrPWB1dw_vwhTrnNMSm_FbNH4be7j0qd5v9aVQ3NaZB6d42t2R6kmsuDE8luf_YmW76joii-VAvcj');

let client = new core.PayPalHttpClient(environment);

export default { client };
