import libs from 'renderer/libs'

export default (state, getters) => {
	const _map = []
	if (!getters.direct) return _map
	getters.direct.forEach((row, index) => {
		if (index < 3 || !row || !row[8] || !row[3]) return

		const campainName = row[8]
		const groupName = row[3]
		const keyword = row[10]
		const ad = {
			title: row[12],
			desc:  row[13],
			ancor: row[15],
			url:   row[14]
		}

		const fastLinks = []
		let fastLinksData = {
			titles: row[22].split('||'),
			urls:   row[23].split('||'),
			descs:  row[24].split('||')
		}
		fastLinksData.urls.forEach((url, index) => {
			if (url && fastLinksData.titles[index] && fastLinksData.descs[index]) {
				fastLinks.push({
					title: fastLinksData.titles[index],
					url:   url,
					desc:  fastLinksData.descs[index]
				})
			}
		})

		let campain = libs.findCampain(_map, campainName)
		if (campain === undefined) {
			campain = {
				name:   campainName,
				groups: []
			}
			_map.push(campain)
		}

		let group = libs.findGroup(campain, groupName)
		if (group === undefined) {
			group = {
				name:      groupName,
				keywords:  [],
				ads:       [],
				fastLinks: []
			}
			campain.groups.push(group)
		}

		group.ads.push(ad)
		if (keyword) group.keywords.push(keyword)
		if (Array.isArray(fastLinks) && fastLinks.length) group.fastLinks = fastLinks
	})

	return _map
}
