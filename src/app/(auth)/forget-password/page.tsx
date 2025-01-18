import Image from 'next/image'
import Link from 'next/link'

export default function ForgetPasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <Image
        src="/bank-logo.svg"
        alt="bank logo"
        width={276}
        height={46}
        className="mb-10"
      />

      <div className="flex flex-col mb-10 items-center gap-y-4">
        <h1 className="text-2xl font-bold ">Forgot Password?</h1>

        <span className="text-[#4B5768] text-xl text-center">
          Enter your email address to get the
          <br />
          password reset link.
        </span>
      </div>

      <form action="" className="w-[400px]">
        <label htmlFor="email" className="w-full flex flex-col gap-y-2 mb-6">
          <span className="flex-start text-[#191D23] font-sm font-medium">
            Email Address
          </span>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="outline-none border border-[#D0D5DD] px-3 py-2 rounded-lg text-base focus:border-[#4B5768]"
          />
        </label>

        <div className="flex flex-col items-center mt-8 gap-y-4 mb-6">
          <button
            type="submit"
            className="w-full bg-[#299D91] py-3 text-white rounded font-semibold"
          >
            Password Reset
          </button>

          <Link
            href="/login"
            className="text-[#4B5768] font-semibold py-3 rounded"
          >
            Back to login
          </Link>
        </div>
      </form>
    </div>
  )
}
