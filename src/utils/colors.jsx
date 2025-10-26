export const getColorClasses = (color) => {
    const colors = {
      pink: {
        hover: "hover:border-pink-500 hover:shadow-pink-500/50",
        gradient: "from-pink-500/20 to-transparent",
        text: "text-pink-400",
        badge: "bg-pink-500/20 text-pink-300",
      },
      green: {
        hover: "hover:border-green-500 hover:shadow-green-500/50",
        gradient: "from-green-500/20 to-transparent",
        text: "text-green-400",
        badge: "bg-green-500/20 text-green-300",
      },
      blue: {
        hover: "hover:border-blue-500 hover:shadow-blue-500/50",
        gradient: "from-blue-500/20 to-transparent",
        text: "text-blue-400",
        badge: "bg-blue-500/20 text-blue-300",
      },
      orange: {
        hover: "hover:border-orange-500 hover:shadow-orange-500/50",
        gradient: "from-orange-500/20 to-transparent",
        text: "text-orange-400",
        badge: "bg-orange-500/20 text-orange-300",
      },
    };
    return colors[color];
  };