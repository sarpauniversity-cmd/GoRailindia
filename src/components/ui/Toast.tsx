import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastContextType {
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-[#10B981]" />,
    error: <XCircle className="w-5 h-5 text-[#EF4444]" />,
    info: <AlertCircle className="w-5 h-5 text-[#2563EB]" />
  };

  const colors = {
    success: 'border-l-[#10B981] bg-green-50',
    error: 'border-l-[#EF4444] bg-red-50',
    info: 'border-l-[#2563EB] bg-blue-50'
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-lg border-l-4 min-w-[300px] animate-slide-in ${colors[toast.type]}`}
          >
            {icons[toast.type]}
            <p className="flex-1 text-sm font-medium text-[#0F172A]">{toast.message}</p>
            <button onClick={() => removeToast(toast.id)} className="text-[#94A3B8] hover:text-[#475569]">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};
