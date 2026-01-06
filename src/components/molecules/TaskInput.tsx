import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Keyboard,
  ScrollView,
  Modal,
} from 'react-native';

export interface TaskInputProps {
  onAddTask: (data: {
    title: string;
    description: string;
    category: 'Work' | 'Personal' | 'Urgent';
    priority: 'High' | 'Medium' | 'Low';
  }) => void;
  isSearching: boolean;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask, isSearching }) => {
  const [showForm, setShowForm] = useState(false);

  // ELITE Theme Colors
  const ELITE = {
    void: '#0A0E14',
    midnight: '#141B26',
    slate: '#00ffe556',
    silver: '#E2E8F0',
    starlight: '#94b8b4ff',
    electric: '#00ffaaff',
    crimson: '#FF4D4D',
  };

  React.useEffect(() => {
    if (isSearching) {
      setShowForm(false);
    }
  }, [isSearching]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<'Work' | 'Personal' | 'Urgent'>(
    'Work',
  );
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');

  const handleAdd = () => {
    if (title.trim() === '') return;
    onAddTask({
      title: title.trim(),
      description: description.trim(),
      category,
      priority,
    });
    setTitle('');
    setDescription('');
    setCategory('Work');
    setPriority('Medium');
    setShowForm(false);
    Keyboard.dismiss();
  };

  return (
    <View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.expandButton}
          onPress={() => setShowForm(true)}
        >
          <Text style={styles.expandButtonText}>ADD NEW TASK</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showForm}
        onRequestClose={() => setShowForm(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.modalBackgroundDismiss}
            activeOpacity={1}
            onPress={() => setShowForm(false)}
          />
          <View style={styles.modalContainer}>
            <View style={styles.card}>
              <Text style={styles.modalHeader}>Task Configuration</Text>

              <Text style={styles.label}>Identifier / Title</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter task name..."
                value={title}
                onChangeText={t => setTitle(t)}
                placeholderTextColor="#546E7A"
              />

              <Text style={styles.label}>Description</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Specify requirements..."
                value={description}
                onChangeText={t => setDescription(t)}
                multiline={true}
                numberOfLines={3}
                placeholderTextColor="#546E7A"
              />

              <Text style={styles.label}>PRIORITY Level</Text>
              <View style={styles.row}>
                {(['High', 'Medium', 'Low'] as const).map(p => (
                  <TouchableOpacity
                    key={p}
                    style={[
                      styles.chip,
                      priority === p ? styles.chipActive : null,
                    ]}
                    onPress={() => setPriority(p)}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        priority === p ? styles.chipTextActive : null,
                      ]}
                    >
                      {p}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.label}>Category</Text>
              <View style={styles.row}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {(['Work', 'Personal', 'Urgent'] as const).map(c => (
                    <TouchableOpacity
                      key={c}
                      style={[
                        styles.chip,
                        category === c ? styles.chipActive : null,
                      ]}
                      onPress={() => setCategory(c)}
                    >
                      <Text
                        style={[
                          styles.chipText,
                          category === c ? styles.chipTextActive : null,
                        ]}
                      >
                        {c}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setShowForm(false)}
                >
                  <Text style={styles.cancelText}>ABORT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                  <Text style={styles.addButtonText}>COMMIT TASK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: { padding: 16 },
  expandButton: {
    backgroundColor: '#00ffaaec',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF44',
  },
  expandButtonText: {
    color: '#0A0E14',
    fontWeight: '900',
    fontSize: 13,
    letterSpacing: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 14, 20, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackgroundDismiss: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    width: '92%',
    backgroundColor: '#141B26',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#00ffaaff33',
    elevation: 25,
  },
  card: { padding: 24 },
  modalHeader: {
    fontSize: 18,
    fontWeight: '900',
    color: '#00ffaaff',
    marginBottom: 25,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  input: {
    backgroundColor: '#0A0E14',
    borderRadius: 2,
    padding: 14,
    marginBottom: 20,
    color: '#E2E8F0',
    borderWidth: 1,
    borderColor: '#00ffe556',
    fontSize: 15,
  },
  textArea: { height: 80, textAlignVertical: 'top' },
  label: {
    color: '#94b8b4ff',
    fontSize: 10,
    fontWeight: '900',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  row: { flexDirection: 'row', marginBottom: 25 },
  chip: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 2,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#00ffe556',
  },
  chipActive: {
    backgroundColor: '#00ffaaff22',
    borderColor: '#00ffaaff',
  },
  chipText: {
    color: '#94b8b4ff',
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  chipTextActive: {
    color: '#00ffaaff',
    fontWeight: '900',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 15,
  },
  cancelButton: { marginRight: 30 },
  cancelText: {
    color: '#FF4D4D',
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 1,
  },
  addButton: {
    backgroundColor: '#00ffaaff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 2,
  },
  addButtonText: {
    color: '#0A0E14',
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 1,
  },
});

export default TaskInput;
