import Link from 'next/link'

import { BellDot, ChevronsRight, Search } from 'lucide-react'

export const Header = () => {
  return (
    <header className="flex py-[30px] px-6 border border-b-[#E8E8E8] bg-[#E8E8E8]">
      <div className="flex items-center gap-x-6 flex-1">
        <p className="font-bold text-2xl leading-none">Hello Tanzir</p>
        <span className="flex items-center">
          <ChevronsRight className="align-middle" /> May 19, 2023
        </span>
      </div>

      <div className="flex items-center gap-x-10">
        <Link href="/">
          <BellDot />
        </Link>

        <div className="flex w-[352px] items-center bg-white py-3 px-4 rounded-xl relative">
          <input
            type="text"
            placeholder="Search here"
            className="outline-none w-full pr-10"
          />
          <Search
            stroke="#525256"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
    </header>
  )
}
