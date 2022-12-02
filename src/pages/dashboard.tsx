import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Organisims/Header";
import Profile from "../components/Organisims/Profile";
import Review from "../components/Organisims/Review";
import Footer from "../components/Organisims/Footer";
import AuthForm from "../components/Organisims/AuthtForm";

import { auth } from "../firebase/config";

import { useAuthState, useIdToken } from "react-firebase-hooks/auth";

const Dashboard: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);

  loading && console.log("loading");

  const [user2, loading2, error2] = useIdToken(auth);

  if (loading2) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }

  if (user2) {
    return (
      <>
        <Head>
          <title>Explore RateMe</title>
          <meta name="description" content="Rate your working, products" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Header */}
        <main className="  space-y-6 bg-gray-200">
          <Header />
          <Profile imgURL={user?.photoURL} username={user?.displayName} />
          <Review />
          <Footer />
        </main>

        {/* Footer */}
      </>
    );
  }
  return <AuthForm />;
};

export default Dashboard;
