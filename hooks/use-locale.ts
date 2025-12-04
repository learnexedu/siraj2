import { useLocale } from "next-intl";

export const useAr = () => {
  // return
  return useLocale() == "ar";
};
