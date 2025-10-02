import type { DailyEntry, SummaryData } from '../types';

export const calculateSummaries = (entries: DailyEntry[]): SummaryData => {
  const now = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7);

  const weekly = { steps: 0, pushups: 0, pullups: 0 };
  const total = { steps: 0, pushups: 0, pullups: 0 };

  entries.forEach(entry => {
    const entryDate = new Date(entry.date);
    
    // Aggregate totals
    total.steps += entry.steps;
    total.pushups += entry.pushups;
    total.pullups += entry.pullups;

    // Aggregate weekly if within the last 7 days
    if (entryDate >= oneWeekAgo && entryDate <= now) {
      weekly.steps += entry.steps;
      weekly.pushups += entry.pushups;
      weekly.pullups += entry.pullups;
    }
  });

  return { weekly, total };
};