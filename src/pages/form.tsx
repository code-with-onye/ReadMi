import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/Organisims/Header";
import Profile from "../components/Organisims/Profile";
import RateMeForm from "../components/Organisims/RateMeForm";

const Form: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>RateMe Form</title>
        <meta name="description" content="Rate your working, products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="layout mt-8  flex w-full flex-col items-center justify-center space-y-6 ">
        {/* <Profile /> */}
        <RateMeForm />
      </main>
    </div>
  );
};

export default Form;
