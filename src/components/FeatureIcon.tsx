import { Package, Hammer, Ruler, Home } from 'lucide-react';
import { ReactElement } from 'react';

interface FeatureIconProps {
  iconName: string;
  className?: string;
}

export default function FeatureIcon({ iconName, className = "w-6 h-6" }: FeatureIconProps) {
  const icons: { [key: string]: ReactElement } = {
    package: <Package className={className} />,
    construction: <Hammer className={className} />,
    ruler: <Ruler className={className} />,
    home: <Home className={className} />,
  };

  return icons[iconName] || <Package className={className} />;
}
