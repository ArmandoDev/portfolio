export default function Skill({ skill }) {
  return (
    <li className="w-full aspect-square grid gap-2 place-items-center p-2">
      <img src={skill.icon} alt={skill.name} />
      <span className="text-sm font-medium opacity-80">{skill.name}</span>
    </li>
  );
}
