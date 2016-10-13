import TransferClient, { TRANSFERS_STORAGE_KEY } from './TransferClient';

beforeAll(() => {
  let localStorageMock = (function() {
    let store = {};
    return {
      getItem: function(key) {
        return store[key];
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      }
    };
  })();
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
});

describe('TransferClient', () => {
  describe('saveTransfer()', () => {
    it('Should add transfer to localStorage when saveTransfer is calling', () => {
      localStorage.clear();
      const transfer = {
        fecha: '2016-10-11',
        destinatario: 'Some destination',
        monto: 0
      };
      TransferClient.saveTransfer(transfer);
      expect(localStorage.getItem(TRANSFERS_STORAGE_KEY).includes(JSON.stringify(transfer))).toBe(true);
    });

    it('Should add transfer to localStorage when saveTransfer is calling and there are transfers added', () => {
      localStorage.clear();
      const transfer = {
        fecha: '2016-10-11',
        destinatario: 'Some destination',
        monto: 0
      };
      const nextTransfer = {
        fecha: '2016-10-12',
        destinatario: 'Some destination',
        monto: 0
      }
      TransferClient.saveTransfer(transfer);
      TransferClient.saveTransfer(nextTransfer);
      expect(localStorage.getItem(TRANSFERS_STORAGE_KEY).includes(JSON.stringify(nextTransfer))).toBe(true);
    });
  });

  describe('getTransfers()', () => {
    it('Should return empty transfers when no transfer saved yet', () => {
      localStorage.clear();
      const filter = {
        fecha_desde: '2016-10-11',
        fecha_hasta: ''
      };
      const transfers = TransferClient.getTransfers(filter);
      expect(transfers.length).toEqual(0);
    });

    it('Should return transfers when a transfer is saved', () => {
      localStorage.clear();
      const filter = {
        fecha_desde: '2016-10-11',
        fecha_hasta: ''
      };
      const transfer = {
        fecha: '2016-10-11',
        destinatario: 'Some destination',
        monto: 0
      }
      TransferClient.saveTransfer(transfer);
      const transfers = TransferClient.getTransfers(filter);
      expect(transfers.length).toBeGreaterThan(0);
    });

    it('Should return empty transfers when saved transfer date is lower than since date filter', () => {
      localStorage.clear();
      const filter = {
        fecha_desde: '2016-10-12',
        fecha_hasta: ''
      };
      const transfer = {
        fecha: '2016-10-11',
        destinatario: 'Some destination',
        monto: 0
      }
      TransferClient.saveTransfer(transfer);
      const transfers = TransferClient.getTransfers(filter);
      expect(transfers.length).toBe(0);
    });

    it('Should return empty transfers when saved transfer date is greater than until date filter', () => {
      localStorage.clear();
      const filter = {
        fecha_desde: '',
        fecha_hasta: '2016-10-11'
      };
      const transfer = {
        fecha: '2016-10-12',
        destinatario: 'Some destination',
        monto: 0
      }
      TransferClient.saveTransfer(transfer);
      const transfers = TransferClient.getTransfers(filter);
      expect(transfers.length).toBe(0);
    });

    it('Should return transfers when a transfer date is greater or equal than since date filter', () => {
      localStorage.clear();
      const filter = {
        fecha_desde: '2016-10-11',
        fecha_hasta: ''
      };
      const transfer = {
        fecha: '2016-10-11',
        destinatario: 'Some destination',
        monto: 0
      }
      TransferClient.saveTransfer(transfer);
      const transfers = TransferClient.getTransfers(filter);
      expect(transfers.length).toBeGreaterThan(0);
    });

    it('Should return transfers when a transfer date is lower or equal than until date filter', () => {
      localStorage.clear();
      const filter = {
        fecha_desde: '',
        fecha_hasta: '2016-10-11'
      };
      const transfer = {
        fecha: '2016-10-11',
        destinatario: 'Some destination',
        monto: 0
      }
      TransferClient.saveTransfer(transfer);
      const transfers = TransferClient.getTransfers(filter);
      expect(transfers.length).toBeGreaterThan(0);
    });

    it('Should return empty transfers when saved transfer date is lowere than since date filter or greater than until date filter', () => {
      localStorage.clear();
      const filter = {
        fecha_desde: '2016-10-11',
        fecha_hasta: '2016-10-12'
      };
      const transfer = {
        fecha: '2016-10-13',
        destinatario: 'Some destination',
        monto: 0
      }
      TransferClient.saveTransfer(transfer);
      const transfers = TransferClient.getTransfers(filter);
      expect(transfers.length).toBe(0);
    });

    it('Should return transfers when a transfer date is greater or equal than since date filter or lower or equal than until date filter', () => {
      localStorage.clear();
      const filter = {
        fecha_desde: '2016-10-10',
        fecha_hasta: '2016-10-12'
      };
      const transfer = {
        fecha: '2016-10-11',
        destinatario: 'Some destination',
        monto: 0
      }
      TransferClient.saveTransfer(transfer);
      const transfers = TransferClient.getTransfers(filter);
      expect(transfers.length).toBeGreaterThan(0);
    });

    it('Should return empty transfers when no filter dates are sended', () => {
      localStorage.clear();
      const transfer = {
        fecha: '2016-10-11',
        destinatario: 'Some destination',
        monto: 0
      };
      const filter = {};
      TransferClient.saveTransfer(transfer);
      const transfers = TransferClient.getTransfers(filter);
      expect(transfers.length).toBe(0);
    });
  });
});
