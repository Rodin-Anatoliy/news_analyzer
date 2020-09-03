export class DataStorage {
    constructor(itemName) {
        this.itemName = itemName;
    }

    saveData(data) {
        sessionStorage.removeItem(this.itemName);
        sessionStorage.setItem(this.itemName, JSON.stringify(data));
    }

    addIput(input) {
        sessionStorage.setItem('input', input);
    }

    getData() {
        return JSON.parse(sessionStorage.getItem(this.itemName));
    }
}