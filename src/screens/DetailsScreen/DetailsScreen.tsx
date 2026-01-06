import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../store/taskSlice';
import { globalStyles as styles } from '../../constants/theme';

const DetailsScreen = ({ route, navigation }: any) => {
  const { task } = route.params;
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = React.useState(false);
  const [editTitle, setEditTitle] = React.useState(task.title);
  const [editDesc, setEditDesc] = React.useState(task.description);
  const [editPriority, setEditPriority] = React.useState(task.priority);
  const [editCategory, setEditCategory] = React.useState(task.category);

  const handleSave = () => {
    dispatch(
      updateTask({
        ...task,
        title: editTitle,
        description: editDesc,
        priority: editPriority,
        category: editCategory,
      }),
    );
    setIsEditing(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.detailsContainer}>
      <View style={styles.detailsCard}>
        {isEditing ? (
          <View>
            <Text style={styles.detailLabel}>Title</Text>
            <TextInput
              style={styles.editInput}
              value={editTitle}
              onChangeText={setEditTitle}
            />
            <Text style={styles.detailLabel}>Description</Text>
            <TextInput
              style={[styles.editInput, { height: 80 }]}
              value={editDesc}
              onChangeText={setEditDesc}
              multiline
            />
            <Text style={styles.detailLabel}>Priority</Text>
            <View style={styles.editRow}>
              {(['High', 'Medium', 'Low'] as const).map(p => (
                <TouchableOpacity
                  key={p}
                  style={[
                    styles.miniChip,
                    editPriority === p && {
                      backgroundColor: '#075a4fff',
                      borderColor: '#00ffc8ff',
                    },
                  ]}
                  onPress={() => setEditPriority(p)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      editPriority === p && {
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                      },
                    ]}
                  >
                    {p}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.detailLabel}>Category</Text>
            <View style={styles.editRow}>
              {(['Work', 'Personal', 'Urgent'] as const).map(c => (
                <TouchableOpacity
                  key={c}
                  style={[
                    styles.miniChip,
                    editCategory === c && {
                      backgroundColor: '#075a4fff',
                      borderColor: '#00ffc8ff',
                    },
                  ]}
                  onPress={() => setEditCategory(c)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      editCategory === c && {
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                      },
                    ]}
                  >
                    {c}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save All Changes</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View
              style={[
                styles.detailHeader,
                {
                  borderLeftColor:
                    task.priority === 'High' ? '#ff0000ff' : '#ffdd00ff',
                },
              ]}
            >
              <Text style={styles.detailCategory}>{task.category}</Text>
              <Text style={styles.detailTitle}>{task.title}</Text>
            </View>
            <Text style={styles.detailLabel}>Description</Text>
            <Text style={styles.detailText}>
              {task.description || 'No description.'}
            </Text>
            <TouchableOpacity
              style={styles.editToggleButton}
              onPress={() => setIsEditing(true)}
            >
              <Text style={styles.editToggleText}>Edit Task</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
