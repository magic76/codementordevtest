import { useRouter } from 'next/router';

const tabs = [
	{
		name: 'Search',
		path: '/search',
	},
	{
		name: 'Favorite',
		path: '/favorite',
	},
];
const SearchTab = () => {
	const router = useRouter();
	return (
		<div style={{ backgroundColor: '#e2e2e2', height: '50px', display: 'flex', paddingLeft: '10px' }}>
			{tabs.map(tab => {
				const isActive = router.pathname === tab.path;
				const style = isActive ? { color: '#969696', backgroundColor: '#ffffff' } : { color: '#969696' };
				return (
					<div
						key={tab.name}
						onClick={() => router.push(tab.path)}
						style={{ cursor: 'pointer', marginTop: 'auto', padding: '5px 15px', ...style }}
					>
						{tab.name}
					</div>
				);
			})}
		</div>
	);
};

export default SearchTab;
