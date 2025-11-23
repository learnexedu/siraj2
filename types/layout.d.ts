// links
export interface Link {
  label: string;
  link: string;
  icon?: React.ReactNode | IconType | string;
  status?: boolean;
}

// cards
export interface Card {
  title: string;
  subTitle?: string;
  desc: string;
  icon?: React.ReactNode | IconType | string;
}