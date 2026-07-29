export const TreeIcon = ({ size = 24, color = "#000000" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4418_9784)">
        <path
          d="M16.17 10.0603H7.82994C6.64995 10.0603 6.23995 9.27031 6.92995 8.31031L11.1 2.47031C11.59 1.77031 12.41 1.77031 12.89 2.47031L17.06 8.31031C17.76 9.27031 17.35 10.0603 16.17 10.0603Z"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.59 18.0005H6.41998C4.83998 18.0005 4.29998 16.9505 5.22998 15.6705L9.21997 10.0605H14.79L18.78 15.6705C19.71 16.9505 19.17 18.0005 17.59 18.0005Z"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V18"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4418_9784">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
