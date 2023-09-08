export const searchFilter = [
  {
    label: "All",
  },
  {
    label: "Email Address",
  },
  {
    label: "Transaction ID",
  },
  {
    label: "Case ID",
  },
  {
    label: "Last Name",
  },
  {
    label: "First Name",
  },
  {
    label: "Business Name",
  },
  {
    label: "Card Number",
  },
  {
    label: "Receipt ID",
  },
  {
    label: "Invoice ID",
  },
  {
    label: "Auction Item Number",
  },
  {
    label: "Order ID",
  },
  {
    label: "Billing Agreement",
  },
  {
    label: "Profile ID",
  },
  {
    label: "Store ID",
  },
  {
    label: "Payout ID",
  },
];

export const archive = [
  {
    label: "Active",
  },
  {
    label: "Archive",
  },
  {
    label: "All",
  },
];

export const date = [
  {
    label: "Past 30 days",
    value: "past 30 days"
  },
  {
    label: "Past 90 days",
    value: "past 90 days"
  },
  {
    label: "2023",
    value: "2023"
  },
  {
    label: "2022",
    value: "2022"
  },
];

export const currency = [
  {
    label: "All currencies",
    value: "all currencies"
  },
  {
    label: "USD",
    value: "usd"
  },
];

export const activity = [
  { 
    label: "All activity", 
    value: "all activity" 
  },
  {
    label: "Transaction",
    value: "transaction",
    children: [
      { label: "Payments received", value: "payments received" },
      { label: "Payments sent", value: "payments sent" },
      { label: "Money transferred", value: "money transferred" },
      { label: "Money added", value: "money added" },
      { label: "Refunds", value: "refunds" },
      { label: "Billing agreements and profiles", value: "billing agreements and profiles" },
      { label: "Subscription payments", value: "subscription payments" },
      { label: "Reversals", value: "reversals" },
      { label: "Currency conversions", value: "currency conversions" },
    ],
  },
  {
    label: "Funding Instruments",
    value: "funding instruments",
    children: [
      { label: "eChecks", value: "eChecks" },
    ],
  },
  { 
    label: "Balance view (All transactions)", 
    value: "balance view all transactions)" 
  },
  { 
    label: "Money requests", 
    value: "money requests" 
  },
  { 
    label: "Ready to ship", 
    value: "ready to ship"  
  },
  { 
    label: "Payouts", 
    value: "payouts" 
  },
  {
    label: "Invoices",
    value: "invoices",
    children: [
      { label: "All invoices", value: "all invoices" },
      { label: "Paid", value: "paid" },
      { label: "Unpaid", value: "unpaid" },
    ],
  },
  { 
    label: "Orders", 
    value: "orders" 
  },
  {
    label: "Holds",
    value: "holds",
    children: [
      { label: "All holds", value: "all holds" },
      { label: "Reserves placed", value: "reserves placed" },
      { label: "Payment on hold", value: "payment on hold" },
      { label: "Payment under review", value: "payment under review" },
    ],
  },
  {
    label: "Fraud protection",
    value: "fraud protection",
    children: [
      { label: "Denied", value: "denied" },
    ],
  },
];
