import 'styled-components/native';
import type {Theme} from './lib/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {
		colors: {
			background: string,
			text: string,
			border: string,
			primary: string,
		},
	}
}
