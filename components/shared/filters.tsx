import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { FilterCheckBox } from './filter-check-box'
import { RangeSlider } from './range-slider'
import { Title } from './title'
interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			{/* Верхние чекбоксы */}
			<div className='flex flex-col gap-4'>
				<FilterCheckBox text='Можно собирать' value='1' />
				<FilterCheckBox text='Новинки' value='2' />
			</div>

			{/* Фильтр цен */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						defaultValue={0}
					/>
					<Input type='number' placeholder='1000' min={0} max={1000} />
				</div>
				<RangeSlider min={0} max={1000} value={[0, 1000]} step={10} />
			</div>
			<CheckboxFiltersGroup
				title='Ингридиенты'
				className='mt-5'
				limit={6}
				defaultItems={[
					{
						text: 'Сырный соус',
						value: '1',
					},
					{
						text: 'Моцарелла',
						value: '2',
					},
					{
						text: 'Чеснок',
						value: '3',
					},
					{
						text: 'Соленые огурчики',
						value: '4',
					},
					{
						text: 'Красный лук',
						value: '5',
					},
					{
						text: 'Томаты',
						value: '6',
					},
				]}
				items={[
					{
						text: 'Сырный соус',
						value: '1',
					},
					{
						text: 'Моцарелла',
						value: '2',
					},
					{
						text: 'Чеснок',
						value: '3',
					},
					{
						text: 'Соленые огурчики',
						value: '4',
					},
					{
						text: 'Красный лук',
						value: '5',
					},
					{
						text: 'Томаты',
						value: '6',
					},
					{
						text: 'Сырный соус',
						value: '1',
					},
					{
						text: 'Моцарелла',
						value: '2',
					},
					{
						text: 'Чеснок',
						value: '3',
					},
					{
						text: 'Соленые огурчики',
						value: '4',
					},
					{
						text: 'Красный лук',
						value: '5',
					},
					{
						text: 'Томаты',
						value: '6',
					},
				]}
			/>
		</div>
	)
}