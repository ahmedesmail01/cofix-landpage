// navigation.ts
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ar"] as const;
export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation(
  { locales }
);
