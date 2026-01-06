import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Centralized Type Definition
export interface Task {
  id: number;
  title: string;
  description: string;
  category: 'Work' | 'Personal' | 'Urgent';
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
  syncStatus: 'synced' | 'local';
  createdAt: string; //
}

interface TaskState {
  items: Task[];
}

const initialState: TaskState = {
  items: [], 
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        category: 'Work' | 'Personal' | 'Urgent';
        priority: 'High' | 'Medium' | 'Low';
      }>,
    ) => {
      const newTask: Task = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        category: action.payload.category,
        priority: action.payload.priority,
        completed: false,
        syncStatus: 'local',
        createdAt: new Date().toISOString(), 
      };
      state.items.push(newTask);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.items.find(item => item.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index] = { ...action.payload, syncStatus: 'local' };
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
