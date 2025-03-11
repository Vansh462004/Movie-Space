import { FC, ReactNode } from "react";

type PillButtonProps = {
  children: ReactNode;
};
const PillButton: FC<PillButtonProps> = ({ children }) => {
  return (
    <div className="p-2 w-36 rounded-full border-2 border-black">
      {children}
    </div>
  );
};

export default PillButton;
