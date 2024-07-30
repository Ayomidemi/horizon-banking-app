

<img width="1440" alt="Screenshot 2024-07-30 at 6 21 32 PM" src="https://github.com/user-attachments/assets/30a8328c-406c-45d3-9db7-89f0780a65b2">


## 🌅 Introduction

Horizon is a financial SaaS platform built with Next.js, designed to connect to multiple bank accounts, display transactions in real-time, allow users to transfer money, and manage their finances comprehensively.


## ✨ Features

- 🔒 Authentication: Ultra-secure server-side rendering (SSR) authentication with robust validations and authorization mechanisms.
- 🔗 Connect Banks: Integrates with Plaid to link multiple bank accounts.
- 🏠 Home Page: Displays a general overview of user accounts, including total balance from all connected banks, recent transactions, and spending categorized.
- 🏦 My Banks: Lists all connected banks with respective balances and account details.
- 📜 Transaction History: Offers pagination and filtering options for viewing transaction history from different banks.
- ⏱️ Real-time Updates: Reflects changes across all relevant pages upon connecting new bank accounts.
- 💸 Funds Transfer: Allows users to transfer funds using Dwolla, requiring fields and recipient bank ID.
- 📱 Responsiveness: Ensures a seamless user experience across desktop, tablet, and mobile devices.
- 🛠️ Code Architecture: Emphasizes code reusability and maintainability.


## 🛠️ Built With
- ⚛️ [Next.js](https://nextjs.org)
- 🟦 [TypeScript](https://www.typescriptlang.org/)
- 📝 [Appwrite](https://appwrite.io/)
- 🔄 [Plaid](https://plaid.com/)
- 💳 [Dwolla](https://www.dwolla.com/)
- 🔄 [React Hook Form](https://react-hook-form.com/)
- 🛠️ [Zod](https://zod.dev/)
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 📊 [Chart.js](https://www.chartjs.org/)
- ⚛️ [ShadCN](https://github.com/shadcn)


## 🚀 Getting Started 

**📋 Prerequisites**
Ensure you have the following installed on your machine:

- 📂 [Git](https://git-scm.com/)
- 🌐 [Node.js](https://nodejs.org/en)
- 📦 [npm](https://www.npmjs.com/) (Node Package Manager)


**📥 Cloning the Repository**

```bash
git clone https://github.com/Ayomidemi/horizon-banking-app.git
cd horizon
```

**📦 Installation**

Install the project dependencies using npm:

```bash
npm install
```

**🔧 Set Up Environment Variables**

Create a new file named .env in the root of your project and make sure it mirrors the structure of env.example.

**🚀 Running the Project**

```bash
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
