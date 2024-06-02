import { allComponents, provideFluentDesignSystem } from '@fluentui/web-components';
import App from './App.svelte';

provideFluentDesignSystem().register(allComponents);

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;