export const getOrderedDates = (reminders: Array<{ date: string }>): string[] => {
    const dates = reminders.map(reminder => reminder.date);

    // Remover duplicatas e ordenar
    const uniqueDates = Array.from(new Set(dates)).sort((a, b) => {
        return new Date(a).getTime() - new Date(b).getTime();
    });

    return uniqueDates;
};
