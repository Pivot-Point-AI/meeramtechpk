export function PageHeader({ label }: { label: string }) {
  return (
    <div className="relative h-[43px] bg-[#2212FF]">
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-6 lg:px-[121px]">
        <span className="text-[16px] font-normal text-white">{label}</span>
      </div>
    </div>
  );
}
