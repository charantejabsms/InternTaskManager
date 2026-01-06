import React from 'react';
import {
  View,
  FlatList,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { addTask, toggleTask, deleteTask } from '../../store/taskSlice';
import TaskInput from '../../components/molecules/TaskInput';
import TaskItem from '../../components/molecules/TaskItem';
import { I18n } from '../../constants/localization';
import { globalStyles as styles } from '../../constants/theme';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.items);

  const [searchQuery, setSearchQuery] = React.useState('');
  const [activePriority, setActivePriority] = React.useState<
    'All' | 'High' | 'Medium' | 'Low'
  >('All');

  const filteredTasks = tasks.filter(task => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority =
      activePriority === 'All' || task.priority === activePriority;
    return matchesSearch && matchesPriority;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E14" />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{I18n.home.headerTitle}</Text>
      </View>

      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search entries..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#546E7A"
        />
      </View>

      <View style={styles.filterRow}>
        {(['All', 'High', 'Medium', 'Low'] as const).map(p => (
          <TouchableOpacity
            key={p}
            onPress={() => setActivePriority(p)}
            style={[
              styles.filterChip,
              activePriority === p ? styles.filterChipActive : null,
            ]}
          >
            <Text
              style={[
                styles.filterChipText,
                activePriority === p ? styles.filterChipTextActive : null,
              ]}
            >
              {p}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TaskInput
        onAddTask={formData => dispatch(addTask(formData))}
        isSearching={searchQuery.length > 0}
      />

      <View style={styles.taskListArea}>
        <View style={styles.countContainer}>
          <Text style={styles.taskCountText}>
            {searchQuery ? 'MATCHES: ' : `${I18n.home.taskCount}: `}
            <Text style={styles.countNumber}>
              {searchQuery ? filteredTasks.length : tasks.length}
            </Text>
          </Text>
        </View>

        <FlatList
          data={filteredTasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onToggle={id => dispatch(toggleTask(id))}
              onDelete={id => dispatch(deleteTask(id))}
            />
          )}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          removeClippedSubviews={true}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyList}>{I18n.home.emptyList}</Text>
            </View>
          }
          contentContainerStyle={{ paddingBottom: 60 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
