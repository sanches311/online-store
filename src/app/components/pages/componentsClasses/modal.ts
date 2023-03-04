import belCard from '../../../../assets/img/modal-window/bel.png';
import masterCard from '../../../../assets/img/modal-window/mastercard.png';
import visaCard from '../../../../assets/img/modal-window/visa.jpg';
import cardImg from '../../../../assets/img/modal-window/card.png';

class Modal {
  private confirm: string[] = [];

  private error: string[] = [];

  addEvents(): void {
    this.validationFirstName(this.confirm, this.error);
    this.validationPhone(this.confirm, this.error);
    this.validationMail(this.confirm, this.error);
    this.validationAdress(this.confirm, this.error);
    this.validationCard(this.confirm, this.error);
    this.validationThru(this.confirm, this.error);
    this.validationCVV(this.confirm, this.error);
    this.validationConfirm(this.confirm, this.error);
  }

  validationFirstName(confirm: string[], stringError: string[]): void {
    const inputElem = <HTMLInputElement>document.getElementById('input-first-name');
    
    if (inputElem.value === '') {
      stringError.push(`${inputElem.id}`);
    }

    function checkInput(input: string): void {
      const regexFirstName = /(^[A-Z][a-z]{2,14} [A-Z][a-z]{2,14}$)|(^[А-Я][а-я]{2,14} [А-Я][а-я]{2,14}$)/;
      const inputField = <HTMLInputElement>document.getElementById('input-first-name');

      if (!regexFirstName.test(input)) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');

        if (confirm.includes(`${inputField.id}`)) {
          confirm.splice(confirm.indexOf(`${inputField.id}`), 1);
          stringError.push(`${inputField.id}`);
        }
      } else {
        inputField.classList.add('text-field__input-valid');
        inputField.classList.remove('text-field__input-invalid');

        if (!confirm.includes(`${inputField.id}`)) {
          confirm.push(`${inputField.id}`);
          stringError.splice(stringError.indexOf(`${inputField.id}`), 1);
        }
      }
    }

