export const headerTemplate = () => {
    const header =
      `<header>
<div class="logo-container">
    <img src="./images/logos/Logo_ScoobyGram.png" alt="logo" class="logo"/>
</div>
</header>`

const divHeader = document.createElement('div');
divHeader.innerHTML = header;

return divHeader}