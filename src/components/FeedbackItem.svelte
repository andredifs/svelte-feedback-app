<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Feedback } from "../types";
    import Card from './Card.svelte';

    export let item: Feedback;

    const dispatch = createEventDispatcher();

    const handleDelete = (fb: Feedback) => {
        dispatch('delete-feedback', fb)
    }
</script>

<Card>
    <div class="num-display">
        {item.rating}
    </div>
    <div class="name-display">
        {item.name}
    </div>
    <button class="close" on:click={() => handleDelete(item)}>X</button>
    <p class="text-display">
        {item.text}
    </p>
</Card>

<style>
    .num-display {
        position: absolute;
        text-align: center;
        top: -5px;
        left: -10px;
        width: 50px;
        height: 50px;
        background-color: #ff6a95;
        color: #fff;
        border: 2px #eee solid;
        border-radius: 50%;
        padding: 10px;
        font-size: 19;
    }

    .name-display {
        font-weight: bold;
    }

    .close {
        position: absolute;
        text-align: center;
        background: none;
        border: none;
        width: 30px;
        height: 30px;
        top: 10px;
        right: 20px;
        cursor: pointer;
    }
</style>