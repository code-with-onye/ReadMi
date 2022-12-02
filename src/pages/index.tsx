import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { auth } from "../firebase/config";
import { useIdToken } from "react-firebase-hooks/auth";
import AuthForm from "../components/Organisims/AuthtForm";

const Home: NextPage = () => {
  const [user, loading, error] = useIdToken(auth);

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }

  if (user) {
    return (
      <>
        <Head>
          <title>RateMe</title>
          <meta name="description" content="Rate your working, products" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Header */}
        {/* Footer */}
      </>
    );
  }
  return <AuthForm />;
};

export default Home;
