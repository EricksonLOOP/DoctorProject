import React from "react";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from "react-icons/fi";

export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertProps {
  type?: AlertType;
  message: string;
  onClose?: () => void;
  showIcon?: boolean;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  type = "success",
  message,
  onClose,
  showIcon = true,
  className = "",
}) => {
  const alertConfig = {
    success: {
      icon: <FiCheckCircle className="text-green-500" />,
      bgColor: "bg-green-50",
      textColor: "text-green-800",
      borderColor: "border-green-200",
    },
    error: {
      icon: <FiAlertCircle className="text-red-500" />,
      bgColor: "bg-red-50",
      textColor: "text-red-800",
      borderColor: "border-red-200",
    },
    warning: {
      icon: <FiAlertCircle className="text-yellow-500" />,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-200",
    },
    info: {
      icon: <FiInfo className="text-blue-500" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
      borderColor: "border-blue-200",
    },
  };

  const { icon, bgColor, textColor, borderColor } = alertConfig[type];

  return (
    <div
      className={`flex items-center absolute z-[99999999] top-2 m-auto 2justify-between p-4 mb-4 rounded-md border ${bgColor} ${textColor} ${borderColor} ${className}`}
      role="alert"
    >
      <div className="flex items-center gap-2">
        {showIcon && icon}
        <span>{message}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Fechar alerta"
        >
          <FiX />
        </button>
      )}
    </div>
  );
};

export default Alert;