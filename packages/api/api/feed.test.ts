import { describe, it, expect, vi } from 'vitest';
import handler from './feed';
import feedData from '../mock-data/feed.json';

function createMockRes() {
  const res: any = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  return res;
}

describe('feed API handler', () => {
  it('should return feed data', () => {
    const req = {} as any;
    const res = createMockRes();
    handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(feedData);
  });
});
