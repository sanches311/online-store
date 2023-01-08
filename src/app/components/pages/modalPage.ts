export class ModalWindow {
    constructor() {
       
    }
    addEvents(elem: HTMLElement) {

        elem.addEventListener('click', function (e) {
            let modalContainer = document.querySelector('.modal__window');
            if (!modalContainer) {
                throw new Error('Div is undefined.')
            }
            let withinModal = e.composedPath().includes((<Node>modalContainer));
            if (!(e.composedPath().includes((<Node>modalContainer)))) {
                console.log(withinModal);
                let deleteDiv = document.getElementById('modal-window');
                if (!deleteDiv) {
                    throw new Error('Div is undefined.')
                }
                deleteDiv.remove();
                return;
            }
        })
        
    }
    render() {
       
        return ` <div class="modal modal-active" id='open-modal'>
  <div class="modal-container">
      <div class="modal__window" role="dialog" aria-modal="true">
          <h2>Personal details</h2>
          <form action="" class="form">
              <div class="form__field">
                  <label for="">First Name</label>
                  <input type="text" placeholder="First Name" id="input-first-name">
              </div>
              <div class="form__field">
                  <label for="">Phone number</label>
                  <input type="tel" placeholder="Phone number" id="input-phone">
              </div>
              <div class="form__field">
                  <label for="">Delivery Address</label>
                  <input type="text" placeholder="Delivery Address" id="input-adress">
              </div>
              <div class="form__field">
                  <label for="">Email address</label>
                  <input type="email" placeholder="Email address" id="input-mail">
              </div>
              <div class="form__card">
                  <h3>Credit card details</h3>
                  <div class="card-details">
                      <div class="two-field">
                          <div class="card-details__icons">
                              <img src="../../../assets/img/modal-window/mastercard.png" alt="Card">
                          </div>
                          <div class="card-details__number">
                              <label for="">Card number</label>
                              <input type="number" placeholder="Card number">
                          </div>
                      </div>
                      <div class="two-field">
                          <div class="card-details__valid">
                              <label for="">Expiration date</label>
                              <input type="date">
                          </div>
                          <div class="card-details__valid">
                              <label for="">CVC</label>
                              <input type="number" placeholder="CVC">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="form__attention">
                  <p class="error">Card number - ERROR</p>
                  <p class="error">Card expiration date - ERROR</p>
                  <p class="error">Card CVC - ERROR</p>
              </div>
              <div class="form__button">
                  <button type="submit">confirm</button>
              </div>
          </form>
      </div>
  </div>
</div>`;

    }

}

let modalWindow = new ModalWindow();
export default modalWindow;