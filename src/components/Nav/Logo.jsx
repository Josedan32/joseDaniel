import { useNavigate } from 'react-router-dom';
import { Brain } from "lucide-react";


export const Logo = ({ title = "Jose Daniel" }) =>
{
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a 
      href="/" 
      onClick={handleClick}
      className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors cursor-pointer"
    >
    <div className="flex items-center gap-2">
    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
      <Brain className="w-6 h-6 text-white" />
    </div>
    <span className="font-bold text-xl text-white">{title}</span>
  </div>
    </a>
  );
}  
