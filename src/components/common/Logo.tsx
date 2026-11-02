import emblem from "../../assets/Glowing Gold and Silver Interwoven Emblem.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className="logo" href="#home" aria-label="Money Square home">
      <img
        src={emblem}
        alt=""
        className={compact ? "logo-mark compact" : "logo-mark"}
      />
      {!compact && (
        <span className="logo-name">
          Money <b>Square</b>
        </span>
      )}
    </a>
  );
}
