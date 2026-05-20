import { Beer, Award, Users, LucideIcon } from "lucide-react";
import "./FeatureItem.css";
import { cn } from "../../shared/utils";

export type FeatureItemMode = "default" | "transparent" | "full";

type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
  mode: FeatureItemMode;
};

function FeatureItem({ icon: Icon, title, mode }: FeatureItemProps) {
  return (
    <div className="feature-item">
      <div
        className={cn(
          "feature-item__icon-container",
          `feature-item__icon-container-${mode}`,
        )}
      >
        <Icon
          className={cn("feature-item__icon", `feature-item__icon-${mode}`)}
        />
      </div>

      <div className="feature-item__title">{title}</div>
    </div>
  );
}

const features: FeatureItemProps[] = [
  {
    icon: Beer,
    title: "100% Artesanal",
    mode: "default",
  },
  {
    icon: Award,
    title: "Premiadas",
    mode: "full",
  },
  {
    icon: Users,
    title: "Tradição",
    mode: "transparent",
  },
];

export function FeaturesSection() {
  return (
    <div className="feature-section">
      {features.map((feature) => (
        <FeatureItem
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          mode={feature.mode}
        />
      ))}
    </div>
  );
}
