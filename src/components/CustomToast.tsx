import clsx from "clsx";
import { ToastContainer, ToastOptions, toast } from "react-toastify";

export const customToast = {
  success: (message: string, options?: ToastOptions) => {
    toast.success(message, {
      style: { borderColor: "#cef3c5" },
      ...options,
    });
  },
  warn: (message: string, options?: ToastOptions) => {
    toast.warn(message, {
      style: { borderColor: "#ffe99b" },
      ...options,
    });
  },
  error: (message: string, options?: ToastOptions) => {
    toast.error(message, {
      style: { borderColor: "#ffd1ca" },
      ...options,
    });
  },
};

export const CustomToastContainer = ({
  fontClassName,
}: {
  fontClassName: string;
}) => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={true}
      className="absolute overflow-hidden w-full"
      toastClassName={clsx(
        "w-[calc(100%-2rem)] min-h-14 font-bold drop-shadow-sm rounded-lg border-2",
        fontClassName,
      )}
    />
  );
};
