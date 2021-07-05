import styled from 'styled-components';

export const Container = styled.div`
	height: 60px;
	background-color: ${({ theme }) => theme.colors.primary};
	color: #0d0d0d;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
`;
