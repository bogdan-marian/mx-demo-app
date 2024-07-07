'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { ApiNetworkProvider } from '@multiversx/sdk-network-providers/out';


export default function MxDemoApp() {

  const [networkStatus, setNetworkStatus] = useState(null);

  useEffect(() => {
    const provider = new ApiNetworkProvider('https://devnet-gateway.multiversx.com');
    
    async function fetchNetworkStatus() {
      try {
        const status = await provider.getNetworkStatus();
        console.log('Network status:', status);  // Logging the network status to the console
        setNetworkStatus(status);
      } catch (error) {
        console.error('Error fetching network status:', error);
      }
    }

    fetchNetworkStatus();
  }, []);

  return <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">mx-dem-app</h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">This is a simple mx demo app</p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <p>Hello test demo app</p>
      </div>


      <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>




    </div>
  </section>
}