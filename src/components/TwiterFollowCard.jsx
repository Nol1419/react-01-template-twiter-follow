import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TwiterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const btnText = isFollowing ? "Siguiendo" : "Seguir";
  const btnClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={`Imagen de twiter de ${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={btnClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{btnText}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}

export default TwiterFollowCard;
