import Link from 'next/link';
import React, { Fragment, useState } from 'react';
// import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
// import bcrypt from 'bcryptjs';

export default function LoginScreen() {
  // const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password, cpassword }) => {
    setLoading(true);
    if (password !== cpassword) {
      toast.error('confirm password must be same with password');
      setLoading(false);
    } else if (!name || !email || !password || !cpassword) {
      toast.error('Please fill all the field above');
      setLoading(false);
    } else {
      //HASH PASSWORD
      // const hash_password = bcrypt.hashSync(password);
      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ name, email, password: hash_password }),
          body: JSON.stringify({ name, email, password }),
        });
        if (res.status === 201) {
          let data = await res.json();
          localStorage.clear();
          localStorage.setItem('user', JSON.stringify(data));
          toast.success('User registered successfully');
          router.push('/');
        } else {
          setLoading(false);
          const { message } = await res.json();
          toast.error(message);
        }
      } catch (err) {
        setLoading(false);
        toast.error(err);
      }
    }
  };
  return (
    <Fragment>
      <Layout title="Register">
        <Fragment>
          <form onSubmit={handleSubmit(submitHandler)}>
            <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
              <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                      <div className="mb-10 text-center md:mb-16">
                        <a
                          className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-green-900 text-xl mx-auto inline-block max-w-[160px]"
                          href="#"
                        >
                          <img
                            src="https://img.icons8.com/ios-filled/50/null/chicken.png"
                            width={30}
                          />
                          <b> Riere Farm</b>
                        </a>
                      </div>
                      <div className="mb-6">
                        <input
                          type="text"
                          name="name"
                          {...register('name', {
                            required: 'Please enter username',
                            maxLength: {
                              value: 10,
                              message:
                                'username should not be more than 10 letters',
                            },
                          })}
                          placeholder="user name"
                          id="name"
                          className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                          autoFocus
                        />
                        {errors.name && (
                          <div className="text-red-500">
                            {errors.name.message}
                          </div>
                        )}
                      </div>

                      <div className="mb-6">
                        <input
                          type="email"
                          name="email"
                          {...register('email', {
                            required: 'Please enter email',
                            pattern: {
                              value:
                                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                              message: 'Please enter valid email',
                            },
                          })}
                          placeholder="Email"
                          id="email"
                          className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                          autoFocus
                        />
                        {errors.email && (
                          <div className="text-red-500">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="mb-6">
                        <input
                          type="password"
                          name="password"
                          {...register('password', {
                            required: 'Please enter password',
                            minLength: {
                              value: 6,
                              message: 'password is more than 5 chars',
                            },
                          })}
                          placeholder="Password"
                          className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                        />
                        {errors.password && (
                          <div className="text-red-500 ">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                      <div className="mb-6">
                        <input
                          type="password"
                          name="cpassword"
                          {...register('cpassword', {
                            required: 'Please confirm password',
                          })}
                          placeholder="confirm password"
                          className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                        />
                        {errors.cpassword && (
                          <div className="text-red-500 ">
                            {errors.cpassword.message}
                          </div>
                        )}
                      </div>

                      <div className="mb-10">
                        {!loading ? (
                          <button
                            className="primary-button text-lg"
                            type="submit"
                          >
                            <b>Register</b>
                          </button>
                        ) : (
                          <button
                            className="primary-button text-lg"
                            type="submit"
                            disabled
                          >
                            <b>processing...</b>
                          </button>
                        )}
                      </div>

                      <p className="text-base text-[#adadad]">
                        Already a member - &nbsp;
                        <Link href={`/login`}>Login</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </Fragment>
      </Layout>
    </Fragment>
  );
}
