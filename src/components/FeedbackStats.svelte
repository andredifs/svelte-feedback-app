<script lang="ts">
    export let count: number;
    export let average: number;
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings average: {average.toPrecision(2)}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>