import { CircleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className="flex min-h-[calc(100vh-104px)] items-center justify-center">
      <CircleLoader
        visible={true}
        height="96"
        width="96"
        color="#A87676"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
    );
};

export default Loader;