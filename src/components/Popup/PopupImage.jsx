import "./Popup.css";

function PopupImage({ image, alt, active, setActive }) {
  const activeClass = "popup_opened";
  const inactiveClass = "popup";

  return (
    <div
      className={active ? activeClass : inactiveClass}
      onClick={() => setActive(false)}
    >
      <div onClick={e => e.stopPropagation()}>
        <img className="popup_image" src={image} alt={alt} />
      </div>
    </div>
  );
}

export default PopupImage;