    inputElem.addEventListener('input', (): void => {
      const inputValue = (<HTMLInputElement>document.getElementById('input-first-name')).value;
      checkInput(inputValue);
    });
  }

  validationPhone(confirm: string[], stringError: string[]): void {
    const input = <HTMLInputElement>document.getElementById('input-phone');

    if (input.value === '') {
      stringError.push(`${input.id}`);
    }

    function checkInput(inputPhone: string): void {
      const regexPhone = /^[/+][\d/(/)/ -]{8,14}\d$/;
      const inputField = <HTMLInputElement>document.getElementById('input-phone');

      if (!regexPhone.test(inputPhone)) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');

        if (confirm.includes(`${inputField.id}`)) {
          confirm.splice(confirm.indexOf(`${inputField.id}`), 1);
          stringError.push(`${inputField.id}`);
        }
      } else {
        inputField.classList.remove('text-field__input-invalid');
        inputField.classList.add('text-field__input-valid');

        if (!confirm.includes(`${inputField.id}`)) {
          confirm.push(`${inputField.id}`);
          stringError.splice(stringError.indexOf(`${inputField.id}`), 1);
        }
      }
    }

    input.addEventListener('input', (): void => {
      input.value = input.value.replace(/[^/+\d]/g, '').substring(0, 14);
      checkInput(input.value);
    });
  }

  validationMail(confirm: string[], stringError: string[]): void {
    const input = <HTMLInputElement>document.getElementById('input-mail');

    if (input.value === '') {
      stringError.push(`${input.id}`);
    }

    function checkInput(inputMail: string): void {
      const regexMail = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
      const inputField = <HTMLInputElement>document.getElementById('input-mail');

      if (!regexMail.test(inputMail)) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');

        if (confirm.includes(`${inputField.id}`)) {
          confirm.splice(confirm.indexOf(`${inputField.id}`), 1);
          stringError.push(`${inputField.id}`);
        }
      } else {
        inputField.classList.remove('text-field__input-invalid');
        inputField.classList.add('text-field__input-valid');

        if (!confirm.includes(`${inputField.id}`)) {
          confirm.push(`${inputField.id}`);
          stringError.splice(stringError.indexOf(`${inputField.id}`), 1);
        }
      }
    }

    input.addEventListener('input', (): void => {
      const inputValue = (<HTMLInputElement>document.getElementById('input-mail')).value;
      checkInput(inputValue);
    });
  }

  validationAdress(confirm: string[], stringError: string[]): void {
    const input = <HTMLInputElement>document.getElementById('input-adress');
    if (input.value === '') {
      stringError.push(`${input.id}`);
    }

    function checkInput(inputAddress: string): void {
      const regexAdress =
        /(^[A-Z][a-z]{4,14} [A-Z][a-z]{4,14} [A-Z][a-z]{4,14}$)|(^[А-Я][а-я]{4,14} [А-Я][а-я]{4,14} [А-Я][а-я]{4,14}$)/;
      const inputField = <HTMLInputElement>document.getElementById('input-adress');

      if (!regexAdress.test(inputAddress)) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');

        if (confirm.includes(`${inputField.id}`)) {
          confirm.splice(confirm.indexOf(`${inputField.id}`), 1);
          stringError.push(`${inputField.id}`);
        }
      } else {
        inputField.classList.remove('text-field__input-invalid');
        inputField.classList.add('text-field__input-valid');
      }

      if (!confirm.includes(`${inputField.id}`)) {
        confirm.push(`${inputField.id}`);
        stringError.splice(stringError.indexOf(`${inputField.id}`), 1);
      }
    }

    input.addEventListener('input', (): void => {
      const inputValue = (<HTMLInputElement>document.getElementById('input-adress')).value;
      checkInput(inputValue);
    });
  }

  validationCard(confirm: string[], stringError: string[]): void {
    const inputEl = <HTMLInputElement>document.getElementById('input-card');
    if (inputEl.value === '') {
      stringError.push(`${inputEl.id}`);
    }

    function checkInput(input: string): void {
      const regexCard = /([0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$)/;
      const inputValue = input
        .split(/(\d{4})/)
        .filter((item) => item !== '')
        .join(' ');
      (<HTMLInputElement>document.getElementById('input-card')).value = inputValue;
      const inputField = <HTMLInputElement>document.getElementById('input-card');
      const iconCard = <HTMLElement>document.getElementById('modal-card-img');

      if (input[0] === '1' || input[0] === '4' || input[0] === '7') {
        iconCard.setAttribute('src', `${belCard}`);
      } else if (input[0] === '2' || input[0] === '5' || input[0] === '8') {
        iconCard.setAttribute('src', `${masterCard}`);
      } else if (input[0] === '3' || input[0] === '6' || input[0] === '9') {
        iconCard.setAttribute('src', `${visaCard}`);
      } else {
        iconCard.setAttribute('src', `${cardImg}`);
      }

      const val = (<HTMLInputElement>document.getElementById('input-card')).value;
      if (!regexCard.test(val)) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');

        if (confirm.includes(`${inputField.id}`)) {
          confirm.splice(confirm.indexOf(`${inputField.id}`), 1);
          stringError.push(`${inputField.id}`);
        }
      } else {
        inputField.classList.remove('text-field__input-invalid');
        inputField.classList.add('text-field__input-valid');

        if (!confirm.includes(`${inputField.id}`)) {
          confirm.push(`${inputField.id}`);
          stringError.splice(stringError.indexOf(`${inputField.id}`), 1);
        }
      }
    }

    inputEl.addEventListener('input', (): void => {
      inputEl.value = inputEl.value.replace(/[^\d]/g, '').substring(0, 16);
      checkInput(inputEl.value);
    });
  }

  validationThru(confirm: string[], stringError: string[]): void {
    const input = <HTMLInputElement>document.getElementById('input-thru');
    if (input.value === '') {
      stringError.push(`${input.id}`);
    }

    function checkInput(inputCheck: string): void {
      const regexCard = /([0-9]{2}\/[0-9]{2}$)/;
      console.log(inputCheck);
      const inputValue = inputCheck
        .split(/(\d{2})/)
        .filter((item) => item !== '')
       .join('/');

      (<HTMLInputElement>document.getElementById('input-thru')).value = inputValue;

      const inputField = <HTMLInputElement>document.getElementById('input-thru');
      const val = (<HTMLInputElement>document.getElementById('input-thru')).value;
      const month = inputCheck.substring(0, 2);

      if (!regexCard.test(val) || parseInt(month, 10) > 12) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');

        if (confirm.includes(`${inputField.id}`)) {
          confirm.splice(confirm.indexOf(`${inputField.id}`), 1);
          stringError.push(`${inputField.id}`);
        }
      } else {
        inputField.classList.remove('text-field__input-invalid');
        inputField.classList.add('text-field__input-valid');

        if (!confirm.includes(`${inputField.id}`)) {
          confirm.push(`${inputField.id}`);
          stringError.splice(stringError.indexOf(`${inputField.id}`), 1);
        }
      }
    }

    input.addEventListener('input', (): void => {
      input.value = input.value.replace(/[^+\d]/g, '').substring(0, 4);
      checkInput(input.value);
    });
  }

  validationCVV(confirm: string[], stringError: string[]): void {
    const input = <HTMLInputElement>document.getElementById('input-cvv');
    if (input.value === '') {
      stringError.push(`${input.id}`);
    }

    function checkInput(inputCheckInput: string): void {
      const regexCard = /([0-9]{3}$)/;
      const inputField = <HTMLInputElement>document.getElementById('input-cvv');

      if (!regexCard.test(inputCheckInput)) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');

        if (confirm.includes(`${inputField.id}`)) {
          confirm.splice(confirm.indexOf(`${inputField.id}`), 1);
          stringError.push(`${inputField.id}`);
        }
      } else {
        inputField.classList.remove('text-field__input-invalid');
        inputField.classList.add('text-field__input-valid');

        if (!confirm.includes(`${inputField.id}`)) {
          confirm.push(`${inputField.id}`);
          stringError.splice(stringError.indexOf(`${inputField.id}`), 1);
        }
      }
    }

    input.addEventListener('input', (): void => {
      input.value = input.value.replace(/[^/+\d]/g, '').substring(0, 3);
      checkInput(input.value);
    });
  }

  validationConfirm(confirm: string[], stringError: string[]): void {
    const buttonConfirm = document.getElementById('modal-confirm');
    const errorContainer = document.querySelector('.form__attention');
    buttonConfirm?.addEventListener('click', (): void => {
      if (confirm.length !== 7) {
        errorContainer?.classList.remove('display-error');
        const errorP = stringError.reduce((newArr: string, elem: string): string => {
          const label = document.querySelector(`[for="${elem}"]`);
          let labelText: string | null = '';
          if (label) {
            labelText = label.textContent;
          }
          newArr += `<p class="error">${labelText}- ERROR</p>`;
          return newArr;
        }, '');
        if (errorContainer) {
          errorContainer.innerHTML = `${errorP}`;
        }
      } else if (confirm.length === 7 && stringError.length === 0) {
        errorContainer?.classList.add('display-error');
        const modalWindow = document.querySelector('.modal__window');
        if (modalWindow) {
          modalWindow.innerHTML = '<h2 class="modal-message">Order successfully completed</h2>';
        }
        setTimeout(() => {
          window.location.href = '/';
          localStorage.clear();
        }, 5000);
      }
    });
  }
}

const modal = new Modal();
export default modal;
