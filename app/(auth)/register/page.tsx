import Link from 'next/link'

const RegisterPage = () => {
  return (
    <section className="py-36">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-lg rounded-xl border border-olive7 bg-olive1 px-6 pt-16 pb-16 md:px-10 lg:px-16">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <svg className="h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" fill="none">
              <path
                fill="#ADFF00"
                d="M166.3 218.7v49c0 1.2.1 2.5.5 3.7.6 1.8 2.1 2.6 4 2.1 1-.2 2-.7 2.8-1.2l74-42.7 1.6-1c2.7-2 2.7-4.5 0-6.5-.6-.5-1.3-1-2-1.3l-44.8-25.9a13.9 13.9 0 0 1-7.5-12.2v-19.8c.2-5.2 2.6-9.3 7.2-12l8-4.5c.7-.5 1.6-.9 2.4-1 2.2-.5 3.8.4 4.3 2.5.3 1 .3 2 .3 3.1v18.6c0 5.4 2.5 9.6 7.2 12.3 11.5 6.8 23 13.4 34.6 20 .9.5 1.8 1 2.7 1.1 2.1.5 3.8-.5 4.3-2.6l.3-3a133312 133312 0 0 0-.1-86.8c-.4-3.6-2.7-5-6-3.3-.8.3-1.5.8-2.2 1.2l-83.6 48.2c-5.4 3.1-8 7.6-8 13.8v48.2Zm-22.2.2v-48.8a14 14 0 0 0-7.3-13L51.4 108c-.7-.4-1.4-.8-2.2-1-2.3-.8-4 .2-4.7 2.5-.2.9-.3 1.9-.3 2.9v85.2c0 1 0 2 .3 3 .5 2 2.2 3 4.3 2.5a13 13 0 0 0 3.2-1.4l33.6-19.3c5.1-3 7.7-7.4 7.7-13.4v-18.7c0-4.7 2.8-6.2 6.9-4l8 4.6a14 14 0 0 1 7.3 12.7v18.8l-.3 3c-1 4.4-3.5 7.5-7.3 9.7l-44.6 25.8-2.3 1.4c-2.4 1.9-2.4 4.4 0 6.3l1.6 1 74.4 43c.7.4 1.6.8 2.4 1 2.1.5 3.8-.4 4.3-2.5.3-1.1.4-2.4.4-3.5v-48.6ZM115.5 79.1v21c0 1.1 0 2.2-.3 3.2-.6 2.1-2.2 3-4.3 2.5-1-.2-1.9-.6-2.7-1l-7.4-4.4c-5-2.9-7.5-7.3-7.5-13.2V71c0-1-.1-2-.4-3-.5-1.8-2-2.8-4-2.4-.8.2-1.7.5-2.4 1L62.2 80.3l-.8.6c-3 2-3 4.8-.1 6.8l2.1 1.3 84 48.5c5.2 3 10.3 3 15.5 0l47.2-27.2L248 88.5c4.3-2.5 4.3-5.6 0-8.1l-23.8-13.7c-.8-.5-1.7-.9-2.5-1-2.2-.6-3.9.5-4.4 2.7l-.1 2.7v16.7a14 14 0 0 1-7.2 12.4l-7.8 4.5c-.6.4-1.3.8-2 1-2.7.9-4.7-.3-5.1-3.2-.2-1-.2-2-.2-3v-41c0-6-2.6-10.3-7.8-13.3l-24.2-14c-5.1-3-10.2-3-15.4 0l-24.4 14.1c-5 3-7.6 7.3-7.6 13.2V79ZM288.4 155c0 15.6-.2 31.3 0 46.9a50.7 50.7 0 0 1-24.5 44l-84.3 48.6c-8.1 4.8-17 6.5-26.2 6.2a47.7 47.7 0 0 1-22-5.8L46 245.5a45.8 45.8 0 0 1-15.4-15 49.8 49.8 0 0 1-8.5-26v-99.2c0-8.4 2.6-16.1 6.8-23.3 4.5-7.8 10.6-14 18.5-18.6 28-16 55.8-32.1 83.7-48.3a46.3 46.3 0 0 1 20.5-6 50.3 50.3 0 0 1 27.7 6l85 49a49.3 49.3 0 0 1 20.2 23.5c2.7 6 4 12.2 4 18.8V155Z"
              />
            </svg>
          </span>
          <div className="relative mx-auto max-w-md">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-2xl font-semibold text-olive12">Sign up with new account</h2>
              <p className="font-medium text-olive11">Start your journey with us</p>
            </div>
            <form action="">
              <div className="relative mb-8 h-14 w-full rounded-lg border border-olive7 py-4 px-3 focus-within:border-primary-600 hover:border-olive11">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 translate-y-0.5 transform bg-olive1 px-1 text-xs font-semibold text-olive11">
                  Name
                </span>
                <input
                  className="block w-full border-none bg-transparent text-sm font-medium text-olive9 outline-none focus:outline-none focus:ring-0"
                  id="signInInput5-1"
                  type="text"
                />
              </div>
              <div className="relative mb-8 h-14 w-full rounded-lg border border-olive7 py-4 px-3 focus-within:border-primary-600 hover:border-olive11">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 translate-y-0.5 transform bg-olive1 px-1 text-xs font-semibold text-olive11">
                  Email
                </span>
                <input
                  className="block w-full border-none bg-transparent text-sm font-medium text-olive9 outline-none focus:outline-none focus:ring-0"
                  id="signInInput5-2"
                  type="email"
                />
              </div>
              <div className="relative mb-8 h-14 w-full rounded-lg border border-olive7 py-4 px-3 focus-within:border-primary-600 hover:border-olive11">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 translate-y-0.5 transform bg-olive1 px-1 text-xs font-semibold text-olive11">
                  Password
                </span>
                <input
                  className="block w-full border-none bg-transparent text-sm font-medium text-olive9 outline-none focus:outline-none focus:ring-0"
                  id="signInInput5-3"
                  type="password"
                />
              </div>
              <span className="mb-6 block text-xs font-semibold text-olive9">Must be at least 12 characters.</span>
              <button className="mb-4 block w-full rounded-lg bg-primary-500 py-4 font-semibold leading-6 text-black transition duration-200 hover:bg-primary-400">
                Create account
              </button>
              <button className="mb-6 flex w-full items-center justify-center rounded-lg bg-olive4 py-4 font-semibold leading-6 text-white transition duration-200 hover:bg-olive5">
                <div className="w-4 rounded-sm bg-white">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.5 0H14L8 4.738L2 0H1.5C0.672 0 0 0.672 0 1.5V10.5C0 11.328 0.672 12 1.5 12H2V2.646L8 7.261L14 2.645V12H14.5C15.328 12 16 11.328 16 10.5V1.5C16 0.672 15.328 0 14.5 0Z"
                      fill="#F44336"
                    ></path>
                  </svg>
                </div>
                <span className="ml-3">Sign In with Gmail</span>
              </button>
              <p className="flex items-center justify-center gap-x-2 text-center font-medium">
                <span className="text-gray-300">Already have an acoount?</span>
                <Link className="inline-block text-primary-500 hover:underline" href="/login">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
