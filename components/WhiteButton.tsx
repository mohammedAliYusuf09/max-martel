interface WhiteButtonProps {
  children: React.ReactNode;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({ children }) => {
    return (
      <button
      className="bg-white  px-3 py-2 rounded-md border border-gray-400 text-black relative overflow-hidden cursor-pointer ">
      {children}
      </button>
    )
}

export default WhiteButton