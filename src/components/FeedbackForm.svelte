<script lang="ts">
    import Card from './Card.svelte'
    import Button from './Button.svelte';
    import RatingSelect from './RatingSelect.svelte'
    import type { Feedback } from '../types';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let count: number;
    let text = '';
    let name = '';
    let rating = 10;
    const minText = 10;
    let buttonDisabled = false;
    let message: string;

    const handleInput = () => {
        if (text.trim().length < minText) {
            message = `Text must be at least ${minText}`
            buttonDisabled = true;
        }
        else {
            message = null;
            buttonDisabled = false;
        }
    }

    const handleSelect = (e: CustomEvent) => rating = e.detail;

    const handleSubmit = () => {
        if(text.trim().length > minText) {
            const newFeedback: Feedback = {
                name: name,
                text: text,
                id: count + 1,
                rating: rating,
            }

            dispatch('add-feedback', newFeedback);
        }
    }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>
    <form on:submit={handleSubmit}>
        <!-- Rating Select -->
        <div class="input-group">
            <input type="text" bind:value={name} placeholder="Your name">
        </div>
        <div class="input-group">
            <input type="text" class="input-text" on:input={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back">
            <Button disabled={buttonDisabled} type='submit'>Send</Button>
        </div>
        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
        <RatingSelect on:rating-select={handleSelect}/>
    </form>
</Card>


<style>
    header {
      max-width: 400px;
      margin: auto;
    }

    header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }

    .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
      margin-top: 15px;
    }

    input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
    }

    input:focus {
      outline: none;
    }

    .message{
      padding-top: 10px;
      text-align: center;
      color: rebeccapurple;
    }
  </style>
