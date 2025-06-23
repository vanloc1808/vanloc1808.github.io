export const timeConverter = (inputDate: string) => {
  const currentDate = new Date(inputDate);
  const timeDifference = Date.now() - currentDate.getTime();
  const timeAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (timeAgo === 0) {
    return 'today';
  } else if (timeAgo === 1) {
    return 'yesterday';
  } else if (timeAgo < 30) {
    return `${timeAgo} days ago`;
  } else if (timeAgo < 365) {
    const monthsAgo = Math.floor(timeAgo / 30);
    return monthsAgo === 1 ? 'a month ago' : `${monthsAgo} months ago`;
  } else {
    const yearsAgo = Math.floor(timeAgo / 365);
    return yearsAgo === 1 ? 'a year ago' : `${yearsAgo} years ago`;
  }
};

export const getMonthName = (
  month: number,
  locale: 'en' | 'vi' = 'en'
): string => {
  const monthNames = {
    en: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    vi: [
      'T1',
      'T2',
      'T3',
      'T4',
      'T5',
      'T6',
      'T7',
      'T8',
      'T9',
      'T10',
      'T11',
      'T12',
    ],
  };

  return monthNames[locale][month - 1] || '';
};

export const formatDateForLocale = (
  dateString: string,
  locale: 'en' | 'vi' = 'en'
): string => {
  // Handle different date formats
  let date: Date;

  // Try to parse the date string
  if (dateString.includes('tháng')) {
    // Already in Vietnamese format, convert to Date object
    const parts = dateString.match(/(\d+) tháng (\d+), (\d+)/);
    if (parts) {
      date = new Date(
        parseInt(parts[3]),
        parseInt(parts[2]) - 1,
        parseInt(parts[1])
      );
    } else {
      date = new Date(dateString);
    }
  } else {
    date = new Date(dateString);
  }

  if (isNaN(date.getTime())) {
    return dateString; // Return original if parsing fails
  }

  if (locale === 'vi') {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day} tháng ${month}, ${year}`;
  } else {
    // Return English format
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
};
