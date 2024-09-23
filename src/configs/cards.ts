import { IReviewCard } from "@/models/data-config/card.model";
import { ThemeColors } from "./theme-colors";

export const SVG_PATH_CONFIG = [
  {
    path: () => import("@/components/svg-icons/bathroom"),
    title: "Bathroom Remodel",
  },
  // {
  //   path: () => import("@/assets/svg/kitchen.svg"),
  //   title: "Kitchen Remodel",
  // },
  // {
  //   path: () => import("@/assets/svg/gutter.svg"),
  //   title: "Gutter",
  // },
  // {
  //   path: () => import("@/assets/svg/home-security.svg"),
  //   title: "Home Security",
  // },
  // {
  //   path: () => import("@/assets/svg/hvac.svg"),
  //   title: "HVAC",
  // },
  // {
  //   path: () => import("@/assets/svg/roofing.svg"),
  //   title: "Roofing",
  // },
  // {
  //   path: () => import("@/assets/svg/windows.svg"),
  //   title: "Windows",
  // },
  // {
  //   path: () => import("@/assets/svg/bath-to-shower.svg"),
  //   title: "Bath to Shower",
  // },
  // {
  //   path: () => import("@/assets/svg/walk-in-tubs.svg"),
  //   title: "Walk-in Tubs",
  // },
  // {
  //   path: () => import("@/assets/svg/walk-in-shower.svg"),
  //   title: "Walk-in Shower",
  // },
];

export const ReviewCardItems: IReviewCard[] = [
  {
    labelColor: ThemeColors["yellow-300"],
    title: "Rosario Jean Simon",
    countStar: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing varius sociis elit dolor. In fermentum nunc proin et egestas justo rhoncus. Morbi urna arcu gravida tincidunt arcu nisl habitant. Lectus pulvinar sed lacus massa.",
  },
  {
    labelColor: ThemeColors["blue-500"],
    title: "Rosario Jean Simon",
    countStar: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing varius sociis elit dolor. In fermentum nunc proin et egestas justo rhoncus. Morbi urna arcu gravida tincidunt arcu nisl habitant. Lectus pulvinar sed lacus massa.",
  },
  {
    labelColor: ThemeColors["pink-500"],
    title: "DavidJacques",
    countStar: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing varius sociis elit dolor. In fermentum nunc proin et egestas justo rhoncus. Morbi urna arcu gravida tincidunt arcu nisl habitant. Lectus pulvinar sed lacus massa.",
  },
  {
    labelColor: ThemeColors["green-500"],
    title: "Larry C.",
    countStar: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing varius sociis elit dolor. In fermentum nunc proin et egestas justo rhoncus. Morbi urna arcu gravida tincidunt arcu nisl habitant. Lectus pulvinar sed lacus massa.",
  },
  {
    labelColor: ThemeColors["violet-700"],
    title: "Frank J.",
    countStar: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing varius sociis elit dolor. In fermentum nunc proin et egestas justo rhoncus. Morbi urna arcu gravida tincidunt arcu nisl habitant. Lectus pulvinar sed lacus massa.",
  },
];

export const ReviewCardItems2: IReviewCard[] = [
  {
    labelColor: ThemeColors["yellow-300"],
    title: "Rosario Jean Simon",
    countStar: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing varius sociis elit dolor. In fermentum nunc proin et egestas justo rhoncus. Morbi urna arcu gravida tincidunt arcu nisl habitant. Lectus pulvinar sed lacus massa.",
  },
  {
    labelColor: ThemeColors["green-500"],
    title: "Larry C.",
    countStar: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing varius sociis elit dolor. In fermentum nunc proin et egestas justo rhoncus. Morbi urna arcu gravida tincidunt arcu nisl habitant. Lectus pulvinar sed lacus massa.",
  },
  {
    labelColor: ThemeColors["violet-700"],
    title: "Frank J.",
    countStar: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing varius sociis elit dolor. In fermentum nunc proin et egestas justo rhoncus. Morbi urna arcu gravida tincidunt arcu nisl habitant. Lectus pulvinar sed lacus massa.",
  },
];
