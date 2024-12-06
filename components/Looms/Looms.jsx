export default function Looms() {
  return (
    <div className="-z-10 w-full hidden lg:block">
      <img
        src="/Lines.svg"
        alt="Loom"
        className="absolute top-[25vh] left-0 transform -translate-y-1/4 -translate-x-1/2 w-[300px] opacity-20"
      />
      <img
        className="absolute top-[50%] right-0 transform scale-x-[-1] translate-y-1/4 translate-x-1/2 w-[300px] opacity-20"
        src="/Lines.svg"
        alt="Loom"
      />
      <img
        src="/Lines.svg"
        alt="Loom"
        className="absolute bottom-[25vh] left-0 transform translate-y-1/4 -translate-x-1/2 w-[300px] opacity-20"
      />
    </div>
  );
}
