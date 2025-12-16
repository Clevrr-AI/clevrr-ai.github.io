import React from 'react';
import { UseCase, NavItem } from './types';

export const USE_CASES: UseCase[] = [
  {
    id: 1,
    actionText: {
      highlight: "Predict",
      rest: "stockouts & pause leaking ads"
    },
    placeholder: "Ask Clevrr AI to do ANYTHING...",
    integrations: [
      { name: "Meta Ads", logo: "https://getclevrr.com/integrations/meta.png" },
      { name: "Amazon", logo: "https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1740113564" },
      { name: "EasyEcom", logo: "https://images.softwaresuggest.com/software_logo/1681977454_Asset_2icon.png" },
      { name: "Delhivery", logo: "https://companieslogo.com/img/orig/DELHIVERY.NS-24f77207.png?t=1720244491" }
    ]
  },
  {
    id: 2,
    actionText: {
      highlight: "Block",
      rest: "RTO-heavy pincodes instantly"
    },
    placeholder: "Ask Clevrr AI to do ANYTHING...",
    integrations: [
      { name: "Shiprocket", logo: "https://getclevrr.com/integrations/shiprocket.png" },
      { name: "Google Ads", logo: "https://getclevrr.com/integrations/google.png" },
      { name: "Shopify", logo: "https://getclevrr.com/integrations/shopify.png" }
    ]
  },
  {
    id: 3,
    actionText: {
      highlight: "Reconcile",
      rest: "COD payments automatically"
    },
    placeholder: "Ask Clevrr AI to do ANYTHING...",
    integrations: [
      { name: "Razorpay", logo: "https://static-asset.inc42.com/logo/razorpay.png" },
      { name: "BlueDart", logo: "https://companieslogo.com/img/orig/BLUEDART.NS-ce04d13e.png" },
      { name: "Zoho Books", logo: "https://img.icons8.com/fluent/1200/zoho-books.jpg" }
    ]
  },
  {
    id: 4,
    actionText: {
      highlight: "Analyze",
      rest: "Ad ROAS against Returns"
    },
    placeholder: "Ask Clevrr AI to do ANYTHING...",
    integrations: [
      { name: "Shopify", logo: "https://getclevrr.com/integrations/shopify.png" },
      { name: "Meta Ads", logo: "https://getclevrr.com/integrations/meta.png" },
      { name: "Analytics", logo: "https://getclevrr.com/integrations/google.png" },
      { name: "Unicommerce", logo: "https://mma.prnewswire.com/media/1701992/Unicommerce_logo.jpg" }
    ]
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Solutions", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "https://blog.getclevrr.com?utm-source=landing&utm-medium=navbar" },
  { label: "Get Started", href: "https://cal.getclevrr.com", isPrimary: true },
];

// Expanded list for the Swarm Animation
export const SWARM_INTEGRATIONS = [
  { name: "Shopify", logo: "https://getclevrr.com/integrations/shopify.png" },
  { name: "Meta Ads", logo: "https://getclevrr.com/integrations/meta.png" },
  { name: "Google", logo: "https://getclevrr.com/integrations/google.png" },
  { name: "Amazon", logo: "https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1740113564" },
  { name: "Shiprocket", logo: "https://getclevrr.com/integrations/shiprocket.png" },
  { name: "Razorpay", logo: "https://static-asset.inc42.com/logo/razorpay.png" },
  { name: "Zoho", logo: "https://img.icons8.com/fluent/1200/zoho-books.jpg" },
  { name: "Delhivery", logo: "https://companieslogo.com/img/orig/DELHIVERY.NS-24f77207.png?t=1720244491" },
  { name: "EasyEcom", logo: "https://images.softwaresuggest.com/software_logo/1681977454_Asset_2icon.png" },
  { name: "Unicommerce", logo: "https://mma.prnewswire.com/media/1701992/Unicommerce_logo.jpg" },
  { name: "BlueDart", logo: "https://companieslogo.com/img/orig/BLUEDART.NS-ce04d13e.png" },
  { name: "WooCommerce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/WooCommerce_logo_%282015%29.svg/1024px-WooCommerce_logo_%282015%29.svg.png" }
];