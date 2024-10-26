<header>
    <label for="fileUpload" class="button-71">Upload</label>
    <input type="file" name="fileUpload" id="fileUpload" onchange={() => alert('lol')}>

    <nav>
        <ul>
        </ul>
    </nav>
</header>

<!-- HTML !-->
<button class="button-71">Upload</button>

<style>
    header {
        background-color: lightblue;
        padding: 0;
    }

    input[type="file"] {
        display: none;
    }

    label[for="fileUpload"] {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 3px 6px;
        cursor: pointer;
    }

    .button-71 {
        background-color: #0078d0;
        border: 0;
        border-radius: 56px;
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
        transition: all .3s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    .button-71:before {
        background-color: initial;
        background-image: linear-gradient(rgba(255,255,255,0) 0, rgb(255, 255, 255) 1%, rgba(255, 255, 255, 0) 90%);
        border-radius: 125px;
        content: "";
        height: 50%;
        left: 5%;
        opacity: .5;
        position: absolute;
        top: 0;
        transition: all .3s;
        width: 90%;
    }

    .button-71:hover:before {
        opacity: 0.6;
    }

    .button-71:active:before {
        background-image: linear-gradient(rgba(255,255,255,0) 0, rgb(120, 120, 120) 1%, rgba(120, 120, 120, 0) 90%);
    }

    @media (min-width: 768px) {
        .button-71 {
            padding: 16px 48px;
        }
    }
</style>
