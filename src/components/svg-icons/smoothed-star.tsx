import { ThemeColors } from "@/configs/theme-colors";

interface Props {
  fill?: ThemeColors;
}

const SmoothedStar = ({ fill = ThemeColors.yellow }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.95751 17.093C4.47732 17.3355 3.89639 17.2928 3.45958 16.983C3.02276 16.6731 2.80604 16.15 2.90074 15.6341L3.66717 11.3845L0.440385 8.39315C0.0459655 8.02929 -0.0985836 7.47928 0.0683083 6.97738C0.2352 6.47548 0.684128 6.11013 1.22387 6.03695L5.70405 5.41742L7.72672 1.51425C7.96654 1.04614 8.45993 0.75 9 0.75C9.54007 0.75 10.0335 1.04614 10.2733 1.51425L12.2959 5.41742L16.7761 6.03695C17.3159 6.11013 17.7648 6.47548 17.9317 6.97738C18.0986 7.47928 17.954 8.02929 17.5596 8.39315L14.3328 11.3845L15.0993 15.635C15.194 16.1509 14.9772 16.674 14.5404 16.9839C14.1036 17.2937 13.5227 17.3364 13.0425 17.094L9 15.0732L4.95751 17.093Z"
        fill={fill}
      />
    </svg>
  );
};

export default SmoothedStar;