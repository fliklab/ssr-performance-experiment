import type { VercelRequest, VercelResponse } from '@vercel/node';
import feedData from '../mock-data/feed.json';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json(feedData);
}
