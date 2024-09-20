import { ThemeColors } from "@/configs/theme-colors";

interface Props {
  color?: ThemeColors;
}

const Users = ({ color = ThemeColors["red-700"] }: Props) => {
  return (
    <svg
      width="29"
      height="20"
      viewBox="0 0 29 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.7576 7.11071C25.6793 8.03241 25.6793 9.52678 24.7576 10.4485C23.8359 11.3702 22.3415 11.3702 21.4198 10.4485C20.4981 9.52678 20.4981 8.03241 21.4198 7.11071C22.3415 6.18901 23.8359 6.18901 24.7576 7.11071"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0696 2.89767C18.4889 4.3169 18.4889 6.61793 17.0696 8.03716C15.6504 9.45639 13.3494 9.45639 11.9301 8.03716C10.5109 6.61794 10.5109 4.31691 11.9301 2.89767C13.3494 1.47845 15.6504 1.47845 17.0696 2.89767"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.57983 7.11071C8.50154 8.03241 8.50154 9.52678 7.57983 10.4485C6.65813 11.3702 5.16376 11.3702 4.24206 10.4485C3.32036 9.52678 3.32036 8.03241 4.24206 7.11071C5.16376 6.18901 6.65813 6.18901 7.57983 7.11071"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.3331 18.1665V16.8879C27.3331 15.2767 26.0276 13.9712 24.4164 13.9712H23.4819"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.6665 18.1665V16.8879C1.6665 15.2767 2.972 13.9712 4.58317 13.9712H5.51767"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7289 18.1665V16.2987C20.7289 14.0435 18.9007 12.2153 16.6455 12.2153H12.3534C10.0982 12.2153 8.27002 14.0435 8.27002 16.2987V18.1665"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Users;