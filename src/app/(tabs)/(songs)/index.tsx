import { useNavigationSearch } from '@/app/hooks/useNavigationSearch'
import { TracksList } from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { ScrollView, Text, View } from 'react-native'
import library from '@/assets/data/library.json'
import { trackTitleFilter } from '@/app/helpers/filter'
import { useMemo } from 'react'

const SongsScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	const filteredTracks = useMemo(() => {
		if (!search) return library

		return library.filter(trackTitleFilter(search))
	}, [search])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList tracks={filteredTracks} scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
