const CustomButton = ({
  text = "CLICK ME",
  textColor = "text-stone-800",
  bgColor = "bg-transparent",
  hoverBg = "hover:bg-stone-800",
  hoverText = "hover:text-white",
  borderColor = "border-stone-800",
  rounded = "rounded-full",
  padding = "px-6 py-4 sm:px-9 sm:py-5 lg:px-10 lg:py-4",
  textSize = "text-xs sm:text-sm lg:text-sm",
  font = "font-semibold tracking-widest",
  margin = "my-10",
  
}) => {
  return (
    <button
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
