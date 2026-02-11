import TradingAccountHero from "@/components/trading-accounts/trading-account-hero";
import AccountOptionsSection from "@/components/trading-accounts/account-options-section";
import MissionQuoteSection from "@/components/trading-accounts/mission-quote-section";
import AccountTypesSection from "@/components/trading-accounts/account-types-section";
import Faqs, { FAQItem } from "@/components/Faqs";

const accountsFaqs: FAQItem[] = [
  {
    question: "How can I open an account?",
    answer:
      'To open an account, click the "Open an Account" button available across our pages. Register if you’re a new user, or log in if you already have an account. Then click "Accounts" in the sidebar, select "Live Account", and finally click "Add Live Account". At Stonefort Securities, we’re all about simplicity, and we’ve made this process seamless and quick.',
  },
  {
    question: "Is there a way to try out the platform before opening a demo or a real account?",
    answer:
      'Absolutely! Click "Try Demo" to quickly sign up for a demo account. On the same screen, we’ll provide your demo credentials and a link so you can log into WebTrader and start in just a few minutes. We’ll also email you all the necessary information and links.',
  },
  {
    question: "How long does it take for my account to be opened?",
    answer:
      "There’s no fixed time, but we aim to open all accounts on the same day we receive the application. If you submit your information and required documents early, and everything is complete, your account could be ready within a few hours. The final step is to fund your account and start trading.",
  },
  {
    question: "How can I deposit or withdraw?",
    answer:
      'All funding and withdrawal operations are conducted within the secure client area. Log in with your credentials, go to "Wallet", and click "Deposit Funds" or "Withdraw Funds". Visit our Account Funding page to explore all available funding options.',
  },
];


export const metadata = {
  title: "Stonefort Accounts",
  description:
    "Trade smarter with flexible account options for every level – Starter, Advanced, and Elite.",
};

export default function TradingAccountPage() {
  return (
    <>
      <TradingAccountHero />
      <AccountOptionsSection />
      <MissionQuoteSection />
      <AccountTypesSection />
                  <Faqs
              badgeLabel="Account Types FAQs"
              title="Account Types FAQs – Understand the Markets Better "
              subtitle=""             
              items={accountsFaqs}      
              initiallyOpenIndex={null} 
            />
    </>
  );
}
