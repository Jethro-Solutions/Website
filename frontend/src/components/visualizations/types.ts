// Generic data point interface
export interface DataPoint {
  label: string;
  value: number;
  color?: string;
  tooltip?: string;
  id?: string | number;
  [key: string]: any;
}

// Time series data point
export interface TimeSeriesPoint extends DataPoint {
  timestamp: number | string | Date;
}

// Comparison data point for before/after visualizations
export interface ComparisonPoint {
  label: string;
  before: number;
  after: number;
  improvement?: number;
  color?: string;
  tooltip?: string;
}

// Configuration for chart animations
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  staggered?: boolean;
  staggerAmount?: number;
  repeat?: number;
  yoyo?: boolean;
  scrollTriggered?: boolean;
  onComplete?: () => void;
  onStart?: () => void;
}

// Configuration for chart appearance and behavior
export interface ChartConfig {
  title?: string;
  subtitle?: string;
  height?: number | string;
  width?: number | string;
  padding?: number | { top: number; right: number; bottom: number; left: number };
  theme?: 'light' | 'dark';
  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';
  animation?: AnimationConfig;
  interactive?: boolean;
  axisLabels?: { x?: string; y?: string };
  gradients?: boolean;
  backgroundGradient?: string;
  className?: string;
  strokeWidth?: number;
  responsive?: boolean;
}

// Chart type options
export type ChartType = 'bar' | 'line' | 'pie' | 'area' | 'radar' | 'comparison' | 'timeline' | 'stat';

// Chart specific props
export interface BaseChartProps {
  config?: ChartConfig;
  className?: string;
}

export interface DataChartProps extends BaseChartProps {
  data: DataPoint[];
  chartType: ChartType;
}

export interface BarChartProps extends BaseChartProps {
  data: DataPoint[];
  horizontal?: boolean;
  stacked?: boolean;
  grouped?: boolean;
}

export interface LineChartProps extends BaseChartProps {
  data: TimeSeriesPoint[];
  area?: boolean;
  smooth?: boolean;
  points?: boolean;
}

export interface PieChartProps extends BaseChartProps {
  data: DataPoint[];
  donut?: boolean;
  explode?: boolean;
  startAngle?: number;
  endAngle?: number;
}

export interface StatCardProps extends BaseChartProps {
  value: number | string;
  label: string;
  icon?: React.ReactNode;
  trend?: number;
  trendLabel?: string;
  format?: string | ((value: number | string) => string);
}

export interface ComparisonChartProps extends BaseChartProps {
  data: ComparisonPoint[];
  layout?: 'horizontal' | 'vertical';
}

export interface TimelineChartProps extends BaseChartProps {
  data: TimeSeriesPoint[];
  milestones?: TimeSeriesPoint[];
  startDate?: Date | string | number;
  endDate?: Date | string | number;
}

export interface DataFlowProps extends BaseChartProps {
  nodes: Array<{ id: string; label: string; value?: number }>;
  links: Array<{ source: string; target: string; value: number }>;
  direction?: 'horizontal' | 'vertical';
} 