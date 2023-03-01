import React, { Fragment } from 'react';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

export default function dashboardScreen({ children }) {
  const { status, data: session } = useSession();

  return (
    <Fragment>
      {session?.user.isAdmin ? (
        // <section class="bg-white py-20 lg:py-[120px]">
        //   <div class="container mx-auto">
        //     <div class="-mx-4 flex flex-wrap">
        //       <div class="w-full px-4">
        //         <div class="max-w-full overflow-x-auto">
        //           <table class="w-full table-auto">
        //             <thead>
        //               <tr class="bg-primary text-center">
        //                 <th class="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
        //                   TLD
        //                 </th>
        //                 <th class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
        //                   Duration
        //                 </th>
        //                 <th class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
        //                   Registration
        //                 </th>
        //                 <th class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
        //                   Renewal
        //                 </th>
        //                 <th class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
        //                   Transfer
        //                 </th>
        //                 <th class="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
        //                   Register
        //                 </th>
        //               </tr>
        //             </thead>
        //             <tbody>
        //               <tr>
        //                 <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        //                   .com
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        //                   1 Year
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        //                   $75.00
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        //                   $5.00
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        //                   $10.00
        //                 </td>
        //                 <td class="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        //                   <a
        //                     href="javascript:void(0)"
        //                     class="border-primary text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white"
        //                   >
        //                     Sign Up
        //                   </a>
        //                 </td>
        //               </tr>
        //               <tr>
        //                 <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        //                   .com
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        //                   1 Year
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        //                   $75.00
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        //                   $5.00
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        //                   $10.00
        //                 </td>
        //                 <td class="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        //                   <a
        //                     href="javascript:void(0)"
        //                     class="border-primary text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white"
        //                   >
        //                     Sign Up
        //                   </a>
        //                 </td>
        //               </tr>
        //               <tr>
        //                 <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        //                   .com
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        //                   1 Year
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        //                   $75.00
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        //                   $5.00
        //                 </td>
        //                 <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        //                   $10.00
        //                 </td>
        //                 <td class="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        //                   <a
        //                     href="javascript:void(0)"
        //                     class="border-primary text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white"
        //                   >
        //                     Sign Up
        //                   </a>
        //                 </td>
        //               </tr>
        //             </tbody>
        //           </table>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>
        <main>
          <Head>
            <title>{'Admin - Riere Farm'}</title>
            <meta name="description" content="Generated by create next app" />
            <link
              rel="icon"
              href="https://img.icons8.com/ios-filled/50/null/chicken.png"
            />
          </Head>
          <nav>
            <div class="w-full md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center fixed md:pt-8 md:top-0 md:left-0  md:h-screen md:border-r-4 md:border-gray-600">
              <div class="md:relative mx-auto lg:float-right lg:px-6">
                <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
                  <li class="mr-3 flex-1">
                    <a
                      href="#"
                      class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-green-800 md:border-green-900 hover:border-green-500"
                    >
                      <i class="fas fa-link pr-0 md:pr-3"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                        User
                      </span>
                    </a>
                  </li>
                  <li class="mr-3 flex-1">
                    <a
                      href="#"
                      class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-green-800 md:border-green-900 hover:border-green-500"
                    >
                      <i class="fas fa-link pr-0 md:pr-3"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                        Order
                      </span>
                    </a>
                  </li>
                  <li class="mr-3 flex-1">
                    <a
                      href="#"
                      class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-green-800 md:border-green-900 hover:border-green-50"
                    >
                      <i class="fas fa-link pr-0 md:pr-3 text-pink-500"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">
                        Completed
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <section>{children}</section>
        </main>
      ) : null}
    </Fragment>
  );
}
