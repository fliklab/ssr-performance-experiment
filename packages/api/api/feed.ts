import type { VercelRequest, VercelResponse } from '@vercel/node';
import feedData from '../mock-data/feed.json';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const feedDataWithImageUrl = feedData.map(item => ({
    ...item,
    image: `${process.env.MOCK_API_DOMAIN}${item.image}`,
  }));
  res.status(200).json(feedDataWithImageUrl);
}
