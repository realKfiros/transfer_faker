'use client';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';
import TransferForm from '@/components/TransferForm';
import TransferPost from '@/components/TransferPost';

export default function HomePage() {
	const [result, setResult] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(player: string, team: string) {
		setLoading(true);
		const res = await fetch('/api/generate-transfer', {
			method: 'POST',
			body: JSON.stringify({ player, team }),
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await res.json();
		setResult(data.result);
		setLoading(false);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Wrapper>
				<Title>🎙️ Fraudrizio</Title>
				<TransferForm onSubmit={handleSubmit} loading={loading} />
				{result && <TransferPost text={result} />}
			</Wrapper>
		</ThemeProvider>
	);
}

const Wrapper = styled.main`
  padding: 2rem;
  max-width: 700px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
`;
