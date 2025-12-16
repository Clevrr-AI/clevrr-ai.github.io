import { ReactNode } from "react";

export interface Integration {
  name: string;
  logo: string; // URL for the brand logo image
  color?: string; // Optional specific brand color override
}

export interface UseCaseText {
  highlight: string; // The word to be cursive and gradient
  rest: string;      // The rest of the sentence
}

export interface UseCase {
  id: number;
  actionText: UseCaseText;
  integrations: Integration[];
  placeholder: string;
}

export interface NavItem {
  label: string;
  href: string;
  isPrimary?: boolean;
}