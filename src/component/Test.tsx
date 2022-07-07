import cssModule from './Test.module.scss';
import cx from 'classnames';

export const Test = () => {
	return (
		<div className={cssModule.container} >
			<div className={cssModule.window} />
			<div className={cx(cssModule.raindrops)} >
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
				<div className={cssModule.border} />
				<div className={cssModule.raindrop} />
			</div>
		</div>
	);
};
