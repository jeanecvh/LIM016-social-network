export const headerTemplate = () => {
    const header =
      `<header>
<div class="logo-container">
    <img src="../src/images/logos/logoSG.png" alt="logo" class="logo"/>
</div>
</header>`

const divHeader = document.createElement('div');
divHeader.innerHTML = header;

return divHeader}