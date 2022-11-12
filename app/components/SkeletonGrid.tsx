export default function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-9  md:grid-cols-2  lg:grid-cols-3   xl:grid-cols-4 xl:gap-12">
      {new Array(12).fill(null).map((_, i) => {
        return <SkeletonItem key={i} />;
      })}
    </div>
  );
}

function SkeletonItem() {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden">
      <div className="w-full h-44 animate-pulse  bg-slate-500"></div>
      <div className=" flex flex-col gap-2 bg-gray-2 p-6">
        <p className=" h-4 w-2/3  rounded-sm bg-slate-500 animate-pulse"></p>
        <p className=" h-4 rounded-sm bg-slate-500 animate-pulse"></p>
        <p className=" h-4 rounded-sm bg-slate-500 animate-pulse"></p>
        <p className=" h-4 rounded-sm bg-slate-500 animate-pulse"></p>
      </div>
    </div>
  );
}
