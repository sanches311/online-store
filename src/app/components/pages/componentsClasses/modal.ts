class Modal {
  private firstName: string = '';
  addEvents() {
    this.validationFirstName();
    this.validationPhone();
    this.validationMail();
    this.validationAdress();
   
  }
  

  validationFirstName() {
    const inputFirstName = document.getElementById('input-first-name');
    if (!inputFirstName) {
      throw new Error('Input first name is undefined.')
    }

    inputFirstName.addEventListener('input', function (e) {
      let inputValue = (<HTMLInputElement>document.getElementById('input-first-name')).value;
      
      checkInput(inputValue);
    });

    function checkInput(input: string) {
      const regexFirstName = /(^[A-Z][a-z]{2,14} [A-Z][a-z]{2,14}$)|(^[А-Я][а-я]{2,14} [А-Я][а-я]{2,14}$)/;
      let inputField = (<HTMLInputElement>document.getElementById('input-first-name'));
      if (!regexFirstName.test(input)) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');
      } else {
        inputField.classList.add('text-field__input-valid');
       inputField.classList.remove('text-field__input-invalid');
      }
    }
  }

  validationPhone() {
    const inputPhone = document.getElementById('input-phone');
    if (!inputPhone) {
      throw new Error('Input phone is undefined.')
    }

    inputPhone.addEventListener('input', function (e) {
      let inputValue = (<HTMLInputElement>document.getElementById('input-phone')).value;
      
      checkInput(inputValue);
    });

    function checkInput(input: string) {
      const regexPhone = /^[\d\+][\d\(\)\ -]{8,14}\d$/;
      let inputField = (<HTMLInputElement>document.getElementById('input-phone'));
      if (!regexPhone.test(input)) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');
      } else {
      inputField.classList.remove('text-field__input-invalid');
        inputField.classList.add('text-field__input-valid');
      }
    }
  }

  validationMail() {
    const inputMail = document.getElementById('input-mail');
    if (!inputMail) {
      throw new Error('Input mail is undefined.')
    }

    inputMail.addEventListener('input', function (e) {
      let inputValue = (<HTMLInputElement>document.getElementById('input-mail')).value;
      checkInput(inputValue);
    });

    function checkInput(input: string) {
      const regexMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
      let inputField = (<HTMLInputElement>document.getElementById('input-mail'));
      if (!regexMail.test(input)) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');
      } else {
      inputField.classList.remove('text-field__input-invalid');
        inputField.classList.add('text-field__input-valid');
      }
    }
  }

  validationAdress() {
    const inputAdress = document.getElementById('input-adress');
    if (!inputAdress) {
      throw new Error('Input adress is undefined.')
    }

    inputAdress.addEventListener('input', function (e) {
      let inputValue = (<HTMLInputElement>document.getElementById('input-adress')).value;
      checkInput(inputValue);
    });

    function checkInput(input: string) {
      const regexAdress = /(^[A-Z][a-z]{4,14} [A-Z][a-z]{4,14} [A-Z][a-z]{4,14}$)|(^[А-Я][а-я]{4,14} [А-Я][а-я]{4,14} [А-Я][а-я]{4,14}$)/;;
      let inputField = (<HTMLInputElement>document.getElementById('input-adress'));
      if (!regexAdress.test(input)) {
        inputField.classList.remove('text-field__input-valid');
        inputField.classList.add('text-field__input-invalid');
      } else {
      inputField.classList.remove('text-field__input-invalid');
        inputField.classList.add('text-field__input-valid');
      }
    }
  }

}
const modal = new Modal();
export default modal;