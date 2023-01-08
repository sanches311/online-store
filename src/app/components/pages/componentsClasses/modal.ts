import belCard from '../../../../assets/img/modal-window/bel.png';
import masterCard from '../../../../assets/img/modal-window/mastercard.png';
import visaCard from '../../../../assets/img/modal-window/visa.jpg';
import cardImg from '../../../../assets/img/modal-window/card.png';

class Modal {
  private confirm: string[] = [];
  private error: string[] = [];
  addEvents() {

    this.validationFirstName(this.confirm, this.error);
    this.validationPhone(this.confirm, this.error);
    this.validationMail(this.confirm, this.error);
    this.validationAdress(this.confirm, this.error);
    this.validationCard(this.confirm, this.error);
    this.validationThru(this.confirm, this.error); 
    this.validationCVV(this.confirm, this.error);
    this.validationConfirm(this.confirm, this.error);
    
  }



  validationFirstName(confirm: string[], stringError: string[]) {
    let input = (<HTMLInputElement>document.getElementById('input-first-name'));
    if (input.value == '') {
      stringError.push(`${input.id}`);
    }

    input.addEventListener('input', function (e) {
      let inputValue = (<HTMLInputElement>document.getElementById('input-first-name')).value;
      checkInput(inputValue);
    });

    function checkInput(input: string) {
      const regexFirstName = /(^[A-Z][a-z]{2,14} [A-Z][a-z]{2,14}$)|(^[А-Я][а-я]{2,14} [А-Я][а-я]{2,14}$)/;
      let inputField = (<HTMLInputElement>document.getElementById('input-first-name'));
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
  }

  validationPhone(confirm: string[], stringError: string[]) {
    let input = (<HTMLInputElement>document.getElementById('input-phone'));
    if (input.value == '') {
      stringError.push(`${input.id}`);
    }

    input.addEventListener('input', function (e) {
      input.value = input.value.replace(/[^\+\d]/g, '').substring(0, 14);
      checkInput(input.value);
    });

    function checkInput(input: string) {
      const regexPhone = /^[\+][\d\(\)\ -]{8,14}\d$/;
      let inputField = (<HTMLInputElement>document.getElementById('input-phone'));
      if (!regexPhone.test(input)) {
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
  }

  validationMail(confirm: string[], stringError: string[]) {
    let input = (<HTMLInputElement>document.getElementById('input-mail'));
    if (input.value == '') {
      stringError.push(`${input.id}`);
    }

    input.addEventListener('input', function (e) {
      let inputValue = (<HTMLInputElement>document.getElementById('input-mail')).value;
      checkInput(inputValue);
    });

    function checkInput(input: string) {
      const regexMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
      let inputField = (<HTMLInputElement>document.getElementById('input-mail'));
      if (!regexMail.test(input)) {
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
  }

  validationAdress(confirm: string[], stringError: string[]) {
    let input = (<HTMLInputElement>document.getElementById('input-adress'));
    if (input.value == '') {
      stringError.push(`${input.id}`);
    }

    input.addEventListener('input', function (e) {
      let inputValue = (<HTMLInputElement>document.getElementById('input-adress')).value;
      checkInput(inputValue);
    });

    function checkInput(input: string) {
      const regexAdress = /(^[A-Z][a-z]{4,14} [A-Z][a-z]{4,14} [A-Z][a-z]{4,14}$)|(^[А-Я][а-я]{4,14} [А-Я][а-я]{4,14} [А-Я][а-я]{4,14}$)/;;
      let inputField = (<HTMLInputElement>document.getElementById('input-adress'));
      if (!regexAdress.test(input)) {
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
  }

  validationCard(confirm: string[], stringError: string[]) {
    let input = (<HTMLInputElement>document.getElementById('input-card'));
    if (input.value == '') {
      stringError.push(`${input.id}`);
    }

    input.addEventListener('input', function (e) {
      
      input.value = input.value.replace(/[^\d]/g, '').substring(0, 16);
      checkInput(input.value);
    });

    function checkInput(input: string) {
      const regexCard = /([0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$)/;
      let inputValue = input.split(/(\d{4})/).filter(item => item !== '').join(' ');
      (<HTMLInputElement>document.getElementById('input-card')).value = inputValue;
      let inputField = (<HTMLInputElement>document.getElementById('input-card'));
      let iconCard = (<HTMLElement>document.getElementById('modal-card-img'));
      if (input[0] == '1' || input[0] == '4' || input[0] == '7') {
        iconCard.setAttribute('src', `${belCard}`);
      } else if (input[0] == '2' || input[0] == '5' || input[0] == '8') {
        iconCard.setAttribute('src', `${masterCard}`);
      } else if (input[0] == '3' || input[0] == '6' || input[0] == '9') {
        iconCard.setAttribute('src', `${visaCard}`);
      } else {
        iconCard.setAttribute('src', `${cardImg}`);
      }
      let val = (<HTMLInputElement>document.getElementById('input-card')).value;
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
  }

  validationThru(confirm: string[], stringError: string[]) {
    
    let input = (<HTMLInputElement>document.getElementById('input-thru'));
    if (input.value == '') {
      stringError.push(`${input.id}`);
    }

    input.addEventListener('input', function (e) {
      input.value = input.value.replace(/[^\+\d]/g, '').substring(0, 4);
      checkInput(input.value);
    });

    function checkInput(input: string) {
      const regexCard = /([0-9]{2}\/[0-9]{2}$)/;

      let inputValue = input.split(/(\d{2})/).filter(item => item !== '').join('/');

      (<HTMLInputElement>document.getElementById('input-thru')).value = inputValue;

      let inputField = (<HTMLInputElement>document.getElementById('input-thru'));
      let val = (<HTMLInputElement>document.getElementById('input-thru')).value;

      let month = input.substring(0, 2);

      if (!regexCard.test(val) || parseInt(month) > 12) {
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
  }

  validationCVV(confirm: string[], stringError: string[]) {
  
    let input = (<HTMLInputElement>document.getElementById('input-cvv'));
    if (input.value == '') {
      stringError.push(`${input.id}`);
    }

    input.addEventListener('input', function (e) {
      input.value = input.value.replace(/[^\+\d]/g, '').substring(0, 3);
      checkInput(input.value);
    });

    function checkInput(input: string) {
      const regexCard = /([0-9]{3}$)/;

      let inputField = (<HTMLInputElement>document.getElementById('input-cvv'));

      if (!regexCard.test(input)) {
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
  }

  validationConfirm(confirm: string[], stringError: string[]) {
    let buttonConfirm = document.getElementById('modal-confirm');
    let errorContainer = document.querySelector('.form__attention');
    function showMessage() {
      let modalWindow = document.querySelector('.modal__window');
      modalWindow!.innerHTML = '<h2 class="modal-message">Order successfully completed</h2>';
    }
    buttonConfirm?.addEventListener('click', function (e) {
      console.log(confirm);
      console.log(stringError);
      if (confirm.length != 7) {
        errorContainer?.classList.remove('display-error');

        let errorP = stringError.reduce((newArr: string, elem: string) => {
          let label = document.querySelector(`[for="${elem}"]`);
    let labelText: string = label?.textContent!;
          return newArr += `<p class="error">${labelText}- ERROR</p>`;
        }, '')
        errorContainer!.innerHTML = `${errorP}`;

      } else if (confirm.length == 7 && stringError.length == 0) {
        errorContainer!.classList.add('display-error');
        setTimeout(showMessage, 3000);
      }
      
    })

  }
}
const modal = new Modal();
export default modal;