import FeatureBox from "@components/Marketing";
import featureMarketingData from "@hooks/feature_marketing";

export default function Marketing() {
  return (
    <div className="grid grid-cols-3 gap-20 mt-20 mx-60">
      {featureMarketingData.map((feature, index) => (
        <FeatureBox
          key={index}
          image={feature.image}
          role_name={feature.role_name}
          description={feature.description}
        />
      ))}
    </div>
  );
}