export const HeroStat = ({ value, label, color }) => (
  <div>
    <div className={`text-3xl font-bold ${color}`}>{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);
