const FeatureItem = ({ number, title, description }) => {
  return (
    <div className="flex gap-3 sm:gap-4 items-start">
      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500">
        {number}.
      </span>
      <div className="flex flex-col gap-1 sm:gap-2 text-left">
        <h4 className="font-bold text-sm sm:text-base text-gray-900">{title}</h4>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;