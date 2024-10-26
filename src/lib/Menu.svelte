<script lang="ts">
    import { enhance } from "$app/forms";
    import ShinyLabel from "./ShinyLabel.svelte";

    // uploader binds to form, with correct typing
    let uploader: HTMLFormElement;
</script>

<header>
    
    <ShinyLabel for="fileUpload" size="small">Upload</ShinyLabel>
    <form method="POST" bind:this={uploader} use:enhance>
        <input
            type="file"
            name="fileUpload"
            id="fileUpload"
            onchange={() => uploader.submit()}
        />
    </form>
    <nav>
        <ul></ul>
    </nav>
</header>

<style>
    header {
        background-color: lightblue;
        padding: 0.1rem;
        padding-bottom: 0.1rem;
    }

    input[type="file"] {
        display: none;
    }

    nav {
        display: none;
    }

    nav ul {
        display: none;
    }

</style>
