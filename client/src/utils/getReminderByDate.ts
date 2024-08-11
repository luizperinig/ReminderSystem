import { ReminderProps } from "@/components/ReminderList";

export const getRemindersByDate = (title: ReminderProps[]): Record<string, ReminderProps[]> => {
    return title.reduce((acc, reminder) => {
        const { date } = reminder;

        if (!acc[date]) {
            acc[date] = [];
        }

        acc[date].push(reminder);

        return acc;
    }, {} as Record<string, ReminderProps[]>);
};
