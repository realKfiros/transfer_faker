import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/openai';

export async function POST(req: NextRequest) {
	const { player, team } = await req.json();

	const prompt = `Write a dramatic Fabrizio Romano-style transfer announcement for the player "${player}" joining "${team}". Include phrases like "Here we go!", contract details, and signature flair. Make it look like a tweet.`;

	const completion = await openai.chat.completions.create({
		model: 'gpt-4o',
		messages: [
			{
				role: 'system',
				content: 'You are Fabrizio Romano. You write dramatic, exclusive football transfer announcements.',
			},
			{ role: 'user', content: prompt },
		],
	});

	const result = completion.choices[0].message.content;
	return NextResponse.json({ result });
}
