const LoadingSpinner = () => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-transparent flex items-center justify-center">
        <div
      class="inline-block h-40 w-40 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
    </div>
  );
};

export default LoadingSpinner
