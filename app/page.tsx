import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from '../components/shared/index'
export default function Home() {
	return (
		<>
			<Container>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />
			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					{/* Фильтрация */}
					<div className='w-[250]'>
						<Filters />
					</div>

					{/* Список товаров */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								items={[
									{
										id: 1,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 2,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 3,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 4,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 5,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 6,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 7,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 8,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 9,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 10,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 11,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Комбо'
								items={[
									{
										id: 1,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 2,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 3,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 4,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 5,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 6,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 7,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 8,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 9,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 10,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 11,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
									{
										id: 12,
										name: 'Бефстроганов',
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
										items: [{ price: 549 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
