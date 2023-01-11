export const CrossButton = () => {
	return (
		<div className="relative w-20 h-20 ml-2">
			<div className='absolute left-6 top-1 w-6 h-16 rounded-sm bg-gray-700 border-b-2 border-b-gray-800 border-r-gray-800 border-r-2'></div>
			<div className='absolute left-1 top-6 w-16 h-6 rounded-sm bg-gray-700 border-b-2 border-b-gray-800 border-r-gray-800 border-r-2'></div>
            <div className='absolute bg-gray-700 w-6 h-6 top-6 left-6'></div>
		</div>
	);
};
