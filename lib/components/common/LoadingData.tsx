export const LoadingData = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-[#f2f2f7] loading">
      <div className="relative">
        <h1 className="text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 animate-pulse">
          LUMINA
        </h1>

        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gray-100 overflow-hidden rounded-full">
          <div className="w-1/2 h-full bg-indigo-600 animate-[loading_1s_ease-in-out_infinite] translate-x-[-100%]"></div>
        </div>
      </div>
      <p className="mt-4 text-xs text-gray-400 font-medium uppercase tracking-widest animate-pulse">
        Cargando experiencia...
      </p>
    </div>
  );
};
