import React from "react";

import HeaderBox from "@/components/HeaderBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import PaymentTransferForm from "@/components/PaymentTransferForm";

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  // Handle no accounts or empty data
  if (!accounts || !accounts.data || accounts.data.length === 0) {
    return (
      <section className="payment-transfer">
        <HeaderBox
          title="Payment Transfer"
          subtext="Connect a bank account to start making transfers."
        />

        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            No Connected Accounts
          </h3>
          <p className="text-gray-500 text-center max-w-md mb-8">
            To send money or make transfers, you need to connect at least one
            bank account. Get started by adding your first account.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors mb-8">
            Connect Bank Account
          </button>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-md">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-500 mt-0.5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">
                  Secure Transfers
                </h4>
                <p className="text-sm text-blue-700">
                  All transfers are protected with bank-level encryption and
                  require verification for your security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
};

export default Transfer;
