import { CaretDownLogo, CaretUpLogo } from 'components/svg';

type Props = {
  showDescription: boolean;
  setShowDescription: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CaretArrowUpDown = ({
  showDescription,
  setShowDescription,
}: Props) => {
  if (showDescription) {
    return (
      <CaretUpLogo
        fill='white'
        cursor='pointer'
        width={25}
        height={25}
        onClick={() => setShowDescription(false)}
      />
    );
  } else {
    return (
      <CaretDownLogo
        fill='white'
        cursor='pointer'
        width={25}
        height={25}
        onClick={() => setShowDescription(true)}
      />
    );
  }
};
