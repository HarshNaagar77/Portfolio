const LoadingBar = ({ loading }) => {
  return (
    <div id="bar" className="fixed top-0 left-0 w-full h-1  z-50">
      <div
        className={`h-1 bg-blue-500 transition-all duration-500 ease-linear ${
          loading ? 'w-full' : 'w-0'
        }`}
      ></div>
    </div>
  );
};

export default LoadingBar;
