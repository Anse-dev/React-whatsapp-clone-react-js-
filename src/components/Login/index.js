import React from "react";
import { auth, provider } from "../../firebase";
import { SET_USER } from "../../store/actions";
import { useStateValue } from "../../store/StateProvider";
import { BtnSign, LoginWrapper } from "./Login.styles";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: SET_USER, user: result.user });
      })
      .catch((reason) => console.log(reason));
  };
  return (
    <LoginWrapper>
      <div>
        <img
          src="https://logospng.org/download/whatsapp/logo-whatsapp-verde-icone-ios-android-4096.png"
          alt
        />

        <h1>Connectez-vous pour continuer !</h1>
        <BtnSign onClick={() => signIn()}>
          <img
            src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png "
            alt
          />
          Continuer avec Google
        </BtnSign>
      </div>
    </LoginWrapper>
  );
};

export default Login;
