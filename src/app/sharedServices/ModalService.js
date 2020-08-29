import { Subject } from 'rxjs';

export default class ModalService {
    static serviceInstance = null;

    static UPDATE_MODAL_NAME = 'update';

    static DELETE_MODAL_NAME = 'delete';

    static getInstance() {
      if (!ModalService.serviceInstance) {
        ModalService.serviceInstance = new ModalService();
      }
      return ModalService.serviceInstance;
    }

    modalStateChange = new Subject();

    openModal(modalName, params) {
      this.modalStateChange.next({
        modalName,
        isOpen: true,
        ...params,
      });
    }

    closeModal(modalName) {
      this.modalStateChange.next({
        modalName,
        isOpen: false,
      });
    }
}
