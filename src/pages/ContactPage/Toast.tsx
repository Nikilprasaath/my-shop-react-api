import Toast from "react-bootstrap/Toast";
interface IToast{
    message:string;
}

const ToastComponent:React.FC<IToast> = ({message}) => {
  return (
    <>
    <Toast>
      <Toast.Header>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
</>
  )
}

export default ToastComponent