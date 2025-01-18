import Image from 'next/image'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <div className="bg-[#191919] w-[280px] px-7 py-12">
      <Image
        src="/bank-logo-white.svg"
        alt="bank logo"
        width={224}
        height={32}
      />
      <nav className="mt-10">
        <ul className="flex flex-col gap-y-4">
          <li className="flex gap-x-3 py-3 px-4 hover:bg-[#299D91] rounded cursor-pointer">
            <Image
              src="/icons/overview.svg"
              alt="overview icon"
              width={24}
              height={24}
            />
            <Link href="/" className="text-base font-semibold text-white">
              Overview
            </Link>
          </li>

          <li className="flex gap-x-3 py-3 px-4 hover:bg-[#299D91] rounded cursor-pointer">
            <Image
              src="/icons/balances.svg"
              alt="balances icon"
              width={24}
              height={24}
            />
            <Link href="/" className="text-base font-semibold text-white">
              Balances
            </Link>
          </li>

          <li className="flex gap-x-3 py-3 px-4 hover:bg-[#299D91] rounded cursor-pointer">
            <Image
              src="/icons/transactions.svg"
              alt="transactions icon"
              width={24}
              height={24}
            />
            <Link href="/" className="text-base font-semibold text-white">
              Transactions
            </Link>
          </li>

          <li className="flex gap-x-3 py-3 px-4 hover:bg-[#299D91] rounded cursor-pointer">
            <Image
              src="/icons/bill.svg"
              alt="bills icon"
              width={24}
              height={24}
            />
            <Link href="/" className="text-base font-semibold text-white">
              Bills
            </Link>
          </li>

          <li className="flex gap-x-3 py-3 px-4 hover:bg-[#299D91] rounded cursor-pointer">
            <Image
              src="/icons/expenses.svg"
              alt="expenses icon"
              width={24}
              height={24}
            />
            <Link href="/" className="text-base font-semibold text-white">
              Expenses
            </Link>
          </li>

          <li className="flex gap-x-3 py-3 px-4 hover:bg-[#299D91] rounded cursor-pointer">
            <Image
              src="/icons/goal.svg"
              alt="goal icon"
              width={24}
              height={24}
            />
            <Link href="/" className="text-base font-semibold text-white">
              Goals
            </Link>
          </li>

          <li className="flex gap-x-3 py-3 px-4 hover:bg-[#299D91] rounded cursor-pointer">
            <Image
              src="/icons/settings.svg"
              alt="settings icon"
              width={24}
              height={24}
            />
            <Link href="/" className="text-base font-semibold text-white">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
