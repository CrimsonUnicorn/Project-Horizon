import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { clearToast } from "../features/Settings/toastSlice";

function ToastListener() {
  const dispatch = useAppDispatch();

  const { message, type } = useAppSelector(
    (state) => state.toast
  );

  useEffect(() => {
    if (!message) return;

    switch (type) {
      case "success":
        toast.success(message);
        break;

      case "error":
        toast.error(message);
        break;

      case "warning":
        toast.warning(message);
        break;
    }

    dispatch(clearToast());
  }, [message, type, dispatch]);

  return null;
}

export default ToastListener;