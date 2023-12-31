const PrimaryPrice = ({ price, color }) => {
  return (
    <div
      style={{ color: color || "#000" }}
      className="flex gap-2.5 items-center"
    >
      <svg
        width="13"
        height="22"
        viewBox="0 0 13 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_143)">
          <path
            d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z"
            fill={color || "white"}
          />
        </g>
        <defs>
          <clipPath id="clip0_0_143">
            <rect
              width="13"
              height="21.3333"
              fill={color || "white"}
              transform="translate(0 0.512939)"
            />
          </clipPath>
        </defs>
      </svg>
      <p className="font-bold tracking-wider">{price || "0.25"} ETH</p>
    </div>
  );
};

export default PrimaryPrice;
