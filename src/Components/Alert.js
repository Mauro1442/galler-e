import Alert from "react-bootstrap/Alert";
import "./Alert.css";
function AlertCustom(props) {
  const { text, variant } = props;
  return (
    <Alert variant={variant} className="Alert">
      {text}
    </Alert>
  );
}
export default AlertCustom;
