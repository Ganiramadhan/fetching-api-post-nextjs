"use client"

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    alert(`User ID: ${userId}`);
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 text-sm" onClick={handleClick}>
      View User
    </button>
  );
};

export default ViewUserButton;
