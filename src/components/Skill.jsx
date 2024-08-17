export default function Skill({ skill, onMouseEnter, isHovered }) {
  return (
    <li
      className={`w-full aspect-square grid gap-2 place-items-center p-2 cursor-pointer transition-transform ${
        isHovered ? "scale-110" : ""
      }`}
      onMouseEnter={onMouseEnter}
      role="listitem"
    >
      <img
        src={skill.icon}
        alt={`Icono de ${skill.name}`}
        loading="lazy"
        width="48"
        height="48"
      />
      <span className="text-sm font-medium opacity-80">{skill.name}</span>
    </li>
  );
}
