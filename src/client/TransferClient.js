export const TRANSFERS_STORAGE_KEY = 'transfers';

class TransferClient {
  static saveTransfer(transfer) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedTransfers = localStorage.getItem(TRANSFERS_STORAGE_KEY);
        let transfers = [];
        if (storedTransfers) {
          transfers = JSON.parse(storedTransfers);
        }
        transfers.push(transfer);
        localStorage.setItem(TRANSFERS_STORAGE_KEY, JSON.stringify(transfers));
        resolve('OK');
      }, 2000);
    });
  }

  static getTransfers(filters) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let transfers = [];
        if (localStorage.getItem(TRANSFERS_STORAGE_KEY)) {
          transfers = JSON.parse(localStorage.getItem(TRANSFERS_STORAGE_KEY));
          if (transfers) {
            let sinceDate;
            let untilDate;
            if (filters.fecha_desde) {
              sinceDate = new Date((filters.fecha_desde).replace('-', ' '));
            }
            if (filters.fecha_hasta) {
              untilDate = new Date((filters.fecha_hasta).replace('-', ' '));
            }

            transfers = transfers.filter((transfer) => {
              let transferDate = new Date((transfer.fecha).replace('-', ' '));
              if (sinceDate && untilDate) {
                return transferDate >= sinceDate && transferDate <= untilDate;
              }
              if (sinceDate) {
                return transferDate >= sinceDate;
              }
              if (untilDate) {
                return transferDate <= untilDate;
              }
              return false;
            });
          }
        }
        if (transfers.length > 0) {
            resolve(transfers);
        } else {
          reject('NO_TRANSFERS');
        }
      }, 2000);
    });
  }
}

export default TransferClient;
