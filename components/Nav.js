import React, { useState, useEffect } from 'react';
// import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { LogOutActiveIcon, LogOutInactiveIcon } from '../utils/helpers';
import { useRouter } from 'next/router';

export default function Nav() {
  // const { status, data: session } = useSession();
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const [session, setSession] = useState();
  const logoutClickHandler = () => {
    localStorage.removeItem('user');
    localStorage.clear();
    router.push('/login');
  };

  useEffect(() => {
    setSession(JSON.parse(localStorage.getItem('user')));
  }, []);
  return (
    <nav id="header" className="w-full z-30 top-0 py-1 shadow-md">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          {menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => setMenu(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              onClick={() => setMenu(true)}
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          )}
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li className="m-3 cursor-pointer">
                <Link
                  className="flex align-center justify-center secondary-button w-20 p-2"
                  href="/"
                >
                  <b> Home</b>
                </Link>
              </li>
              <li className="m-3 cursor-pointer">
                <Link
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4 cursor-pointer"
                  href="/contact"
                >
                  <b> Contact</b>
                </Link>
              </li>
              <li className="m-3 cursor-pointer">
                <Link
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4 cursor-pointer"
                  href="/about"
                >
                  <b> About</b>
                </Link>
              </li>
              <li className="m-3 cursor-pointer">
                <Link
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4 cursor-pointer"
                  href="/product"
                >
                  <b>Product</b>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="order-1 md:order-2">
          <span className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-green-900 text-xl ">
            <img
              src="https://img.icons8.com/ios-filled/50/null/chicken.png"
              width={30}
            />
            Riere Farm
          </span>
        </div>

        <div
          className="order-2 md:order-3 flex items-center z-30"
          id="nav-content"
        >
          {session ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 ">
                  <Link
                    className="inline-block no-underline hover:text-black"
                    href="#"
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/50/null/guest-male--v1.png"
                      width={20}
                    />
                  </Link>
                  <small>{session?.name}</small>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    {session?.isAdmin ? (
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => router.push('/admin/user')}
                            className={`${
                              active
                                ? 'bg-violet-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAc0lEQVR4nOVUQQrAMAzyefn/E9xD3GUrO6xjCoV2E3qKQapJgC+hAGwAdPN41BNuAzsNujQm3Iaz+KYmg/tTAY7OoB5EulMUfdvBcAEavlayaI6vTEJ2oCnzKsNXJQKOr1r+VGhKARoZMNkDZ9EqOXZrYgcpidAVyoA/hAAAAABJRU5ErkJggg=="
                              width={20}
                            />
                            Dashboard
                          </button>
                        )}
                      </Menu.Item>
                    ) : null}

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logoutClickHandler}
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <LogOutActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <LogOutInactiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Link href="/login">
              <a className="p-2 primary-button">
                <b>Login</b>
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
