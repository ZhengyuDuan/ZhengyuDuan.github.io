import cssModule from './Test.module.scss';
import cx from 'classnames';

export const Test = () => {
	return (
		<div className={cssModule.container} >
			<div className={cx(
				cssModule.window,
				cssModule.border,
				cssModule.raindrop
			)}></div>
		</div>
	);
};
