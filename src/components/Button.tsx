import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  size = "md"
}: ButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const baseStyles = "relative group font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0";
  
  const variants = {
    primary: {
      button: "text-white",
      background: "bg-gradient-to-r from-emerald-500 to-green-500",
      hover: "hover:from-emerald-600 hover:to-green-600",
      shadow: "shadow-lg hover:shadow-xl"
    },
    secondary: {
      button: "text-emerald-900",
      background: "bg-gradient-to-r from-emerald-100 to-green-100",
      hover: "hover:from-emerald-200 hover:to-green-200",
      shadow: "shadow-md hover:shadow-lg"
    },
    outline: {
      button: "text-emerald-700",
      background: "bg-white border-2 border-emerald-300",
      hover: "hover:bg-emerald-50 hover:border-emerald-400",
      shadow: "shadow-sm hover:shadow-md"
    },
    danger: {
      button: "text-white",
      background: "bg-gradient-to-r from-red-500 to-pink-500",
      hover: "hover:from-red-600 hover:to-pink-600",
      shadow: "shadow-lg hover:shadow-xl"
    }
  };

  const variantConfig = variants[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed hover:transform-none' : ''}
      `}
    >
      {/* 3D Background Effect */}
      <div className={`absolute inset-0 ${variantConfig.background} rounded-xl ${variantConfig.shadow} ${disabled || loading ? '' : variantConfig.hover} transition-all duration-300`} />
      
      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${
        variant === 'primary' ? 'from-emerald-400 to-green-400' :
        variant === 'secondary' ? 'from-emerald-200 to-green-200' :
        variant === 'danger' ? 'from-red-400 to-pink-400' :
        'from-white to-emerald-50'
      } rounded-xl opacity-0 ${disabled || loading ? '' : 'group-hover:opacity-100'} transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative flex items-center justify-center space-x-2">
        {loading ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Processing...</span>
          </>
        ) : (
          <>
            {icon && <span className="flex items-center">{icon}</span>}
            <span className={variantConfig.button}>{children}</span>
          </>
        )}
      </div>
      
      {/* Bottom Border Effect */}
      {variant === 'primary' && !disabled && !loading && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 to-green-300 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-bottom" />
      )}
    </button>
  );
};

export default Button;