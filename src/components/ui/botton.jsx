export default function Button({ children, onClick }) {
    return (
      <button
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }