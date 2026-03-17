import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'admin' | 'staff' | 'reviewer' | 'vendor';
export type ActiveSystem = 'iddi' | 'energy';

interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
}

interface AuthContextType {
  user: User | null;
  activeSystem: ActiveSystem;
  setActiveSystem: (system: ActiveSystem) => void;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [activeSystem, setActiveSystem] = useState<ActiveSystem>('iddi');

  const login = (role: UserRole) => {
    const mockUsers: Record<UserRole, User> = {
      admin: { id: '1', name: '系統管理員', role: 'admin', email: 'admin@iddi.org.tw' },
      staff: { id: '2', name: '計畫承辦人', role: 'staff', email: 'staff@iddi.org.tw' },
      reviewer: { id: '3', name: '審查委員', role: 'reviewer', email: 'reviewer@iddi.org.tw' },
      vendor: { id: '4', name: '示範廠商', role: 'vendor', email: 'vendor@company.com' },
    };
    setUser(mockUsers[role]);
    // Reset to IDDI on login
    setActiveSystem('iddi');
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, activeSystem, setActiveSystem, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
