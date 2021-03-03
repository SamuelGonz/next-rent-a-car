import { LoginOutlined } from "@ant-design/icons";
import { Dropdown, Button } from "antd";
import { useState } from "react";
import Menu from "./Menu";

export default function DropDownReserva() {
   const [visibleDropDown, setVisibleDropDown] = useState(false);

   const changeVisible = () => {
      setVisibleDropDown(!visibleDropDown);
   };

   return (
      <div>
         <Dropdown
            overlay={<Menu setVisibleDropDown={setVisibleDropDown} />}
            placement="bottomLeft"
            visible={visibleDropDown}
            onClick={changeVisible}
         >
            <Button className="drop-down-reserva__active-btn">
               <LoginOutlined />
            </Button>
         </Dropdown>
      </div>
   );
}
