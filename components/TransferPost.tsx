'use client';
import styled from 'styled-components';

export default function TransferPost({ text }: { text: string }) {
	return (
		<Post>
			<Header>
				<Avatar>🧢</Avatar>
				<strong>Fabrizio Romano</strong>
				<Handle>@FabrizioRomano</Handle>
			</Header>
			<Text>{text}</Text>
			<Meta>🔁 12.1K &nbsp;&nbsp; ❤️ 36.8K</Meta>
		</Post>
	);
}

const Post = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Avatar = styled.div`
  font-size: 1.5rem;
`;

const Handle = styled.span`
  color: gray;
  font-size: 0.9rem;
`;

const Text = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.5;
`;

const Meta = styled.div`
  margin-top: 1rem;
  color: gray;
  font-size: 0.9rem;
`;
