import { ReactNode } from 'react';

export type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  description: string;
  icon?: ReactNode;
  imageUrl?: string;
}; 