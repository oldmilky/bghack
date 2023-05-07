import vk from "../../images/footer__vk.svg";
import discord from "../../images/header__discord.svg";
import telegram from "../../images/header__telegram.svg";

import "./Popup.css";

function PopupContacts({ active, setActive }) {
  const activeClass = "popup_opened";
  const inactiveClass = "popup";

  return (
    <div
      className={active ? activeClass : inactiveClass}
      onClick={() => setActive(false)}
    >
      <div onClick={e => e.stopPropagation()}>
        <div className="popup__container">
          <div className="popup__wrapper">
            <h1 className="popup__title">Наши контакты:</h1>
            <div className="popup__wrap">
              <img className="popup__icon" src={discord} alt="discord" />
              <a className="popup__subtitle" href="https://discord.gg/ZZrGeRAKR8" target="_blank" rel="noreferrer">Discord</a>
            </div>
            <div className="popup__wrap">
              <img className="popup__icon" src={telegram} alt="telegram" />
              <a className="popup__subtitle" href="https://t.me/+4M4G26Q2Gqc4ZDM6" target="_blank" rel="noreferrer">Telegram</a>
            </div>
            <div className="popup__wrap">
              <img className="popup__icon" src={vk} alt="vk" />
              <a className="popup__subtitle" href="https://vk.com/public220360828" target="_blank" rel="noreferrer">VKontakte</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupContacts;
