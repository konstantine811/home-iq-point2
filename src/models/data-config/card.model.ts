import { ThemeColors } from "@/configs/theme-colors";

export interface IServiceCard {
  imagePath: string;
  imageAlt: string;
  rate: number;
  countRated: string;
  description: string;
  btnPrice: string;
}

export interface IReviewCard {
  labelColor: ThemeColors;
  title: string;
  countStar: number;
  description: string;
}

export interface ICardPriceIcon {
  icon: React.ReactNode;
  title: number;
  additionalTitle?: string;
  description: string;
}
