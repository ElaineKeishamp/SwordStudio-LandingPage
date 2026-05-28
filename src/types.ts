/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  isGoldIcon?: boolean;
}

export interface PortfolioItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  client: string;
  year: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ForgeStep {
  name: string;
  options: string[];
}

export interface InteractiveBrand {
  brandName: string;
  industry: string;
  archetype: string;
  forgedColors: { name: string; hex: string }[];
  motto: string;
  philosophy: string;
  badge: string;
}
