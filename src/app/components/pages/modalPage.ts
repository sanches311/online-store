import cardImg from '../../../assets/img/modal-window/card.png';

export class ModalWindow {
  addEvents(elem: HTMLElement): void {
    elem.addEventListener('click', (e) => {
      const modalContainer = document.querySelector('.modal__window');
      if (!modalContainer) {
        throw new Error('Div is undefined.');
      }
      if (!e.composedPath().includes(<Node>modalContainer)) {
        const deleteDiv = document.getElementById('modal-window');
        if (!deleteDiv) {
          throw new Error('Div is undefined.');
        }
        deleteDiv.remove();
      }
    });
  }

  render(): string {
    return ` <div class="modal modal-active" id='open-modal'>
  <div class="modal-container">
      <div class="modal__window" role="dialog" aria-modal="true">
          <h2>Personal details</h2>
          <form action="" class="form">
              <div class="form__field">
                  <label for="input-first-name">First Name</label>
                  <input type="text" placeholder="First Name" id="input-first-name">
              </div>
              <div class="form__field">
                  <label for="input-phone">Phone number</label>
                  <input type="tel" placeholder="Phone number" id="input-phone">
              </div>
              <div class="form__field">
                  <label for="input-adress">Delivery Address</label>
                  <input type="text" placeholder="Delivery Address" id="input-adress">
              </div>
              <div class="form__field">
                  <label for="input-mail">Email address</label>
                  <input type="email" placeholder="Email address" id="input-mail">
              </div>
              <div class="form__card">
                  <h3>Credit card details</h3>
                  <div class="card-details">
                      <div class="two-field">
                          <div class="card-details__icons">
                              <img src="${cardImg}" alt="Card" id="modal-card-img">
                          </div>
                          <div class="card-details__number">
                              <label for="input-card">Card number</label>
                              <input type="text" placeholder="Card number" id="input-card">
                          </div>
                      </div>
                      <div class="two-field">
                          <div class="card-details__valid">
                              <label for="input-thru">Expiration date</label>
                              <input type="text" id="input-thru" placeholder="Card thru">
                          </div>
                          <div class="card-details__valid">
                              <label for="input-cvv">CVC</label>
                              <input type="text" placeholder="CVC" id="input-cvv">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="form__attention display-error"></div>
              <div class="form__button">
                  <button type="submit" id="modal-confirm">confirm</button>
              </div>
          </form>
      </div>
  </div>
</div>`;
  }
}

const modalWindow = new ModalWindow();
export default modalWindow;
