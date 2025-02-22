import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useRouter } from 'expo-router';


const RecentExpenses = () => {
  const router = useRouter();
  
  return (
    <SafeAreaView>
      <View>
        <Text>RecentExpenses</Text>
        <Button title="Manage Expense" onPress={() => router.push('/manage/ManageExpense')} />
      </View>
    </SafeAreaView>

  )
}

export default RecentExpenses;