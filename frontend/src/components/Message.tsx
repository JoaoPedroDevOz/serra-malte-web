import React, { useEffect } from "react";
import { X, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

interface MessageProps {
  text: string;
  status: "error" | "warn" | "success";
  onClose: () => void;
  autoCloseTime?: number;
}

export interface MessageListProps {
  onShowMessage: (text: string, status: "success" | "warn" | "error") => void;
}

export default function Message({
  text,
  status,
  onClose,
  autoCloseTime = 4000,
}: MessageProps) {
  useEffect(() => {
    if (!text) return;
    const timer = setTimeout(() => onClose(), autoCloseTime);
    return () => clearTimeout(timer);
  }, [text, autoCloseTime, onClose]);

  if (!text) return null;

  const statusConfig = {
    success: {
      bg: "bg-green-50 border-green-200 text-green-800",
      icon: <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />,
    },
    warn: {
      bg: "bg-amber-50 border-amber-200 text-amber-800",
      icon: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />,
    },
    error: {
      bg: "bg-red-50 border-red-200 text-red-800",
      icon: <XCircle className="w-5 h-5 text-red-500 shrink-0" />,
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div
      className={`flex items-start justify-between gap-3 p-3.5 rounded-xl border shadow-xl ${currentStatus.bg} backdrop-blur-sm transition-all w-full`}
    >
      <div className="flex items-start gap-2.5">
        <div className="mt-0.5">{currentStatus.icon}</div>
        <p className="text-sm font-medium leading-5 text-left">{text}</p>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="p-1 rounded-lg hover:bg-black/5 text-gray-400 hover:text-gray-600 transition-all shrink-0"
        title="Fechar"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
