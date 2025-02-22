import { Stack } from 'expo-router';

export default function ManageLayout() {
  return (
    <Stack>
      <Stack.Screen name="ManageExpense" options={{ title: 'Manage Expense', headerBackTitle: 'Back' }} />
    </Stack>
  );
}