import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function tandu() {
  return (
    <>
    <Head>
      <title>Tandu</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/pmrwira.png" />
    </Head>
    <div className="flex justify-center pt-56">
        <div>
          <h1 className="text-4xl font-semibold">
            Halaman ini sedang dalam masa percobaan
          </h1>
          <div className=" flex justify-center">
            <Link href="/" className=" my-10 bg-red-500 rounded-full">
              <button className="bg-sky-900  hover:bg-sky-800 text-white px-6 py-3 rounded-full">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default tandu
