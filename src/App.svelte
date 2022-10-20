<script lang="ts">
    import type { Feedback } from './types';
	import FeedbackForm from './components/FeedbackForm.svelte';
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackStats from './components/FeedbackStats.svelte';

	let feedbacks: Feedback[] = [
		{
			id: 1,
			rating: 10,
			name: "Maria",
			text: "	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusamus alias voluptatibus quod corporis? Quis cupiditate facilis quam omnis ullam exercitationem! Explicabo, mollitia praesentium? Delectus ratione culpa sunt, aperiam debitis voluptas corporis magni cumque at officiis quod quia, nobis odit commodi explicabo facilis inventore eligendi enim dolorum labore! Dicta, voluptatem."
		},
		{
			id: 2,
			rating: 9,
			name: "Vai",
			text: "	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusamus alias voluptatibus quod corporis? Quis cupiditate facilis quam omnis ullam exercitationem! Explicabo, mollitia praesentium? Delectus ratione culpa sunt, aperiam debitis voluptas corporis magni cumque at officiis quod quia, nobis odit commodi explicabo facilis inventore eligendi enim dolorum labore! Dicta, voluptatem."
		},
		{
			id: 3,
			rating: 8.8,
			name: "Com as outras",
			text: "	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusamus alias voluptatibus quod corporis? Quis cupiditate facilis quam omnis ullam exercitationem! Explicabo, mollitia praesentium? Delectus ratione culpa sunt, aperiam debitis voluptas corporis magni cumque at officiis quod quia, nobis odit commodi explicabo facilis inventore eligendi enim dolorum labore! Dicta, voluptatem."
		},

	]

	$: count = feedbacks.length;
	$: average = feedbacks.reduce((a, {rating}) => a + rating, 0) / feedbacks.length;

	const deleteFeedback = (e: CustomEvent) => {
	    const toDelete = e.detail;

		feedbacks = feedbacks.filter((fb) => fb.id !== toDelete.id)
	}

	const addFeedback = (e: CustomEvent) => {
		const toAdd = e.detail;

		feedbacks = [toAdd, ...feedbacks];
	}
</script>

<main class="container">
	<FeedbackForm count={count} on:add-feedback={addFeedback}/>
	<FeedbackStats count={count} average={average}/>
	<FeedbackList feedbacks={feedbacks} on:delete-feedback={deleteFeedback}/>
</main>
