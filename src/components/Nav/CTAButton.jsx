export const CTAButton = ({ label = "Comenzar", fullWidth = false }) => (
  <button
    className={`${
      fullWidth ? "w-full" : ""
    } px-6 py-2 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300`}
  >
    {label}
  </button>
);
