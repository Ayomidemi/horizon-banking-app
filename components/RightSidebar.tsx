import Image from "next/image";
import Link from "next/link";
import React from "react";
import { countTransactionCategories } from "@/lib/utils";
import BankCard from "./BankCard";
import Category from "./Category";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  // Ensure we have arrays to work with
  const safeTransactions = transactions || [];
  const safeBanks = banks || [];

  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user?.firstName?.[0] || user?.name?.[0] || "U"}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {user?.firstName || user?.name || "User"} {user?.lastName || ""}
            </h1>
            <p className="profile-email">{user?.email || "No email"}</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>

        {safeBanks.length > 0 ? (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={safeBanks[0].$id}
                account={safeBanks[0]}
                userName={
                  `${user?.firstName || ""} ${user?.lastName || ""}`.trim() ||
                  "User"
                }
                showBalance={false}
              />
            </div>
            {safeBanks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={safeBanks[1].$id}
                  account={safeBanks[1]}
                  userName={
                    `${user?.firstName || ""} ${user?.lastName || ""}`.trim() ||
                    "User"
                  }
                  showBalance={false}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 px-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-500 text-center">
              No banks connected yet
            </p>
          </div>
        )}

        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Top categories</h2>

          {safeTransactions.length > 0 ? (
            <div className="space-y-5">
              {countTransactionCategories(safeTransactions).map(
                (category, index) => (
                  <Category key={category.name} category={category} />
                )
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500 text-center">
                No spending categories yet
              </p>
            </div>
          )}
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
