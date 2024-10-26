<script lang="ts">
    import Menu from '../lib/Menu.svelte';
    let { children } = $props();
</script>

<Menu></Menu>
{#if children}
    {@render children()}    
{/if}

<style>
    :global(body) {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    
</style>
