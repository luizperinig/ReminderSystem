import { FormReminder } from "@/components/FormReminder";
import { ReminderList } from "@/components/ReminderList";
import { Container, ReminderContainer } from "@/styles/pages/home";

export default function Home() {
  return (
    <Container>
      <ReminderContainer>
        <ReminderList />
      </ReminderContainer>
    </Container>
  );
}