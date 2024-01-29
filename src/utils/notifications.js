import { toast } from "react-toastify";

const setPosition = (position) => {
  return position ? toast.POSITION[position] : toast.POSITION.TOP_CENTER
}

export function pushNotification(msg, type, position, duration) {
  if (type === "info") {
    return toast.info(msg, {
      position: setPosition(position),
      autoClose: duration ? duration : 3000,
      pauseOnFocusLoss: true,
      pauseOnHover: false,
      newestOnTop: true,
    })
  } else if (type === "success") {
    return toast.success(msg, {
      position: setPosition(position),
      autoClose: duration ? duration : 3000,
      pauseOnFocusLoss: true,
      pauseOnHover: false,
      newestOnTop: true,
    })
  } else if (type === "warning") {
    return toast.warn(msg, {
      position: setPosition(position),
      autoClose: duration ? duration : 3000,
      pauseOnFocusLoss: true,
      pauseOnHover: false,
      newestOnTop: true,
    })
  } else if (type === "error") {
    return toast.error(msg, {
      position: setPosition(position),
      autoClose: duration ? duration : 3000,
      pauseOnFocusLoss: true,
      pauseOnHover: false,
      newestOnTop: true,
      toastId: "error",
    })
  } 
  return toast.info(msg, {
    position: setPosition(position),
    autoClose: duration ? duration : 3000,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    newestOnTop: true,
  })
}
