import { BarChart3, Blocks, Bot, Compass, Globe2, PanelsTopLeft } from 'lucide-react';
const icons = [Compass, Blocks, Bot, BarChart3, Globe2, PanelsTopLeft];
export default function ServiceIcon({ index, className = 'h-6 w-6' }: { index: number; className?: string }) {
  const Icon = icons[index % icons.length];
  return <Icon className={className} aria-hidden="true" />;
}