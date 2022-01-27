import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Prisma + Next.js Todo List</title>
        <meta name="description" content="Prisma + Next.js Todo List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">To-do List</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
