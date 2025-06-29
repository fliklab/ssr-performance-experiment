import { Card } from '../base/Card';
import { Typography } from '../base/Typography';
import * as styles from '../styles/feedCard.css';

export interface FeedCardProps {
  image: string;
  title: string;
  price: number;
  description?: string;
  loading?: boolean;
}

export const FeedCard = ({ image, title, price, description, loading }: FeedCardProps) => (
  <Card className={styles.feedCard}>
    <div className={styles.imageWrap}>
      {loading ? (
        <div className={styles.skeleton} />
      ) : (
        <img src={image} alt={title} className={styles.image} />
      )}
    </div>
    <Typography variant="heading" style={{ margin: '12px 0 4px' }}>
      {title}
    </Typography>
    <Typography variant="body" weight="bold" style={{ color: '#0070f3', marginBottom: 4 }}>
      {price.toLocaleString()}원
    </Typography>
    {description && <Typography variant="caption">{description}</Typography>}
  </Card>
);

export default FeedCard;
