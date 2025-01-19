import Image from 'next/image'
import Link from 'next/link'

import {
  ArrowRightLeft,
  CirclePlus,
  EllipsisVertical,
  LayoutDashboard,
  LogOut,
  Receipt,
  ReceiptText,
  Settings,
  Wallet,
} from 'lucide-react'

export const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#191919] w-[280px] px-7 py-12 h-screen">
      <Image
        src="/bank-logo-white.svg"
        alt="bank logo"
        width={224}
        height={32}
      />

      <nav className="mt-10">
        <ul className="flex flex-col gap-y-4">
          <li className="rounded cursor-pointer group hover:bg-[#299D91]">
            <Link
              href="/"
              className="flex gap-x-3 py-3 px-4 text-base font-semibold text-[#FFFFFFB3] group-hover:text-white"
            >
              <LayoutDashboard
                size={25}
                stroke="#FFFFFFB3"
                className="group-hover:stroke-white"
              />
              Overview
            </Link>
          </li>

          <li className="rounded cursor-pointer group hover:bg-[#299D91]">
            <Link
              href="/"
              className="flex gap-x-3 py-3 px-4 text-base font-semibold text-[#FFFFFFB3] group-hover:text-white"
            >
              <Wallet
                size={25}
                stroke="#FFFFFFB3"
                className="group-hover:stroke-white"
              />
              Balances
            </Link>
          </li>

          <li className="rounded cursor-pointer group hover:bg-[#299D91]">
            <Link
              href="/"
              className="flex gap-x-3 py-3 px-4 text-base font-semibold text-[#FFFFFFB3] group-hover:text-white"
            >
              <ArrowRightLeft
                size={25}
                stroke="#FFFFFFB3"
                className="group-hover:stroke-white"
              />
              Transactions
            </Link>
          </li>

          <li className="rounded cursor-pointer group hover:bg-[#299D91]">
            <Link
              href="/"
              className="flex gap-x-3 py-3 px-4 text-base font-semibold text-[#FFFFFFB3] group-hover:text-white"
            >
              <ReceiptText
                size={25}
                stroke="#FFFFFFB3"
                className="group-hover:stroke-white"
              />
              Bills
            </Link>
          </li>

          <li className="rounded cursor-pointer group hover:bg-[#299D91]">
            <Link
              href="/"
              className="flex gap-x-3 py-3 px-4 text-base font-semibold text-[#FFFFFFB3] group-hover:text-white"
            >
              <Receipt
                size={25}
                stroke="#FFFFFFB3"
                className="group-hover:stroke-white"
              />
              Expenses
            </Link>
          </li>

          <li className="rounded cursor-pointer group hover:bg-[#299D91]">
            <Link
              href="/"
              className="flex gap-x-3 py-3 px-4 text-base font-semibold text-[#FFFFFFB3] group-hover:text-white"
            >
              <CirclePlus
                size={25}
                stroke="#FFFFFFB3"
                className="group-hover:stroke-white"
              />
              Goals
            </Link>
          </li>

          <li className="rounded cursor-pointer group hover:bg-[#299D91]">
            <Link
              href="/"
              className="flex gap-x-3 py-3 px-4 text-base font-semibold text-[#FFFFFFB3] group-hover:text-white"
            >
              <Settings
                size={25}
                stroke="#FFFFFFB3"
                className="group-hover:stroke-white"
              />
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <Link
          href="/"
          className="flex gap-x-3 w-56 px-4 py-3 group rounded font-semibold bg-[#222222] text-[#FFFFFFB3] hover:text-white"
        >
          <LogOut
            size={25}
            stroke="#FFFFFFB3"
            className="group-hover:stroke-white"
          />
          Logout
        </Link>
        <div className="mt-11 mb-8 flex-grow border-t border-[#cacdd3]"></div>
        <div className="flex items-center">
          <Image
            src="/profile-pic.svg"
            alt="profile pic"
            width={32}
            height={32}
            className="mr-4"
          />
          <div className="flex flex-col justify-center mr-8">
            <p className="font-semibold text-base text-white">Tanzir Rahman</p>
            <Link href="/" className="text-[#cacdd3] text-xs">
              View profile
            </Link>
          </div>
          <Link href="/">
            <EllipsisVertical stroke="white" />
          </Link>
        </div>
      </div>
    </div>
  )
}
