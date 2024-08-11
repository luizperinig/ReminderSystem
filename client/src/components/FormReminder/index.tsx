import { useForm } from "react-hook-form";
import { ButtonContainer, Container, FormError, FormReminderContainer, InputContainer } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

// Função auxiliar para validar se a data é futura
const isFutureDate = (dateString: string) => {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Zera as horas para comparar apenas as datas
    return selectedDate > today;
};

const reminderSchema = z.object({
    title: z.string().min(2, { message: "O lembrete deve ter no mínimo 2 caracteres" }),
    date: z.string()
        .min(10, { message: "Insira uma data válida no formato 'dd/mm/aaaa'" })
        .max(10, { message: "Insira uma data válida no formato 'dd/mm/aaaa'" })
        .refine(isFutureDate, { message: "A data deve ser futura" }), // Adiciona a validação de data futura
});

type ReminderData = z.infer<typeof reminderSchema>;

type FormReminderProps = {
    onReminderCreated: () => void; // Define a prop para notificar a criação do reminder
};

export function FormReminder({ onReminderCreated }: FormReminderProps) {
    const { 
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ReminderData>({
        resolver: zodResolver(reminderSchema),
    });

    async function handleCreateReminder(data: ReminderData) {
        try {
            await axios.post("http://localhost:3030/reminder/newReminder", data);
            onReminderCreated(); // Chama a função passada via prop para atualizar a lista
        } catch (error) {
            console.error("Error creating reminder:", error);
        }
    }

    return (
        <Container>
            <FormReminderContainer onSubmit={handleSubmit(handleCreateReminder)}>
                <div>
                    <label htmlFor="title">Nome</label>
                    <InputContainer type="text" placeholder="Nome do lembrete" id="title" {...register('title')} />
                    {errors.title && <FormError>{errors.title.message}</FormError>}
                </div>
                    
                <div>
                    <label htmlFor="date">Data</label>
                    <InputContainer type="date" id="date" {...register('date')} />
                    {errors.date && <FormError>{errors.date.message}</FormError>}
                </div>

                <ButtonContainer type="submit" disabled={isSubmitting}>CRIAR</ButtonContainer>
            </FormReminderContainer>
        </Container>
    );
}
