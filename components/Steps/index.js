import { Steps } from "antd";
import {
   SmileOutlined,
   CarOutlined,
   FormOutlined,
   CalendarOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

export default function index() {
   return (
      <Steps className="reserva__steps">
         <Step status="finish" title="Fechas" icon={<CalendarOutlined />} />
         <Step status="finish" title="Vehículo" icon={<CarOutlined />} />
         <Step
            status="process"
            title="Datos del conductor"
            icon={<FormOutlined />}
         />
         <Step status="wait" title="Reservar" icon={<SmileOutlined />} />
      </Steps>
   );
}
