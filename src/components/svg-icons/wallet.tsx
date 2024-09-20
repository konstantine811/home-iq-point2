import { ThemeColors } from "@/configs/theme-colors";

interface Props {
  color?: ThemeColors;
}

const Wallet = ({ color = ThemeColors.blackLight }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5028 7.91581V5.41477C17.5028 4.2637 16.5697 3.33057 15.4186 3.33057H4.58078C3.42971 3.33057 2.49658 4.2637 2.49658 5.41477V6.66529"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5029 12.0842V14.5853C17.5029 15.7363 16.5698 16.6695 15.4187 16.6695H10.8335"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66309 10.5002V16.1693C1.66404 16.9058 3.15609 17.5032 4.99781 17.5032C6.83952 17.5032 8.33158 16.9058 8.33253 16.1693V10.5002"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33158 10.5001C8.33158 11.2366 6.83857 11.834 4.99686 11.834C3.15514 11.834 1.66309 11.2366 1.66309 10.5001C1.66309 9.7627 3.15704 9.16626 4.99781 9.16626C6.83857 9.16626 8.33158 9.76365 8.33253 10.5001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66357 13.3347C1.66357 14.0712 3.15563 14.6686 4.99735 14.6686C6.83906 14.6686 8.33207 14.0712 8.33207 13.3347"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4187 7.91577H17.5029C17.9633 7.91577 18.3366 8.28902 18.3366 8.74945V11.2505C18.3366 11.7109 17.9633 12.0842 17.5029 12.0842H15.4187C14.2676 12.0842 13.3345 11.151 13.3345 9.99997V9.99997C13.3345 8.8489 14.2676 7.91577 15.4187 7.91577V7.91577Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Wallet;