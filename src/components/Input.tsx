import React from "react";

type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
  textarea?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  error?: string;
};

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  textarea = false,
  required = false,
  icon,
  error
}: InputProps) => {
  const inputId = name || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <label 
          htmlFor={inputId}
          className="text-sm font-medium text-emerald-700 flex items-center"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative group">
        {/* 3D Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-0 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity duration-300" />
        
        {/* Input Container */}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 group-focus-within:text-emerald-600 transition-colors">
              {icon}
            </div>
          )}
          
          {textarea ? (
            <textarea
              id={inputId}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
              rows={4}
              className={`w-full px-4 ${icon ? 'pl-12' : ''} py-3 bg-white/95 backdrop-blur-sm border ${
                error ? 'border-red-300' : 'border-emerald-200'
              } rounded-xl focus:outline-none focus:ring-2 ${
                error ? 'focus:ring-red-500' : 'focus:ring-emerald-500'
              } focus:border-transparent transition-all duration-300 placeholder-emerald-400 resize-none`}
            />
          ) : (
            <input
              id={inputId}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
              className={`w-full px-4 ${icon ? 'pl-12' : ''} py-3 bg-white/95 backdrop-blur-sm border ${
                error ? 'border-red-300' : 'border-emerald-200'
              } rounded-xl focus:outline-none focus:ring-2 ${
                error ? 'focus:ring-red-500' : 'focus:ring-emerald-500'
              } focus:border-transparent transition-all duration-300 placeholder-emerald-400`}
            />
          )}
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="flex items-center text-red-600 text-sm mt-1">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}
        
        {/* Success/Validation Icon */}
        {value && !error && type !== "password" && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;