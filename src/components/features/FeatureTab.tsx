
type Feature = {
  title: string;
  subtitle: string;
  image: string;
};

interface FeatureTabProps {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
}

const FeatureTab = ({ feature, isActive, onClick }: FeatureTabProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-2xl transition-all duration-200 ${
        isActive
          ? "bg-vitruve-cyan/10 border border-vitruve-cyan/20"
          : "hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200"
      }`}
    >
      <h3 
        className={`text-xl font-semibold mb-2 ${
          isActive
            ? "text-vitruve-cyan"
            : "text-gray-900 dark:text-white transition-colors duration-200"
        }`}
      >
        {feature.title}
      </h3>
      <p className={`${
        isActive
          ? "block text-gray-700 dark:text-white/70 transition-colors duration-200"
          : "hidden"
      }`}>
        {feature.subtitle}
      </p>
    </button>
  );
};

export default FeatureTab;
