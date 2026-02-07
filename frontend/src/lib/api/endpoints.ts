// lib/api/endpoints.ts
import { api } from './client';
import { User, AuthResponse } from '@/types/auth';
import { Task, TaskCreate, TaskUpdate } from '@/types/task';

/* =========================
   AUTH ENDPOINTS
========================= */

export const AuthEndpoints = {
  register: (userData: any) =>
    api.post<User>('/users', userData),  // no trailing / (matches backend)

  login: (loginData: any) =>
    api.post<AuthResponse>('/login', loginData),  // no trailing / (matches)

  logout: () =>
    api.post<void>('/logout', {}),

  me: () =>
    api.get<User>('/users/me'),

  protected: () =>
    api.get<any>('/protected'),
};

/* =========================
   TASK ENDPOINTS - Added trailing / to base /tasks
========================= */

export const TaskEndpoints = {
  create: (taskData: TaskCreate) =>
    api.post<Task>('/tasks/', taskData),  // ← trailing / added

  getAll: () =>
    api.get<Task[]>('/tasks/'),           // ← trailing / added

  getById: (taskId: number) =>
    api.get<Task>(`/tasks/${taskId}`),    // no trailing / here (backend doesn't have it)

  update: (taskId: number, taskData: TaskUpdate) =>
    api.patch<Task>(`/tasks/${taskId}`, taskData),  // no trailing /

  delete: (taskId: number) =>
    api.delete<void>(`/tasks/${taskId}`), // no trailing /
};

/* =========================
   SYSTEM ENDPOINTS
========================= */

export const SystemEndpoints = {
  health: () => api.get<string>('/health'),
  root: () => api.get<string>('/'),
};