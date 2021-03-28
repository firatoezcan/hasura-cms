import cn from "classnames";

export const SectionHeading = ({ title, children }) => {
  return (
    <div className={cn("pb-4 mb-2 border-gray-200 sm:flex sm:items-center sm:justify-between", { "border-b": title })}>
      <h2 className="flex-1 text-2xl font-medium leading-6 text-gray-900">{title}</h2>
      {children}
    </div>
  );
};
