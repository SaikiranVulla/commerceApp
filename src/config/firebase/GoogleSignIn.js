import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId: '664134470556-6a5pgnlmop1g15g78b2803vlrkq8iiqo.apps.googleusercontent.com', // Replace with your web client ID
      scopes: ['profile', 'email']
    });

    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const { idToken } = userInfo;
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredentials);

    return userInfo;
  } catch (error) {
    console.log(error,"keystone");
  }
};
