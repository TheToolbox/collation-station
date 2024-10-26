<script lang="ts">
    import type { Snippet } from "svelte";

    type Any = any;
    type Sizes = "small" | "medium" | "large";
    interface Inputs extends Any {
        children: Snippet;
        size: Sizes;
    }

    let { children, size,...others }: Inputs = $props();
</script>
    
    <label {...others} class={size}>
        {#if children}
            {@render children()}
        {/if}
    </label>

<style>
    .small {
        font-size: 12px;
        padding: 4px 8px;
    }

    .medium {
        font-size: 16px;
        padding: 10px 16px;
    }

    .large {
        font-size: 18px;
        padding: 16px 21px;
    }

    label {
        background-color: #0078d0;
        border: 0;
        border-radius: 22px;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
        font-size: 18px;
        font-weight: 600;
        outline: 0;
        padding: 16px 21px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: all .025s ease-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    label:before {
        background-color: initial;
        background-image: linear-gradient(rgba(255,255,255,0) 0, rgb(255, 255, 255) 1%, rgba(255, 255, 255, 0) 90%);
        border-radius: 125px;
        content: "";
        height: 50%;
        left: 7.5%;
        opacity: .5;
        position: absolute;
        top: 0;
        transition: all .1s ease-out;
        width: 85%;
    }

    label:hover {
        background-color: #0c84d6;
    }

    label:hover:before {
        opacity: 0.6;
    }

    label:active:before {
        opacity: 0;
        box-shadow: inset gray 0px 0px 15px -12px;
    }

    @media (min-width: 768px) {
        label {
            padding: 16px 48px;
        }
    }
</style>