const DB_NAME = 'vue3DB';
const DB_VERSION = 1;
const DB_STORES = ['cats', 'dogs'];
let DB;

// https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore

export default {
  async getDb() {
    return new Promise((resolve, reject) => {
      if (DB) {
        return resolve(DB);
      }
      console.info('OPENING DB', DB);
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = (e) => {
        console.info('Error opening db', e);
        reject('Error');
      };

      request.onsuccess = (e) => {
        DB = e.target.result;
        resolve(DB);
      };

      request.onupgradeneeded = (e) => {
        console.info('onupgradeneeded');
        const db = e.target.result;
        DB_STORES.forEach((item) => {
          db.createObjectStore(item, { autoIncrement: true, keyPath: 'id' });
        });
      };
    });
  },
  async add({ storeName, item }) {
    if (!storeName || !item) {
      throw 'storeName, item is required';
    }
    const db = await this.getDb();

    return new Promise((resolve) => {
      const trans = db.transaction([storeName], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };

      const store = trans.objectStore(storeName);
      store.add(item);
    });
  },
  async clear(storeName) {
    const db = await this.getDb();

    return new Promise((resolve) => {
      const trans = db.transaction([storeName], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };

      const store = trans.objectStore(storeName);
      store.clear();
    });
  },

  async delete({ storeName, id }) {
    if (!storeName || !id) {
      throw 'storeName, id is required';
    }
    const db = await this.getDb();

    return new Promise((resolve) => {
      const trans = db.transaction([storeName], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };

      const store = trans.objectStore(storeName);
      store.delete(id);
    });
  },
  async getAll({ storeName }) {
    if (!storeName) {
      throw 'storeName is required';
    }
    const db = await this.getDb();

    return new Promise((resolve) => {
      let result = [];
      const trans = db.transaction([storeName], 'readonly');
      const store = trans.objectStore(storeName);

      trans.oncomplete = () => {
        resolve(result);
      };

      store.openCursor().onsuccess = (e) => {
        let cursor = e.target.result;
        if (cursor) {
          result.push(cursor.value);
          cursor.continue();
        }
      };
    });
  },

  async put({ storeName, item = {}, id }) {
    if (!storeName) {
      throw 'storeName, item is required';
    }
    const db = await this.getDb();

    return new Promise((resolve) => {
      const trans = db.transaction([storeName], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };

      console.log(storeName, item, id);

      const store = trans.objectStore(storeName);
      store.put(item);
    });
  },

  async getOne({ storeName, id }) {
    if (!storeName || !id) {
      throw 'storeName, id is required';
    }
    const db = await this.getDb();
    let target = null;

    return new Promise((resolve) => {
      const trans = db.transaction([storeName], 'readwrite');

      trans.oncomplete = () => {
        resolve(target?.result);
      };

      const store = trans.objectStore(storeName);
      target = store.get(id);
    });
  },
};
