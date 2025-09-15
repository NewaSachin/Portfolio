"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";

// Toast Context Hook
const ToastContext = React.createContext({ toast: () => {} });

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const toast = ({ title, description, duration = 3000 }) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-5 right-5 space-y-2 z-50">
        {toasts.map((t) => (
          <ToastPrimitives.Root
            key={t.id}
            className="bg-gray-800 text-white p-4 rounded shadow"
          >
            <ToastPrimitives.Title>{t.title}</ToastPrimitives.Title>
            <ToastPrimitives.Description>{t.description}</ToastPrimitives.Description>
          </ToastPrimitives.Root>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => React.useContext(ToastContext);
