import classNames from 'classnames';
import LinkRoot, { LinkProps } from 'next/link';
import { FC, ReactNode } from 'react';
interface ILinkProps extends LinkProps {
  children?: ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'unset';
  color?: 'primary' | 'secondary' | 'black' | 'white' | string;
  underline?: boolean;
  textTransform?: 'unset' | 'uppercase' | 'capitalize';
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  target?: '_self' | '_blank';
  textClassName?: string;
}

export const Link: FC<ILinkProps> = ({
  children,
  textTransform,
  underline,
  className,
  target,
  color,
  size,
  leftIcon,
  rightIcon,
  textClassName,
  ...rest
}) => {
  return (
    <LinkRoot target={target} {...rest} passHref>
      <a
        className={classNames(
          'ks-link',
          `-${textTransform}`,
          `-${size}`,
          {
            [`-${color}`]: color,
          },
          { '-icon': leftIcon || rightIcon },
          className,
        )}
      >
        {leftIcon}

        {underline ? (
          <span className={classNames('text', { '-underline': underline }, textClassName)}>
            {children}
          </span>
        ) : (
          children
        )}

        {rightIcon}
      </a>
    </LinkRoot>
  );
};

Link.defaultProps = {
  underline: false,
  textTransform: 'unset',
  target: '_blank',
  size: 'unset',
  title: '',
  textClassName: '',
};
