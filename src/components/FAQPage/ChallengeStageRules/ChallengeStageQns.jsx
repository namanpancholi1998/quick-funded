let ChallengeStageQns = [
  {
    id: 1,
    routerLink: "what-are-prohibited-trading-strategies",
    question: "What are prohibited trading strategies?",
    answer: `
            Risking your entire account balance on a single trade is strictly forbidden. Engaging in excessively risky trading practices violates our terms and will lead to account termination.
            
            Hedging, which involves opening opposing positions on the same asset, is also strictly prohibited, even across multiple accounts owned by the same trader. This practice undermines fair trading and compromises the integrity of our platform.
            
            The use of third-party Expert Advisors (EAs) is not allowed and will result in account closure. However, if you have developed a custom EA and are willing to share the source code with us and explain the strategy, you may be eligible to use it.
            
            Upon successful evaluation, you may copy trades between QuickFunded Trader accounts and one QuickFunded Evaluation account. Using a Trade Copier is permitted, provided you can prove ownership of the accounts involved in the trade copying.
          `,
  },
  {
    id: 2,
    routerLink: "can-i-trade-economic-news-events",
    question: "Can I trade economic news events?",
    answer:
      "Trading economic news events is restricted on our platform. If you have open positions, ensure that your stop-loss (SL) and take-profit (TP) levels are not triggered during these times. Additionally, refrain from opening new positions within 2 minutes before or after major news releases.",
  },
  {
    id: 3,
    routerLink: "what-funding-models-does-quickfunded-offer",
    question: "What funding models does QuickFunded offer?",
    answer:
      "QuickFunded offers two evaluation models: a one-step challenge and a two-step challenge. Traders who successfully pass these challenges receive funding to trade with our capital.",
  },
  {
    id: 4,
    routerLink: "am-i-allowed-to-copy-trades-or-trade-as-part-of-a-team",
    question: "Am I allowed to copy trades or trade as part of a team?",
    answer:
      "Each trader is expected to develop and execute their own trading strategies independently. Collaborative trading efforts, such as copying trades or trading collectively as a team, are prohibited on our simulated trading platform.",
  },
  {
    id: 5,
    routerLink: "what-instruments-can-i-trade-with-quickfunded",
    question: "What instruments can I trade with QuickFunded?",
    answer:
      "Each trader is expected to develop and execute their own trading strategies independently. Collaborative trading efforts, such as copying trades or trading collectively as a team, are prohibited on our simulated trading platform.",
  },
  {
    id: 6,
    routerLink: "are-there-any-limitations-on-lot-sizes",
    question: "Are there any limitations on lot sizes?",
    answer:
      "There are no specific restrictions on lot sizes for trades conducted on our platform.",
  },
  {
    id: 7,
    routerLink: "what-are-the-guidelines-for-implementing-stop-loss-orders",
    question: "What are the guidelines for implementing stop-loss orders?",
    answer:
      "While we do not mandate the use of stop-loss orders, we highly recommend their use as a risk management tool to protect your trading capital.",
  },
  {
    id: 8,
    routerLink: "how-many-accounts-can-i-purchase",
    question: "How many accounts can I purchase?",
    answer:
      "You can purchase up to $500,000 in total combined equity for the one-step challenge and up to $500,000 for the two-step challenge.",
  },
  {
    id: 9,
    routerLink: "how-is-the-daily-drawdown-calculated",
    question: "How is the daily drawdown calculated?",
    answer: `
        The daily drawdown is initially set at 5% of your starting balance or scaled account balance. It is recalculated based on the higher value between your starting equity or daily balance at each market rollover (12 AM UTC+0).
  
  For example, if your starting equity at the beginning of the day (12 AM UTC+0) is $102,000, but your balance is $100,000, then your daily stop-out level is $97,000 within the same day until the simulated equity resets with your new registered balance at market rollover again.
  
  This calculation method ensures that traders can manage their risk effectively and adjust their trading strategies as necessary to maintain account stability.
        `,
  },
  {
    id: 10,
    routerLink: "what-happens-if-i-fail-the-challenge",
    question: "What happens if I fail the challenge?",
    answer:
      "If you fail the challenge, we will refund 20% of the fee you paid which can only be used to purchase a new challenge and you cannot withdraw it. You can retry as many times as you want.",
  },
  {
    id: 11,
    routerLink: "could-you-explain-the-20-refund-policy",
    question: "Could you explain the 20% refund policy?",
    answer:
      "Under our 20% refund policy, we reimburse 20% of the fee received in your QuickFunded wallet. This can only be used to purchase new challenges. It is designed to encourage traders to continue improving their skills through additional evaluation attempts without financial burden.",
  },
  {
    id: 12,
    routerLink: "is-there-a-maximum-allowable-risk-per-trade",
    question: "Is there a maximum allowable risk per trade?",
    answer:
      "While there is no specific maximum risk rule per trade idea, we encourage traders to adopt prudent risk management practices. Risking a significant portion of your daily drawdown on a single trade idea is discouraged to promote responsible trading behaviour.",
  },
  {
    id: 13,
    routerLink: "is-there-a-maximum-allowable-risk-per-trade",
    question: "Is there a maximum allowable risk per trade?",
    answer:
      "While there is no specific maximum risk rule per trade idea, we encourage traders to adopt prudent risk management practices. Risking a significant portion of your daily drawdown on a single trade idea is discouraged to promote responsible trading behaviour.",
  },
  {
    id: 14,
    routerLink:
      "can-i-merge-accounts-or-use-same-strategy-across-multiple-accounts",
    question:
      "Can I merge accounts or use the same strategy across multiple accounts?",
    answer:
      "Accounts cannot be merged, and each account must have a distinct trading strategy. Using identical trading strategies across multiple challenge or funded accounts is not permitted.",
  },
  {
    id: 15,
    routerLink: "is-trading-by-third-parties-allowed-on-my-account",
    question: "Is trading by third parties allowed on my account?",
    answer:
      "Trading accounts are strictly for individual use, and no third parties are authorized to trade on behalf of the account holder.",
  },
  {
    id: 16,
    routerLink: "can-i-conduct-trading-activities-over-the-weekend",
    question: "Can I conduct trading activities over the weekend?",
    answer:
      "Trading activities are permitted over weekends, specifically for cryptocurrencies.",
  },
  {
    id: 17,
    routerLink: "are-there-any-requirements-regarding-trading-consistency",
    question: "Are there any requirements regarding trading consistency?",
    answer:
      "There are no specific requirements regarding the frequency or pattern of trading activities on our platform.",
  },
  {
    id: 18,
    routerLink: "is-there-an-inactivity-policy-for-accounts",
    question: "Is there an inactivity policy for accounts?",
    answer:
      "Accounts are automatically closed following 90 days of inactivity. To maintain active status, ensure at least one trade is executed within every 90-day period.",
  },
  {
    id: 19,
    routerLink: "are-expert-advisors-eas-permitted-on-your-platform",
    question: "Are Expert Advisors (EAs) permitted on your platform?",
    answer:
      "The use of third-party Expert Advisors (EAs) is prohibited. However, if you have developed a custom EA and are willing to disclose its source code and trading strategy, you may request approval to use it.",
  },
  {
    id: 20,
    routerLink: "what-is-the-minimum-number-of-trading-days-required",
    question: "What is the minimum number of trading days required?",
    answer:
      "A minimum of 3 trading days is required for both challenge and funded accounts.",
  },
  {
    id: 21,
    routerLink: "what-is-the-duration-of-the-challenge-period",
    question: "What is the duration of the challenge period?",
    answer:
      "There is no time limit for completing the challenge period. However, traders must execute at least one trade every 90 days to maintain active status.",
  },
];

export default ChallengeStageQns;
