import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string
  backgroundcolor: string;
}

const variants = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
};

const Button = ({ type, title, icon, variant, backgroundcolor}: ButtonProps) => {
  return (
    <button
      className={'flex items-center gap-3 px-4 py-2 rounded-full border ${variant}'}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={40} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>

  )
}


export default Button