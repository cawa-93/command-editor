<template>
	<div>
		<dropdown-zone @input="load" :color="color"></dropdown-zone>
		<file-history @input="load" :type="type" title="Последние файлы"></file-history>
	</div>
</template>

<script>
import fileHistory from '@/components/fileHistory'
import dropdownZone from '@/components/dropdownZone'
import {Error} from 'common/dialog'
export default {
	name: 'fileLoader',
	components: {fileHistory, dropdownZone},
	props: {
		action: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		color: String,
	},
	methods: {
		async load (filePath) {
			try {
				this.$emit('start-load')
				await this.$store.dispatch(this.action, {filePath})
				this.$emit('load')
			} catch (e) {
				Error('Ошибка', e)
			}
		},
	},
}
</script>
