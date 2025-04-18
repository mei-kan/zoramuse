import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Mock AI response
  res.status(200).json({ caption: 'AI-generated caption here', ticker: '$AICOIN' });
}
