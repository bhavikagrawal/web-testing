export function getOldestDate(dates: Date[]): Date {
  return dates.reduce((oldest, date) => {
    //   branch 1
    if (date < oldest) {
      return date;
    }
    // branch 2
    return oldest;
  });
}

export function getLuckyDate(dates: Date[]): Date {
  const oldest = getOldestDate(dates);
  const today = new Date();
  const difference = today.getTime() - oldest.getTime();
  const days = difference / (1000 * 3600 * 24);
  // Branch 1
  if (days > 5) {
    return today;
  }
  // Branch 2
  return oldest;
}
