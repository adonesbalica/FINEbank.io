import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <Image
        src="/bank-logo.svg"
        alt="bank logo"
        width={276}
        height={46}
        className="mb-16"
      />

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

        <label htmlFor="password" className="w-full flex flex-col gap-y-2 ">
          <span className="flex flex-start justify-between text-[#191D23] font-sm font-medium">
            Password
            <Link href="/forget-password" className="font-base text-[#299D91]">
              Forgot Password?
            </Link>
          </span>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="outline-none border border-[#D0D5DD] px-3 py-2 rounded-lg text-base focus:border-[#4B5768]"
          />
        </label>

        <div className="flex flex-col mt-8 gap-y-4 mb-6">
          <label htmlFor="checkbox" className="flex items-center">
            <input id="checkbox" type="checkbox" className="mr-4" />
            <span className="inline-block">Keep me sign in</span>
          </label>

          <button
            type="submit"
            className="bg-[#299D91] py-3 text-white rounded font-semibold"
          >
            Login
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-[#cacdd3]"></div>
          <span className="mx-4 text-[#999DA3]">or sign in with</span>
          <div className="flex-grow border-t border-[#cacdd3]"></div>
        </div>

        <div className="flex flex-col items-center gap-y-10">
          <button
            type="submit"
            className="w-full bg-[#E4E7EB] text-[#4B5768] py-3 rounded"
          >
            Continue with Google
          </button>

          <Link
            href="/signup"
            className="font-base text-[#299D91] font-semibold"
          >
            Create an account
          </Link>
        </div>
      </form>
    </div>
  )
}
