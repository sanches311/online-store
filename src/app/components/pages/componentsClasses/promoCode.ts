export class PromoCode {
  updatePrice(price: number): void {
    const newPrice: number = price - price / 10;
    const salePrice = document.getElementById('sale-price');
    if (!salePrice) {
      throw new Error('Div is undefined.');
    }
    salePrice.innerHTML = `${newPrice.toFixed(2)}`;
  }

  checkInputPromoCode(): void {
    const appliedPromo: string[] = [];
    const inputPromo = document.getElementById('promo-code');
    if (!inputPromo) {
      throw new Error('Input promo code is undefined!');
    }

    function inputValidation(input: string): void {
      function addDropEvent(index: string, price: number): void {
        const buttonDrop = document.getElementById(`applied-drop-button__${appliedPromo.length}`);
        if (!buttonDrop) {
          throw new Error('Button is undefined.');
        }
        buttonDrop.addEventListener('click', (): void => {
          const dropId = appliedPromo.indexOf(index);
          appliedPromo.splice(dropId, 1);
          if (appliedPromo.length === 0) {
            const appliedContainer = document.getElementById('summary_applied');
            if (!appliedContainer) {
              throw new Error('Div is undefined.');
            }
            appliedContainer.style.display = 'none';

            const oldPrice = document.querySelector('.summary__price');
            oldPrice?.classList.remove('price-promo-code');
            const summaryPriceContent = document.getElementById('total-price-sale');
            if (!summaryPriceContent) {
              throw new Error('Div is undefined.');
            }
            summaryPriceContent.innerHTML = '';
          }
          const dropItem = document.getElementById(index);
          if (!dropItem) {
            throw new Error('Div is undefined.');
          }
          dropItem.remove();

          const priceDrop: number = price;
          const newPrice: number = priceDrop - (priceDrop / 10) * appliedPromo.length;
          const salePrice = document.getElementById('sale-price');
          if (!salePrice) {
            throw new Error('Div is undefined.');
          }
          salePrice.innerHTML = `${newPrice.toFixed(2)}`;
        });
      }

      function addEvents(inputAdd: string): void {
        const addButton = document.getElementById('app-promo-code');
        if (!addButton) {
          throw new Error('Button is undefined.');
        }

        addButton.addEventListener('click', (): void => {
          (<HTMLInputElement>document.getElementById('promo-code')).value = '';
          addButton.style.display = 'none';

          const oldPrice = document.querySelector('.summary__price');
          oldPrice?.classList.add('price-promo-code');
          const summaryPriceContent = document.getElementById('summary-price');
          if (!summaryPriceContent) {
            throw new Error('Div is undefined.');
          }
          const price = Number(summaryPriceContent.textContent);
          if (!price) {
            throw new Error('Price is undefined.');
          }
          const newPrice: number = price - (price / 10) * appliedPromo.length;
          const salePrice = document.getElementById('total-price-sale');
          if (!salePrice) {
            throw new Error('Div is undefined.');
          }
          salePrice.innerHTML = `Total: <span class="total-price" id='sale-price'>${newPrice.toFixed(2)}</span> USD`;

          const appliedWindow = document.getElementById('applied-code');
          if (!appliedWindow) {
            throw new Error('Div is undefined.');
          }
          const appliedContainer = document.getElementById('summary_applied');
          if (!appliedContainer) {
            throw new Error('Div is undefined.');
          }
          appliedContainer.style.display = 'block';
          const appliedItem = document.createElement('div');
          appliedItem.classList.add('applied-item');
          appliedItem.id = `${inputAdd}`;
          appliedItem.innerHTML = `<p>${inputAdd} - 10%</p> <button id="applied-drop-button__${appliedPromo.length}">drop</button>`;
          appliedWindow.append(appliedItem);
          addDropEvent(inputAdd, price);
        });
      }

      const addContainer = document.getElementById('promo-add');
      if (!addContainer) {
        throw new Error('Div is undefined.');
      }
      addContainer.innerHTML = `<p class="promo-code">${input} - 10%</p>
      <button class="promo-code-button" id="app-promo-code">add</button>`;
      addEvents(input);
    }

    inputPromo.addEventListener('input', (): void => {
      const inputValue = (<HTMLInputElement>document.getElementById('promo-code')).value;
      const regexJs = /^js/i;
      const regexCss = /^css/i;
      const regexHtml = /^html/i;

      if (regexHtml.test(inputValue)) {
        if (appliedPromo.indexOf(inputValue) === -1) {
          appliedPromo.push('HyperText Markup Language');
          inputValidation('HyperText Markup Language');
        } else {
          (<HTMLInputElement>document.getElementById('promo-code')).value = 'Такой промокод уже введён!';
        }
      } else if (regexCss.test(inputValue)) {
        if (appliedPromo.indexOf(inputValue) === -1) {
          appliedPromo.push('Cascading Style Sheets');
          inputValidation('Cascading Style Sheets');
        } else {
          (<HTMLInputElement>document.getElementById('promo-code')).value = 'Такой промокод уже введён!';
        }
      } else if (regexJs.test(inputValue)) {
        if (appliedPromo.indexOf(inputValue) === -1) {
          appliedPromo.push('JavaScript');
          inputValidation('JavaScript');
        } else {
          (<HTMLInputElement>document.getElementById('promo-code')).value = 'Такой промокод уже введён!';
        }
      } else {
        const addContainer = document.getElementById('promo-add');
        if (!addContainer) {
          throw new Error('Div is undefined.');
        }
        addContainer.innerHTML = '';
      }
    });
  }
}

const promoCode = new PromoCode();
export default promoCode;
