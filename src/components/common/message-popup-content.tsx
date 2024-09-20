import MessagePopup from "../svg-icons/message-popup";
import { CheckCheck } from "lucide-react";

interface Props {
  text: string;
  time: string;
  isChecked: boolean;
}

const MessagePopupContent = ({ text, time, isChecked }: Props) => {
  return (
    <div className="relative inline-block w-full max-w-m">
      <div className="absolute inset-0 w-full h-full">
        <MessagePopup />
      </div>
      <div className="relative z-10 px-7 py-3 flex flex-col">
        <p className="text-black text-sm font-medium">{text}</p>
        <div className="flex self-end text-gray-900 text-sm gap-2">
          <span>{time}</span>
          {isChecked && <CheckCheck size={20} />}
        </div>
      </div>
    </div>
  );
};

export default MessagePopupContent;
