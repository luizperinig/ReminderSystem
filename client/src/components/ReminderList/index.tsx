import { getOrderedDates } from "@/utils/getOrderedDates";
import { DateTitle, ReminderListContainer, RemindersByDate } from "./styles";
import { getRemindersByDate } from "@/utils/getReminderByDate";
import { Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FormReminder } from "../FormReminder";

export type ReminderProps = {
    id: number;
    title: string;
    date: string;
};

export function ReminderList() {
    const [reminders, setReminders] = useState<Array<ReminderProps>>([]);

    async function fetchReminders() {
        try {
            const response = await axios.get("http://localhost:3030/reminder/getReminder");
            setReminders(response.data);
        } catch (error) {
            console.error("Failed to fetch reminders:", error);
        }
    };

    useEffect(() => {
        fetchReminders(); 
    }, []);

    const handleDeleteReminder = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3030/reminder/deleteReminder/${id}`);
            
            setReminders((prevReminders) => prevReminders.filter(reminder => reminder.id !== id));
            
        } catch (error) {
            console.error("Failed to delete reminder:", error);
        }
    };
    
    const orderedDates = getOrderedDates(reminders);
    const remindersByDate = getRemindersByDate(reminders);

    return (
        <>
            <h1>Novo Lembrete</h1>
            <FormReminder onReminderCreated={fetchReminders} />

            <h1>Lista de Lembretes</h1>  
            <ReminderListContainer>
            {orderedDates.map((date) => {
                const dateObj = new Date(date);

                // Ajuste manual do fuso horário para corrigir a data
                const adjustedDate = new Date(dateObj.getTime() + Math.abs(dateObj.getTimezoneOffset() * 60000));
                
                const formattedDate = adjustedDate.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                });
                
                return (
                    <div key={date}>
                        <DateTitle>{formattedDate}</DateTitle>
                        <RemindersByDate>
                            {remindersByDate[date].map((reminder) => (
                                <li key={reminder.id}> 
                                    {reminder.title}
                                    <Trash onClick={() => handleDeleteReminder(reminder.id)} weight="bold" size={20} />                           
                                </li>
                            ))}
                        </RemindersByDate>
                    </div>
                );
            })}
            </ReminderListContainer>
        </>
    );
    
}
