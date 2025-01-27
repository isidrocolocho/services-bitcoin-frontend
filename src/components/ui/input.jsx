export function Input({ id, type = "text", className = "", ...props }) {
    return (
      <input
        id={id}
        type={type}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent ${className}`}
        {...props}
      />
    );
  }