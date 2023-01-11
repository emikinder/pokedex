export const PokedexDisplay = ({ isLoading = false, name, image }) => {	
	const capitalLetter = (name) => {
		return name.charAt(0).toUpperCase() + name.slice(1);
	};

	return (
		<div className='border-l-4 border-b-4 border-frame-shadow bg-frame rounded-md p-4 w-[200px] h-[174px]'>
			<div className='flex flex-col justify-center items-center border-t-2 border-t-display-shadow border-r-display-shadow border-r-2 bg-display w-[160px] h-[122px]'>
				{isLoading ? (
					<span>...</span>
				) : (
					<>
						<img alt={name} src={image} />
						<span className='font-bold font-sans'>
							{capitalLetter(name)}
						</span>
					</>
				)}
			</div>
		</div>
	);
};
