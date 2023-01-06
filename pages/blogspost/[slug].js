import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container my-5">
        <div className="container text-center text-white">
          <h3>This Post is {slug.title}</h3>
          <p className="my-3">
            {slug.content}
          </p>
        </div>
        <div className="text-center my-5">
          <Link
            href={slug.link}
            target="_blank"
            className="readMoreBtn "
          >
            Read More...
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slug;

