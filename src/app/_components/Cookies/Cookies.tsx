import React, { useEffect, useState } from "react";
import style from "./cookies.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "antd";
import Cookies from "js-cookie";
import * as axios from "@/app/_lib/api";

const Cookie: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("VisitorID");
    setShowBanner(cookieConsent === undefined);
  }, []);

  const acceptCookies = async () => {
    setShowBanner(false);
    let payload = {
      ConsentDetails: "Accept",
      
    };
    const res = await axios.postData("/visitors", payload);
    if ('data' in res && res.data.statusCode == 200) {
      Cookies.set("VisitorID", res.data.response.VisitorID, { expires: 365 });
    }
  };

  const hidePopup = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className={style.cookies}>
          <div className={style.inner_cook}>
            <div className={style.head}>
              <h1>Manage Cookies</h1>
              <CloseIcon onClick={hidePopup} />
            </div>
            <p className="p-4">
              We use cookies to enhance your browsing experience and analyze
              site traffic. Do you accept our use of cookies?
            </p>
            <div className={style.btns}>
              <Button className={style.btn1} onClick={acceptCookies}>
                Accept
              </Button>
              <Button className={style.btn2} onClick={hidePopup}>
                Decline
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookie;
