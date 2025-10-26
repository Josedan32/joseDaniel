export const AnimatedSection = ({ 
  id, 
  children, 
  className = "",
  animation = "fade-up" // fade-up, fade-in, slide-left, slide-right
}) => {
  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-12',
    'fade-in': 'opacity-0',
    'slide-left': 'opacity-0 -translate-x-12',
    'slide-right': 'opacity-0 translate-x-12',
    'zoom-in': 'opacity-0 scale-95'
  };

  return (
    <section
      id={id}
      data-animate
      className={`
        transition-all duration-700 ease-out
        ${animationClasses[animation]}
        animate-section
        ${className}
      `}
    >
      {children}
    </section>
  );
};