// import Amplify from 'aws-amplify';

// Amplify.configure({
//   Auth: {
//     // REQUIRED - Amazon Cognito Identity Pool ID
//     identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
//     // REQUIRED - Amazon Cognito Region
//     region: 'XX-XXXX-X',
//     // OPTIONAL - Amazon Cognito User Pool ID
//     userPoolId: 'XX-XXXX-X_abcd1234',
//     // OPTIONAL - Amazon Cognito Web Client ID
//     userPoolWebClientId: 'XX-XXXX-X_abcd1234',
//   }
// });

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider

  issuer: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_0pLhKsXnL',
// &response_type=code
// &state=d1915eb682a3873af5b4459793360a670d676c3f',

  // URL of the SPA to redirect the user to after login
  redirectUri: 'https://openidconnect.net/callback',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '5iq89m609n0r209pbe71vht7qp',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email',
}