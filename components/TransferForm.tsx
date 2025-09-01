'use client';
import {useState} from 'react';
import styled from 'styled-components';

type TransferFormProps = {
	onSubmit: (player: string, team: string) => void;
	loading: boolean;
};

export default function TransferForm({onSubmit, loading}: TransferFormProps) {
	const [player, setPlayer] = useState('');
	const [team, setTeam] = useState('');

	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(player, team);
			}}
		>
			<Input
				placeholder="Player name"
				value={player}
				onChange={(e) => setPlayer(e.target.value)}
				required
			/>
			<Input
				placeholder="New team"
				value={team}
				onChange={(e) => setTeam(e.target.value)}
				required
			/>
			<Button type="submit" disabled={loading}>
				{loading ? 'Generating...' : 'Fake It!'}
			</Button>
		</Form>
	);
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;
`;

const Input = styled.input`
	padding: 0.8rem;
	font-size: 1rem;
	border: 1px solid ${({theme}) => theme.colors.border};
	border-radius: 6px;
`;

const Button = styled.button`
	padding: 0.8rem;
	font-size: 1rem;
	background-color: ${({theme}) => theme.colors.primary};
	color: white;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		background-color: #0e63d3;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;
