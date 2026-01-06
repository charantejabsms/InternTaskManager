import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Task } from '../../store/taskSlice';
import { I18n } from '../../constants/localization';

export interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const navigation = useNavigation<any>();

  const ELITE = {
    void: '#0A0E14',
    midnight: '#74fcda23',
    slate: '#00ffe556',
    silver: '#E2E8F0',
    starlight: '#94b8b4ff',
    electric: '#00ffaaff',
    crimson: '#FF4D4D',
    emerald: '#00ffd5ff',
  };

  const priorityColors = {
    High: ELITE.crimson,
    Medium: '#FFB800',
    Low: ELITE.emerald,
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onToggle(task.id)}
      onLongPress={() => navigation.navigate('Details', { task })}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.priorityStripe,
          { backgroundColor: priorityColors[task.priority] },
        ]}
      />
      <View style={styles.mainContainer}>
        <View style={styles.headerRow}>
          <View
            style={[
              styles.statusCircle,
              task.completed
                ? styles.statusCircleActive
                : styles.statusCircleInactive,
            ]}
          />
          <Text
            style={[
              styles.title,
              task.completed ? styles.completedTitle : null,
            ]}
            numberOfLines={1}
          >
            {task.title}
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{task.category}</Text>
          </View>
          <Text style={styles.hintText}>{I18n.common.holdHint}</Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <View style={styles.syncRow}>
          <View
            style={[
              styles.syncDot,
              {
                backgroundColor:
                  task.syncStatus === 'local'
                    ? ELITE.starlight
                    : ELITE.electric,
              },
            ]}
          />
          <Text style={styles.syncText}>
            {task.syncStatus === 'local' ? 'LOCAL' : 'SYNCED'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => onDelete(task.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteText}>REMOVE</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#74fcda15',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#00ffe533',
    height: 85,
    overflow: 'hidden',
  },
  priorityStripe: {
    width: 4,
    height: '100%',
  },
  mainContainer: { flex: 1, paddingLeft: 15, justifyContent: 'center' },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  statusCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 10,
    borderWidth: 2,
  },
  statusCircleInactive: {
    borderColor: '#00ffaaff',
    backgroundColor: 'transparent',
  },
  statusCircleActive: {
    borderColor: '#00ffaaff',
    backgroundColor: '#00ffaaff',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E2E8F0',
    flex: 1,
  },
  completedTitle: {
    color: '#94b8b488',
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  footer: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  categoryBadge: {
    backgroundColor: '#00ffe515',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#00ffaaff',
  },
  categoryText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#00ffaaff',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  hintText: {
    fontSize: 9,
    color: '#94b8b4ff',
    marginLeft: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  rightSide: {
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  syncRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  syncDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  syncText: {
    fontSize: 8,
    fontWeight: '900',
    color: '#94b8b4ff',
    letterSpacing: 1,
  },
  deleteButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF4D4D44',
  },
  deleteText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#FF4D4D',
    letterSpacing: 1,
  },
});

export default TaskItem;
