import Link from "next/link";
import AuthButton from "../../components/Molecules/AuthButton";
import { FcGoogle } from "react-icons/fc";
import { FaSignInAlt } from "react-icons/fa";
import Typography from "../../components/Atoms/Typography";

import { auth } from "../../firebase/config";

import {
  signInWithPopup,
  GoogleAuthProvider,
  OAuthCredential,
} from "firebase/auth";
import { useRouter } from "next/router";

const provider = new GoogleAuthProvider();

export default function AuthForm() {
  const router = useRouter();

  const GoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        result && router.push("/dashboard");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="layout flex h-screen w-full flex-col items-center justify-center space-y-4">
      <Typography
        variant="heading"
        className="text-center text-2xl text-purple-500"
      >
        {" "}
        Review Me{" "}
      </Typography>
      <Typography size="lg" variant="paragraph" className="text-center ">
        Have a review Profile, Business, Pearsonally and Product{" "}
      </Typography>

      <AuthButton Icon={<FaSignInAlt />} variant="outline" onClick={GoogleAuth}>
        {" "}
        Login{" "}
      </AuthButton>
      <AuthButton Icon={<FcGoogle />} variant="ghost" onClick={() => {}}>
        {" "}
        Sign With Google{" "}
      </AuthButton>
    </div>
  );
}
