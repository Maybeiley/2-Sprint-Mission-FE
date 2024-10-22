import formatDate from '@/lib/formatDate';
import Image from 'next/image';
import styles from './CommentList.module.css';

export default function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return (
      <div className={styles.empty}>
        <Image width={140} height={140} src={'/reply_empty.png'} alt="empty" />
        아직 댓글이 없어요,
        <br />
        지금 댓글을 달아보세요!
      </div>
    );
  }

  return (
    <div className={styles.comments}>
      {comments.map((comment) => (
        <div className={styles.wrapper} key={comment.id}>
          <div className={styles.commentContent}>
            <p>{comment.content}</p>
            <Image width={24} height={24} src="/ic_kebab.png" alt="kebab" />
          </div>
          <div className={styles.profile}>
            <Image width={24} height={24} src="/ic_profile.png" alt="profile" />
            <div className={styles.profile_info}>
              <p>즐거운판다</p>
              <p className={styles.date}>
                {formatDate(new Date(comment.createdAt))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}