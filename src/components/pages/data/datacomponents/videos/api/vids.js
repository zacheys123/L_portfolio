import classes101 from '../../../../../../assets/videos/classes101.mp4';
import Improvleaning101 from '../../../../../../assets/videos/Improvleaning101.mp4';
import LetGoLetGod from '../../../../../../assets/videos/LetGoletGod.mp4';
import XF8jamsessiononLeaning from '../../../../../../assets/videos/XF8jamsessiononLeaning.mp4';
import Leaningimprov from '../../../../../../assets/videos/Leaningimprov.mp4';

export const allvideos = () => {
	return [
		{
			id: 0,
			title: 'Vocal Classes 101',
			url: classes101,
		},
		{
			id: 1,
			title: 'last minute improv 101',
			url: Improvleaning101,
		},
		{ id: 2, title: 'Some food for the soul', url: LetGoLetGod },
		{
			id: 3,
			title: 'More improv (-_-)',
			url: Leaningimprov,
		},
		{
			id: 5,
			title: 'XF8 jam session on Leaning',
			url: XF8jamsessiononLeaning,
		},
	];
};
