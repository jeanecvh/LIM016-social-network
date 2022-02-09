export const headerTemplate = (section) => {
    const header =
      `<header>
<div class="logo-container">
    <img src="./images/logos/Logo_ScoobyGram.png" alt="logo" class="logo"/>
</div>
</header>
${section}`

const divHeader = document.createElement('header');
divHeader.innerHTML = header;

return divHeader}

