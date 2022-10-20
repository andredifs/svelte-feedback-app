<script lang="ts">
    import type { Feedback } from '../types';
    import FeedbackItem from './FeedbackItem.svelte'

    export let feedbacks: Feedback[] = [];
</script>

{#each feedbacks as fb (fb.id)}
    <FeedbackItem item={fb} on:delete-feedback />
{/each}
