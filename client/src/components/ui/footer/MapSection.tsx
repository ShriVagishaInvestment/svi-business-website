type MapType = { latitude: number; longitude: number };

const getIframeSrc = (latitude: number, longitude: number) =>
	`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

const MapSection = ({ map }: { map: MapType }) => (
	<div>
		<div className='w-full h-full rounded-lg overflow-hidden border border-white/20'>
			<iframe
				src={getIframeSrc(map.latitude, map.longitude)}
				width='100%'
				height='100%'
				style={{ border: 0 }}
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				title='Office Location'></iframe>
		</div>
	</div>
);

export default MapSection;
