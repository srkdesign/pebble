const WindowsIcon = ({ size = 24, color = "#000000" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.3043 17.9933V26.8176L17.3668 25.1994V17.9933H27.3043ZM12.8424 17.9933V24.549L4.75159 23.2307V17.9933H12.8424ZM27.3043 14.009H17.3668V6.82831L27.3043 5.18182V14.009ZM12.8424 14.006H4.75159V8.82831L12.8424 7.48749V14.006Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        style={{ fill: "var(--fillg)", stroke: "var(--fillg)" }}
      />
    </svg>
  );
};

export default WindowsIcon;
