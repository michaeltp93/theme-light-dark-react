import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';
import { shade } from 'polished';

interface Props {
	toggleTheme: () => void;
}
const Header: React.FC<Props> = ({ toggleTheme }) => {
	const { colors, title } = useContext(ThemeContext);
	return (
		<Container>
			Hello World
			<Switch
				onChange={toggleTheme}
				checked={title === 'dark'}
				checkedIcon={false}
				uncheckedIcon={false}
				height={10}
				width={40}
				handleDiameter={20}
				offColor={shade(0.15, colors.secundary)}
				onColor={colors.tertiary}
			/>
		</Container>
	);
};

export default Header;
