/* eslint-disable @next/next/no-img-element */
import useCheckErrorImage from '@hooks/useCheckErrorImage';
import { Skeleton } from '@mui/material';
import classNames from 'classnames';
import { FC } from 'react';

type ObjectFitType = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
type RatioType = 'video' | 'square' | 'unset' | 'inherit';

interface IImageProps {
  src: string;
  alt: string;
  ratio?: RatioType;
  objectFit?: ObjectFitType;
  className?: string;
  circle?: boolean;
}

export const Image: FC<IImageProps> = ({ src, alt, ratio, objectFit, className, circle }) => {
  const { imageUrl, isLoading } = useCheckErrorImage(src);

  if (isLoading)
    return (
      <Skeleton
        variant="rectangular"
        className={classNames(
          'ks-image',
          `-${ratio}`,
          `-${objectFit}`,
          { '-circle': circle },
          className,
        )}
      />
    );

  return (
    <img
      src={imageUrl as string}
      alt={alt}
      className={classNames('ks-image', `-${ratio}`, `-${objectFit}`, className)}
    />
  );
};

Image.defaultProps = {
  ratio: 'unset',
  className: '',
  objectFit: 'none',
  circle: false,
};
