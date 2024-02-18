import { FC } from 'react';
import classNames from 'classnames';
import { Image, Link } from '@components/primitive';
interface ICommentCardProps {
  avatar: string;
  comment: string;
  name: string;
  date: string;
  isReply?: boolean;
  className?: string;
}

export const CommentCard: FC<ICommentCardProps> = ({
  avatar,
  comment,
  name,
  date,
  isReply,
  className,
}) => {
  return (
    <div className={classNames('ks-comment-card', { '-reply': isReply }, className)}>
      <span className="avatar">
        <Image src={avatar} alt={name} ratio="square" objectFit="cover" className="image" />
      </span>
      <div className="content">
        <div className="title">
          <h6 className="name" title={name}>
            {name}
          </h6>
          <span className="date">{date}</span>
        </div>
        <p className="comment">{comment}</p>
        <Link href="/" className="link" title="">
          Reply
        </Link>
      </div>
    </div>
  );
};
