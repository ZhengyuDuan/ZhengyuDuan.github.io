import cssModule from './Test.module.scss';
import cx from 'classnames';

export const Test = () => {

	const drops = [];
	for (let i = 0; i < 110; i++) {
		drops.push(
			<div key={i} className={cx(cssModule.raindrop, cssModule.border)} />
		)
	}

	return (
		<div className={cssModule.container} >
			<div className={cssModule.window} />
			{drops.map(d => { return d })}
		</div>
	);
};
