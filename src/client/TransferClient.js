const TRANSFERS_STORAGE_KEY = 'transfers';

class TransferClient {
  static saveTransfer(transfer) {
    let storedTransfers = localStorage.getItem(TRANSFERS_STORAGE_KEY);
    let transfers = [];
    if (storedTransfers) {
      transfers = JSON.parse(storedTransfers);
    }
    transfers.push(transfer);
    localStorage.setItem(TRANSFERS_STORAGE_KEY, JSON.stringify(transfers));
  }

  static getTransfers(filters) {
    let allTransfers = JSON.parse(localStorage.getItem(TRANSFERS_STORAGE_KEY));
    if (allTransfers) {
      let sinceDate;
      let untilDate;
      if (filters.fecha_desde) {
        sinceDate = new Date((filters.fecha_desde).replace('-', ' '));
      }
      if (filters.fecha_hasta) {
        untilDate = new Date((filters.fecha_hasta).replace('-', ' '));
      }

      return allTransfers.filter((transfer) => {
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
}

export default TransferClient;
