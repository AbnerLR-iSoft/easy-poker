type CardProps = {
  src: string;
  alt: string;
  variant: string;
};

export const Card = ({ src, alt, variant = "object-cover" }: CardProps) => {
  return (
    <>
      <img src={src} alt={alt} className={`w-full h-full ${variant}`} />
    </>
  );
};
