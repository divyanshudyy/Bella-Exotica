const CustomButton = ({
  text = "CLICK ME",
  textColor = "text-[#3D2B1F]",
  bgColor = "bg-transparent",
  hoverBg = "hover:bg-[#3D2B1F]",
  hoverText = "hover:text-white",
  borderColor = "border-[#3D2B1F]",
  rounded = "rounded-full",
  padding = "px-6 py-4 sm:px-9 sm:py-5 lg:px-10 lg:py-4",
  textSize = "text-xs sm:text-sm lg:text-sm",
  font = "font-semibold font-oakes-grostek",
  margin = "my-10",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`
        ${padding} 
        border ${rounded} ${borderColor} 
        ${textColor} ${bgColor} ${textSize} ${font}
        transition-all duration-300
        ${hoverBg} ${hoverText} ${margin}
       
      `}
    >
      {text}
    </button>
  );
};

export default CustomButton;
