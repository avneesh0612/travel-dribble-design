import Head from "next/head";
import { useRouter } from "next/router";
import AppRight from "../components/AppRight";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/gallery");
  });

  return (
    <div className="flex md:flex-row flex-col-reverse">
      <Head>
        <title>Travel dribble design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial="imageInitial"
        animate="imageAnimate"
        variants={{
          imageInitial: {
            opacity: 0,
          },
          imageAnimate: {
            opacity: 1,
          },
        }}
        style={{
          background:
            "url(https://res.cloudinary.com/dssvrf9oz/image/upload/v1622735422/mads-schmidt-rasmussen-xfngap_DToE-unsplash_k3yczw.jpg)",
          flex: "0.6",
        }}
        className="font-poppins flex flex-col h-screen pb-40 md:pb-0 justify-center items-center !bg-cover !bg-bottom object-contain md:rounded-r-3xl md:rounded-tl-none rounded-t-3xl"
      >
        <h4 className="text-xl hidden md:inline-flex absolute top-0 left-0 font-bold p-10 text-white">
          TooTravel
        </h4>
        <div className="w-3/5 md:mt-0 mt-40">
          <h2 className="text-5xl font-semibold text-white">
            The most beautiful places in the world!
          </h2>
          <p className="text-sm text-white mt-6">
            Plan your vacations on the most beautiful places in the world
          </p>
          <motion.button
            whileHover={{
              scale: [1, 1.1],
              zIndex: 1,
              transition: {
                duration: 0.2,
              },
            }}
            whileTap={{
              scale: [1, 1.1],
              zIndex: 1,
              transition: {
                duration: 0.2,
              },
            }}
            className="px-10 mt-6 focus:outline-none rounded-xl py-2 bg-orange text-white"
          >
            Get Started
          </motion.button>
        </div>
        <div className="absolute bottom-10 hidden left-40 md:flex items-center">
          <h1 className="mr-1 text-white">01</h1>
          <div className="bg-white w-10 h-[2px] mr-1"></div>
          <div className="bg-white bg-opacity-30 w-10 h-[2px] mr-1"></div>
          <div className="bg-white bg-opacity-30 w-10 h-[2px] mr-1"></div>
          <h1 className="text-white">03</h1>
        </div>
        <div className="sm:absolute hidden bg-white h-10 w-1 rounded-full mr-1 top-[50vh] left-[58%]"></div>
      </motion.div>
      <div style={{ flex: "0.4" }}>
        <AppRight />
      </div>
    </div>
  );
}
