import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={20}
      width={20}
      color="black"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="black"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};

export default Loader;
